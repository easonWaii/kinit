import{u as e,F as o}from"./useForm-ecbcdb43.js";import{u as s}from"./useValidator-e352e7a8.js";import{e as t,M as a,w as r,o as l,l as n,k as p}from"./index-9da7d198.js";const m=t({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(t,{expose:m}){const i=t,{required:u}=s(),c=a([{field:"dict_name",label:"字典名称",colProps:{span:24},component:"Input",formItemProps:{rules:[u()]}},{field:"dict_type",label:"字典类型",colProps:{span:24},component:"Input",formItemProps:{rules:[u()]}},{field:"disabled",label:"是否禁用",colProps:{span:24},component:"RadioGroup",componentProps:{style:{width:"100%"},options:[{label:"启用",value:!1},{label:"禁用",value:!0}]},value:!1,formItemProps:{rules:[u()]}},{field:"remark",label:"备注",colProps:{span:24},component:"Input"}]),{formRegister:d,formMethods:f}=e(),{setValues:b,getFormData:P,getElFormExpose:w}=f;return r((()=>i.currentRow),(e=>{e&&b(e)}),{deep:!0,immediate:!0}),m({submit:async()=>{const e=await w();if(await(null==e?void 0:e.validate())){return await P()}}}),(e,s)=>(l(),n(p(o),{onRegister:p(d),schema:c},null,8,["onRegister","schema"]))}});export{m as _};
