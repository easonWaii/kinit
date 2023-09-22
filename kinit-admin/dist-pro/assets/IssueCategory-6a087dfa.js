import{e,f as a,h as t,i as l,j as s}from"./issue-bdbecac5.js";import{u as o,_ as i}from"./Table.vue_vue_type_script_lang-5256bd69.js";import{e as r,G as n,r as p,M as u,x as m,a3 as d,N as c,o as _,j as v,m as f,k as j,ao as g,z as y}from"./index-9da7d198.js";import{E as b}from"./el-button-8f21380c.js";import{E as w}from"./el-switch-7720805d.js";import{a as h,E as x}from"./el-col-d9273186.js";import{_ as k}from"./Search.vue_vue_type_script_setup_true_lang-a57e37eb.js";import{_ as z}from"./ContentWrap.vue_vue_type_script_setup_true_lang-9c7e578a.js";import{_ as S}from"./Write.vue_vue_type_script_setup_true_lang-82949716.js";import{_ as C}from"./Dialog.vue_vue_type_style_index_0_lang-fcbfdb5d.js";import{u as R}from"./dict-b6f9162a.js";import{s as P}from"./dict-ab5a6743.js";import"./el-message-box-24354127.js";import"./el-input-26eda071.js";import"./event-5568c9d8.js";import"./use-form-item-8b7f5d34.js";import"./use-form-common-props-9d083c67.js";import"./index-cde97138.js";import"./isNil-1f22f7b0.js";import"./el-overlay-037540a2.js";import"./el-checkbox-group-b617b779.js";import"./vnode-ae242abb.js";import"./useForm-ecbcdb43.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-2fae9050.js";import"./el-tag-aef2ce12.js";import"./index-13d6a136.js";import"./el-date-picker-f32b0b71.js";import"./debounce-778af7ed.js";import"./el-divider-fc00d058.js";import"./el-progress-69812d34.js";import"./style.css_vue_type_style_index_0_src_true_lang-0e7f3b44.js";import"./index-14d9f390.js";import"./strings-e2e316bd.js";import"./index-4dbb39b8.js";import"./el-table-column-102f47a6.js";import"./el-image-viewer-83790b35.js";import"./el-dropdown-item-c082162c.js";import"./refs-4f0941bf.js";/* empty css                   */import"./_Uint8Array-bbcc3a61.js";import"./useIcon-6417bbff.js";import"./el-card-5fa288fa.js";import"./useValidator-e352e7a8.js";import"./dict-b26f862b.js";const D=r({name:"HelpIssueCategory",__name:"IssueCategory",setup(r){const{t:D}=n(),{tableRegister:A,tableState:U,tableMethods:I}=o({fetchDataApi:async()=>{const{pageSize:e,currentPage:t}=U,l=await a({page:j(t),limit:j(e),...j(F)});return{list:l.data||[],total:l.count||0}},fetchDelApi:async e=>200===(await t(e)).code}),{dataList:L,loading:V,total:E,pageSize:N,currentPage:H}=U,{getList:M,delList:O}=I,W=p([]);(async()=>{const e=R(),a=await e.getDictObj(["sys_vadmin_platform"]);W.value=a.sys_vadmin_platform})();const q=u([{field:"id",label:"编号",show:!0,disabled:!0},{field:"name",label:"类别名称",show:!0,disabled:!0},{field:"platform",label:"展示平台",show:!0,slots:{default:e=>{const a=e.row;return m(d,null,[m("div",null,[P(W.value,a.platform)])])}}},{field:"is_active",label:"是否可见",show:!0,slots:{default:e=>{const a=e.row;return m(d,null,[m(w,{value:a.is_active,disabled:!0},null)])}}},{field:"create_datetime",label:"创建时间",show:!0,sortable:!0},{field:"create_user.name",label:"创建人",show:!0},{field:"action",width:"120px",label:"操作",show:!0,slots:{default:e=>{const a=e.row;return m(d,null,[m(b,{type:"primary",link:!0,size:"small",onClick:()=>ee(a)},{default:()=>[c("编辑")]}),m(b,{type:"danger",loading:K.value,link:!0,size:"small",onClick:()=>Q(a)},{default:()=>[c("删除")]})])}}}]),B=u([{field:"name",label:"类别名称",component:"Input",componentProps:{clearable:!0,style:{width:"214px"}}},{field:"platform",label:"登录平台",component:"Select",componentProps:{style:{width:"214px"},options:[]}},{field:"is_active",label:"是否可见",component:"Select",componentProps:{style:{width:"214px"},options:[{label:"可见",value:!0},{label:"不可见",value:!1}]}}]),F=p({}),G=e=>{H.value=1,F.value=e,M()},K=p(!1),Q=async e=>{K.value=!0,await O(!0,[e.id]).finally((()=>{K.value=!1}))},T=p(!1),$=p(""),J=p(),X=p(""),Y=p(),Z=p(!1),ee=async a=>{const t=await e(a.id);t&&($.value="编辑常见问题类别",X.value="edit",J.value=t.data,T.value=!0)},ae=()=>{$.value="新增常见问题类别",X.value="add",J.value=void 0,T.value=!0},te=async()=>{const e=j(Y),a=await(null==e?void 0:e.submit());if(a){Z.value=!0;try{const e=p({});"add"===X.value?(e.value=await l(a),e.value&&(T.value=!1,M())):"edit"===X.value&&(e.value=await s(a),e.value&&(T.value=!1,M()))}finally{Z.value=!1}}};return(e,a)=>(_(),v(d,null,[m(j(z),null,{default:f((()=>[m(j(k),{schema:B,onReset:G,onSearch:G},null,8,["schema"]),m(j(i),{"current-page":j(H),"onUpdate:currentPage":a[0]||(a[0]=e=>g(H)?H.value=e:null),"page-size":j(N),"onUpdate:pageSize":a[1]||(a[1]=e=>g(N)?N.value=e:null),showAction:"",columns:q,"default-expand-all":"","node-key":"id",data:j(L),loading:j(V),pagination:{total:j(E)},onRegister:j(A),onRefresh:j(M)},{toolbar:f((()=>[m(j(h),{gutter:10},{default:f((()=>[m(j(x),{span:1.5},{default:f((()=>[m(j(b),{type:"primary",onClick:ae},{default:f((()=>[c("新增常见问题类别")])),_:1})])),_:1})])),_:1})])),_:1},8,["current-page","page-size","columns","data","loading","pagination","onRegister","onRefresh"])])),_:1}),m(j(C),{modelValue:T.value,"onUpdate:modelValue":a[3]||(a[3]=e=>T.value=e),title:$.value,height:650},{footer:f((()=>[m(j(b),{type:"primary",loading:Z.value,onClick:te},{default:f((()=>[c(y(j(D)("exampleDemo.save")),1)])),_:1},8,["loading"]),m(j(b),{onClick:a[2]||(a[2]=e=>T.value=!1)},{default:f((()=>[c(y(j(D)("dialogDemo.close")),1)])),_:1})])),default:f((()=>[m(S,{ref_key:"writeRef",ref:Y,"current-row":J.value},null,8,["current-row"])])),_:1},8,["modelValue","title"])],64))}});export{D as default};
