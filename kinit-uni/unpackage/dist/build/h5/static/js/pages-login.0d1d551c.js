(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login"],{"3f52":function(t,n,e){"use strict";var i=e("ba77"),o=e.n(i);o.a},4516:function(t,n,e){"use strict";e.r(n);var i=e("ef1d"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},5163:function(t,n,e){"use strict";e.r(n);var i=e("e4a2"),o=e("4516");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("3f52");var r,c=e("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"680cd866",null,!1,i["a"],r);n["default"]=l.exports},"90ba":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/* uView的全局SCSS主题文件 */\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-680cd866]{background-color:#fff}.normal-login-container[data-v-680cd866]{width:100%}.normal-login-container .logo-content[data-v-680cd866]{width:100%;font-size:21px;text-align:center;padding-top:15%}.normal-login-container .logo-content uni-image[data-v-680cd866]{border-radius:4px}.normal-login-container .logo-content .title[data-v-680cd866]{margin-left:10px}.normal-login-container .login-form-content[data-v-680cd866]{text-align:center;margin:20px auto;margin-top:15%;width:80%}.normal-login-container .login-form-content .input-item[data-v-680cd866]{margin:20px auto;background-color:#f5f6f7;height:45px;border-radius:20px}.normal-login-container .login-form-content .input-item .icon[data-v-680cd866]{font-size:%?38?%;margin-left:10px;color:#999}.normal-login-container .login-form-content .input-item .input[data-v-680cd866]{width:100%;font-size:14px;line-height:20px;text-align:left;padding-left:15px}.normal-login-container .login-form-content .login-btn[data-v-680cd866]{margin-top:40px;height:45px}.normal-login-container .login-form-content .xieyi[data-v-680cd866]{color:#333;margin-top:20px}.normal-login-container .easyinput[data-v-680cd866]{width:100%}.login-code-img[data-v-680cd866]{height:45px}body.?%PAGE?%[data-v-680cd866]{background-color:#fff}',""]),t.exports=n},ba77:function(t,n,e){var i=e("90ba");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("b7b789f8",i,!0,{sourceMap:!1,shadowMode:!1})},e4a2:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"normal-login-container"},[e("v-uni-view",{staticClass:"logo-content align-center justify-center flex"},[t.logo?e("v-uni-image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:t.logoImage,mode:"widthFix"}}):t._e(),e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))])],1),e("v-uni-view",{staticClass:"login-form-content"},[e("v-uni-view",{staticClass:"input-item flex align-center"},[e("v-uni-view",{staticClass:"iconfont icon-user icon"}),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入手机号",maxlength:"30"},model:{value:t.loginForm.telephone,callback:function(n){t.$set(t.loginForm,"telephone",n)},expression:"loginForm.telephone"}})],1),e("v-uni-view",{staticClass:"input-item flex align-center"},[e("v-uni-view",{staticClass:"iconfont icon-password icon"}),e("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",maxlength:"20"},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}})],1),e("v-uni-view",{staticClass:"action-btn"},[e("v-uni-button",{staticClass:"login-btn cu-btn block bg-blue lg round",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleLogin.apply(void 0,arguments)}}},[t._v("登录")])],1)],1),e("v-uni-view",{staticClass:"xieyi text-center"},[e("v-uni-text",{staticClass:"text-grey1"},[t._v("登录即代表同意")]),e("v-uni-text",{staticClass:"text-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleUserAgrement.apply(void 0,arguments)}}},[t._v("《用户协议》")]),e("v-uni-text",{staticClass:"text-blue",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handlePrivacy.apply(void 0,arguments)}}},[t._v("《隐私协议》")])],1)],1)},a=[]},ef1d:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var o=i(e("1da1")),a={data:function(){return{loginForm:{telephone:"15020221010",password:"kinit2022",method:"0"}}},computed:{title:function(){return this.$store.state.app.title},logo:function(){return this.$store.state.app.logo},logoImage:function(){return this.$store.state.app.logoImage},privacy:function(){return this.$store.state.app.privacy},agreement:function(){return this.$store.state.app.agreement}},methods:{handlePrivacy:function(){var t="隐私政策";this.$tab.navigateTo("/pages/common/webview/index?title=".concat(t,"&url=").concat(this.privacy))},handleUserAgrement:function(){var t="用户协议";this.$tab.navigateTo("/pages/common/webview/index?title=".concat(t,"&url=").concat(this.agreement))},handleLogin:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:""===t.loginForm.telephone?t.$modal.msgError("请输入您的手机号"):""===t.loginForm.password?t.$modal.msgError("请输入您的密码"):(t.$modal.loading("登录中，请耐心等待..."),t.pwdLogin());case 1:case"end":return n.stop()}}),n)})))()},pwdLogin:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$store.dispatch("Login",t.loginForm).then((function(){t.$modal.closeLoading(),t.loginSuccess()}));case 1:case"end":return n.stop()}}),n)})))()},loginSuccess:function(t){var n=this;this.$store.dispatch("GetInfo").then((function(t){n.$tab.reLaunch("/pages/index")}))}}};n.default=a}}]);