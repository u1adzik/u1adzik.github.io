import{_ as n,B as p,N as d,F as _}from"./Footer-DiI-lO8G.js";import{i as f,b as a,c as s,d as t,t as g,e as c,F as u,j as x}from"./index-Ct5i1Tw7.js";const j={props:{ProjectImage:String,ProjectTitle:String,ProjectLink:String},components:{Button:p}},h={class:"project-card"},P=["src"],k={class:"project-title"},v=["href"];function B(r,i,o,m,e,b){const l=f("Button");return a(),s("div",h,[t("img",{src:o.ProjectImage,alt:"",class:"project-image"},null,8,P),t("p",k,g(o.ProjectTitle),1),t("a",{class:"project-button",href:o.ProjectLink},[c(l,{"button-text":"Live demo","button-color":"red"})],8,v)])}const y=n(j,[["render",B],["__scopeId","data-v-84c9e67e"]]),I={class:"wrapper"},L={__name:"ProjectsView",setup(r){const i=[{id:1,image:"https://dummyimage.com/960x540/fff/000.png?text=example",title:"Project 1",link:"https://example.com"},{id:2,image:"https://dummyimage.com/960x540/fff/000.png?text=example",title:"Project 2",link:"https://example.com"},{id:3,image:"https://dummyimage.com/960x540/fff/000.png?text=example",title:"Project 3",link:"https://example.com"},{id:4,image:"https://dummyimage.com/960x540/fff/000.png?text=example",title:"Project 4",link:"https://example.com"},{id:5,image:"https://dummyimage.com/960x540/fff/000.png?text=example",title:"Project 5",link:"https://example.com"}];return(o,m)=>(a(),s("div",I,[t("header",null,[c(d)]),t("main",null,[(a(),s(u,null,x(i,e=>t("div",{key:e.id},[c(y,{ProjectImage:e.image,ProjectTitle:e.title,ProjectLink:e.link},null,8,["ProjectImage","ProjectTitle","ProjectLink"])])),64))]),t("footer",null,[c(_)])]))}},S=n(L,[["__scopeId","data-v-d6cf7c0f"]]);export{S as default};
