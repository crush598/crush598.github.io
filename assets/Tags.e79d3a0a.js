import{C as B}from"./Common.178b6647.js";import{P as $}from"./PageHeader.c8edbe4a.js";import{_ as T,f as y,u as k,H as w,Z as A,a1 as C,U as x,i as f,o as r,c,D as v,x as D,h as i,q as N,e as R,t as p,F as m,r as V,a as d,b as h,w as L,s as S,B as b,g as z}from"./app.a44b6e94.js";import{r as F}from"./resolveTime.960c5d27.js";const H=l=>{const s={},t=[];for(const e of l){if(!e.info.date)continue;const o=F(e.info.date,"year");s[o]?s[o].push(e):s[o]=[e]}for(const e in s)t.unshift({year:e,data:s[e]});return t},M=(l,s)=>s===""?l:l.filter(t=>t.info.tags?t.info.tags.includes(s):!1),Y=["onClick"],q={key:0},E={key:1},U=y({__name:"TagList",props:{currentTag:{type:String,default:""}},setup(l){const s=k(),t=w(),e=A(),{tagsWithColor:o}=C(),{posts:g}=x(),u=f(()=>[{name:s.value.showAllTagsText,path:e.value.path,tagColor:null,pages:[]},...o.value]);return(_,n)=>(r(!0),c(m,null,v(i(u),(a,P)=>(r(),c("span",{key:P,class:D(["article-tag",[a.name===l.currentTag&&"active",a.path===i(e).path&&"tag-all"]]),style:N([a.tagColor?{backgroundColor:a.tagColor}:{}]),onClick:I=>i(t).push(a.path)},[R(p(a.name)+" ",1),a.path==i(e).path?(r(),c("sup",q,p(i(g).length),1)):(r(),c("sup",E,p(a.pages.length),1))],14,Y))),128))}});var W=T(U,[["__file","TagList.vue"]]);const Z={class:"year"},j={class:"title"},G={key:0,class:"subtitle"},J=d("hr",null,null,-1),K=y({__name:"TagPostList",props:{data:{type:Array,default:()=>[]}},setup(l){return(s,t)=>{const e=V("RouterLink");return r(!0),c(m,null,v(l.data,(o,g)=>(r(),c("section",{key:g},[d("span",Z,p(o.year),1),(r(!0),c(m,null,v(o.data,(u,_)=>(r(),c("div",{key:_,class:"item"},[h(e,{to:u.path},{default:L(()=>[d("p",j,p(u.info.title),1),u.info.subtitle?(r(),c("p",G,p(u.info.subtitle),1)):S("",!0)]),_:2},1032,["to"]),J]))),128))]))),128)}}});var O=T(K,[["__file","TagPostList.vue"]]);const Q={class:"tags-wrapper"},X=y({__name:"Tags",setup(l){const s=b(),t=k(),{posts:e}=x(),{tags:o}=C(),g=f(()=>{const n=o.value.find(a=>a.path===s.path);return n?n.name:t.value.showAllTagsText}),u=f(()=>{const n=g.value===t.value.showAllTagsText?"":g.value;return H(M(e.value,n))}),_=f(()=>{var a;const n=t.value.pages&&t.value.pages.tags?t.value.pages.tags:{};return n.title===void 0&&(n.title=(a=t.value.pageText)==null?void 0:a.tags),n});return(n,a)=>(r(),z(B,null,{page:L(()=>[h($,{"page-info":i(_)},null,8,["page-info"]),d("div",Q,[h(W,{"current-tag":i(g)},null,8,["current-tag"]),h(O,{data:i(u)},null,8,["data"])])]),_:1}))}});var ot=T(X,[["__file","Tags.vue"]]);export{ot as default};
