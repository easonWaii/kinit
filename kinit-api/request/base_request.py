from abc import ABC, abstractmethod
from typing import Dict, Optional


class AbstractClient(ABC):

    @abstractmethod
    async def get_base_info(self):
        pass

    @abstractmethod
    async def get_video_list(self):
        pass

    @abstractmethod
    async def pong(self):
        pass

    @abstractmethod
    async def update_cookie(self):
        pass

    @abstractmethod
    async def update_base_info(self):
        pass

    @abstractmethod
    async def request(self, method, url, **kwargs):
        pass


