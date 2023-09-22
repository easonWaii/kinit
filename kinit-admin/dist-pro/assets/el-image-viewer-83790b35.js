import{cl as e,b as a,d as s,aF as n,i as t,e as l,bJ as o,du as i,dv as c,aC as u,u as r,cb as d,r as f,dw as v,ah as m,f as p,w as b,ap as g,a9 as k,o as w,l as x,x as I,m as _,y as z,s as C,k as h,n as y,bm as O,O as N,E as T,aQ as A,j as R,a3 as E,aO as L,aP as X,dx as Y,cH as F,p as $,dy as j,dz as B,a4 as P,a8 as D,an as M,q as S,C as W,cc as H,_ as V,bP as q,aR as G,dA as J,t as Q}from"./index-9da7d198.js";import{d as Z}from"./debounce-778af7ed.js";function K(a,s,n){var t=!0,l=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return e(n)&&(t="leading"in n?!!n.leading:t,l="trailing"in n?!!n.trailing:l),Z(a,s,{leading:t,maxWait:s,trailing:l})}const U=a({urlList:{type:s(Array),default:()=>n([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),ee={close:()=>!0,switch:e=>t(e),rotate:e=>t(e)},ae=["src"],se=l({name:"ElImageViewer"});const ne=Q(V(l({...se,props:U,emits:ee,setup(e,{expose:a,emit:s}){const n=e,l={CONTAIN:{name:"contain",icon:o(i)},ORIGINAL:{name:"original",icon:o(c)}},{t:V}=u(),Q=r("image-viewer"),{nextZIndex:Z}=d(),U=f(),ee=f([]),se=v(),ne=f(!0),te=f(n.initialIndex),le=m(l.CONTAIN),oe=f({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),ie=p((()=>{const{urlList:e}=n;return e.length<=1})),ce=p((()=>0===te.value)),ue=p((()=>te.value===n.urlList.length-1)),re=p((()=>n.urlList[te.value])),de=p((()=>[Q.e("btn"),Q.e("prev"),Q.is("disabled",!n.infinite&&ce.value)])),fe=p((()=>[Q.e("btn"),Q.e("next"),Q.is("disabled",!n.infinite&&ue.value)])),ve=p((()=>{const{scale:e,deg:a,offsetX:s,offsetY:n,enableTransition:t}=oe.value;let o=s/e,i=n/e;switch(a%360){case 90:case-270:[o,i]=[i,-o];break;case 180:case-180:[o,i]=[-o,-i];break;case 270:case-90:[o,i]=[-i,o]}const c={transform:`scale(${e}) rotate(${a}deg) translate(${o}px, ${i}px)`,transition:t?"transform .3s":""};return le.value.name===l.CONTAIN.name&&(c.maxWidth=c.maxHeight="100%"),c})),me=p((()=>t(n.zIndex)?n.zIndex:Z()));function pe(){se.stop(),s("close")}function be(){ne.value=!1}function ge(e){ne.value=!1,e.target.alt=V("el.image.error")}function ke(e){if(ne.value||0!==e.button||!U.value)return;oe.value.enableTransition=!1;const{offsetX:a,offsetY:s}=oe.value,n=e.pageX,t=e.pageY,l=K((e=>{oe.value={...oe.value,offsetX:a+e.pageX-n,offsetY:s+e.pageY-t}})),o=q(document,"mousemove",l);q(document,"mouseup",(()=>{o()})),e.preventDefault()}function we(){oe.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function xe(){if(ne.value)return;const e=J(l),a=Object.values(l),s=le.value.name,n=(a.findIndex((e=>e.name===s))+1)%e.length;le.value=l[e[n]],we()}function Ie(e){const a=n.urlList.length;te.value=(e+a)%a}function _e(){ce.value&&!n.infinite||Ie(te.value-1)}function ze(){ue.value&&!n.infinite||Ie(te.value+1)}function Ce(e,a={}){if(ne.value)return;const{zoomRate:t,rotateDeg:l,enableTransition:o}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":oe.value.scale>.2&&(oe.value.scale=Number.parseFloat((oe.value.scale/t).toFixed(3)));break;case"zoomIn":oe.value.scale<7&&(oe.value.scale=Number.parseFloat((oe.value.scale*t).toFixed(3)));break;case"clockwise":oe.value.deg+=l,s("rotate",oe.value.deg);break;case"anticlockwise":oe.value.deg-=l,s("rotate",oe.value.deg)}oe.value.enableTransition=o}return b(re,(()=>{g((()=>{const e=ee.value[0];(null==e?void 0:e.complete)||(ne.value=!0)}))})),b(te,(e=>{we(),s("switch",e)})),k((()=>{var e,a;!function(){const e=K((e=>{switch(e.code){case G.esc:n.closeOnPressEscape&&pe();break;case G.space:xe();break;case G.left:_e();break;case G.up:Ce("zoomIn");break;case G.right:ze();break;case G.down:Ce("zoomOut")}})),a=K((e=>{Ce((e.deltaY||e.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})}));se.run((()=>{q(document,"keydown",e),q(document,"wheel",a)}))}(),null==(a=null==(e=U.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:Ie}),(e,a)=>(w(),x(H,{to:"body",disabled:!e.teleported},[I(W,{name:"viewer-fade",appear:""},{default:_((()=>[z("div",{ref_key:"wrapper",ref:U,tabindex:-1,class:C(h(Q).e("wrapper")),style:y({zIndex:h(me)})},[z("div",{class:C(h(Q).e("mask")),onClick:a[0]||(a[0]=O((a=>e.hideOnClickModal&&pe()),["self"]))},null,2),N(" CLOSE "),z("span",{class:C([h(Q).e("btn"),h(Q).e("close")]),onClick:pe},[I(h(T),null,{default:_((()=>[I(h(A))])),_:1})],2),N(" ARROW "),h(ie)?N("v-if",!0):(w(),R(E,{key:0},[z("span",{class:C(h(de)),onClick:_e},[I(h(T),null,{default:_((()=>[I(h(L))])),_:1})],2),z("span",{class:C(h(fe)),onClick:ze},[I(h(T),null,{default:_((()=>[I(h(X))])),_:1})],2)],64)),N(" ACTIONS "),z("div",{class:C([h(Q).e("btn"),h(Q).e("actions")])},[z("div",{class:C(h(Q).e("actions__inner"))},[I(h(T),{onClick:a[1]||(a[1]=e=>Ce("zoomOut"))},{default:_((()=>[I(h(Y))])),_:1}),I(h(T),{onClick:a[2]||(a[2]=e=>Ce("zoomIn"))},{default:_((()=>[I(h(F))])),_:1}),z("i",{class:C(h(Q).e("actions__divider"))},null,2),I(h(T),{onClick:xe},{default:_((()=>[(w(),x($(h(le).icon)))])),_:1}),z("i",{class:C(h(Q).e("actions__divider"))},null,2),I(h(T),{onClick:a[3]||(a[3]=e=>Ce("anticlockwise"))},{default:_((()=>[I(h(j))])),_:1}),I(h(T),{onClick:a[4]||(a[4]=e=>Ce("clockwise"))},{default:_((()=>[I(h(B))])),_:1})],2)],2),N(" CANVAS "),z("div",{class:C(h(Q).e("canvas"))},[(w(!0),R(E,null,P(e.urlList,((e,a)=>D((w(),R("img",{ref_for:!0,ref:e=>ee.value[a]=e,key:e,src:e,style:y(h(ve)),class:C(h(Q).e("img")),onLoad:be,onError:ge,onMousedown:ke},null,46,ae)),[[M,a===te.value]]))),128))],2),S(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]));export{ne as E};
