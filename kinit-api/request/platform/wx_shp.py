import json
import time
from typing import Dict, Union, Any

import httpx

from httpx import RequestError
from motor.motor_asyncio import AsyncIOMotorDatabase

from redis.asyncio.client import Redis

from apps.platform.baseinfo.crud import PlatformCookieDal
from apps.platform.baseinfo.schemas import PlatformCookie
from request.base_request import AbstractClient
from utils.request_util import get_user_agent
from application.request_config import wx_sph


class WxSphClient(AbstractClient):

    def __init__(self,
                 union_id: str,
                 session_id: str,
                 finder_id: str,
                 db: AsyncIOMotorDatabase,
                 timeout=10,
                 ):
        self.union_id = union_id
        self.session_id = session_id
        self.timeout = timeout
        self.headers = {'User-Agent': get_user_agent(),
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json;charset=UTF-8'
                        }
        self._host = wx_sph.BASE_URL
        # finder_id与request_body应该去redis缓存中找，如果没有，则新建
        self.finder_id = finder_id
        self.db = db


    def _get_request_body(self) -> Dict[str, str]:
        return {
            "timestamp": time.time() * 1000,
            "_log_finder_id": self.finder_id,
            "rawKeyBuff": "null"
        }

    def _get_cookies(self) -> Dict[str, str]:
        return {'sessionid': self.session_id}

    async def _update_base_info(self, data: Dict[str, Any]):
        await PlatformCookieDal(self.db).update_current_info(data)

    async def request(self, method, url, **kwargs) -> Union[str, Any]:
        async with httpx.AsyncClient() as client:
            response = await client.request(
                method, url, timeout=self.timeout,
                headers=self.headers,
                cookies=self._get_cookies(),
                **kwargs
            )
        data: Dict = response.json()
        if data["errCode"] == 0:
            return data.get("data", {})
        elif data["errCode"] == 300333:
            # 发生错误300333错误时，为cookie失效，清除cache中的sessionid

            raise RequestError('cookie已失效')
        else:
            raise RequestError(data.get("errMsg", ''))

    async def get_base_info(self) -> Dict[str, Any]:
        base_info_url = wx_sph.BASE_INFO_URL
        res_data = await self.request('POST', base_info_url, data=self._get_request_body())
        res_data = json.loads(res_data)
        find_user = res_data['finderUser']
        response_data = {
            'uniq_id': find_user['uniqId'],
            'nick_name': find_user['nickname'],
            'head_img_url': find_user['headImgUrl'],
            'finder_id': find_user['finderUsername'],
            'feeds_count': res_data['feedsCount'],
            'fans_count': res_data['fansCount'],
            'session_id': self.session_id,
            'platform_name':'wx_sph'
        }
        return response_data

    async def get_video_list(self):
        video_list_url = wx_sph.VIDEO_LIST_URL
        res_data = await self.request('POST', video_list_url,data=self._get_request_body())

    async def pong(self):
        pass

    # update cookie info and update to database
    # return base_info
    async def update_cookie(self):
        data = await self.get_base_info()
        await self._update_base_info(data)
        return data


