import{h as d,j as m,k as p,m as s,av as i,am as r,an as c,q as l,_ as u}from"./nav-aea31172.js";const v=["innerHTML"],k=["textContent"],f=["textContent"],y=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(t){const n=t;return m(p),(o,e)=>t.noteHtml?(l(),s("div",{key:0,class:i(["prose overflow-auto outline-none",n.class]),onClick:e[0]||(e[0]=a=>o.$emit("click")),innerHTML:t.noteHtml},null,10,v)):t.note?(l(),s("div",{key:1,class:i(["prose overflow-auto outline-none",n.class]),onClick:e[1]||(e[1]=a=>o.$emit("click"))},[r("p",{textContent:c(t.note)},null,8,k)],2)):(l(),s("div",{key:2,class:i(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:e[2]||(e[2]=a=>o.$emit("click"))},[r("p",{textContent:c(n.placeholder||"No notes.")},null,8,f)],2))}}),g=u(y,[["__file","/home/imsingh/Develop/inder/inheritance-js-slides/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
