(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-link/components/uni-link/uni-link"],{462:function(n,t,e){"use strict";e.r(t);var i=e(463),r=e(465);for(var u in r)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e(467);var o,l=e(32),a=Object(l["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],o);a.options.__file="uni_modules/uni-link/components/uni-link/uni-link.vue",t["default"]=a.exports},463:function(n,t,e){"use strict";e.r(t);var i=e(464);e.d(t,"render",(function(){return i["render"]})),e.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(t,"components",(function(){return i["components"]}))},464:function(n,t,e){"use strict";var i;e.r(t),e.d(t,"render",(function(){return r})),e.d(t,"staticRenderFns",(function(){return o})),e.d(t,"recyclableRender",(function(){return u})),e.d(t,"components",(function(){return i}));var r=function(){var n=this,t=n.$createElement;n._self._c},u=!1,o=[];r._withStripped=!0},465:function(n,t,e){"use strict";e.r(t);var i=e(466),r=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=r.a},466:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){n.setClipboardData({data:this.href}),n.showModal({content:this.copyTips,showCancel:!1})},makePhoneCall:function(t){n.makePhoneCall({phoneNumber:t})}}};t.default=e}).call(this,e(2)["default"])},467:function(n,t,e){"use strict";e.r(t);var i=e(468),r=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=r.a},468:function(n,t,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-link/components/uni-link/uni-link.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-link/components/uni-link/uni-link-create-component',
    {
        'uni_modules/uni-link/components/uni-link/uni-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(462))
        })
    },
    [['uni_modules/uni-link/components/uni-link/uni-link-create-component']]
]);
