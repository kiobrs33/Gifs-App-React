(this.webpackJsonpGiftsApp=this.webpackJsonpGiftsApp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),o=a(8),l=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(o.a)(e))})),l(""))}},r.a.createElement("h4",{style:s}," ",i," "),r.a.createElement("input",{value:i,onChange:function(e){l(e.target.value)},type:"text",placeholder:"Search Name"}))},s={color:"#3498DB"},m=a(4),f=a.n(m),p=a(7),d=function(){var e=Object(p.a)(f.a.mark((function e(t){var a,n,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=ClxqkR7tvIhb1CbNDv8sIRShv0FmHduz&limit=10&q=".concat(encodeURI(t)),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__zoomIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null," ",t," "))},h=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),3e3)}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:v}," ",t," "),i&&r.a.createElement("h3",{className:"animate__animated animate__flash animate__slower\t3s",style:E},"Cargando...."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))))},v={color:"#FF5733"},E={color:"grey"},b={textAlign:"center",color:"grey",fontFamily:"arial"},y=function(){var e=Object(n.useState)(["One Punch"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:b},"GifExpertApp"),r.a.createElement(l,{setCategories:c}),a.map((function(e){return r.a.createElement(h,{key:e,category:e})})))},_=(a(15),document.querySelector("#root"));i.a.render(r.a.createElement(y,null),_)},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.82bde6a1.chunk.js.map