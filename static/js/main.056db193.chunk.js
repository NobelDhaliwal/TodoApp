(this.webpackJsonpmytodo=this.webpackJsonpmytodo||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(5),r=n.n(l),o=n(6),u=n(3),i=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"todo_style"},c.a.createElement("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),c.a.createElement("li",null,e.text)))},m=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)([]),m=Object(u.a)(r,2),s=m[0],d=m[1],E=function(e){console.log("DELETED"),d((function(t){return t.filter((function(t,n){return n!==e}))}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main_div"},c.a.createElement("div",{className:"center_div"},c.a.createElement("br",null),c.a.createElement("h1",null,"Todo List"),c.a.createElement("br",null),c.a.createElement("input",{type:"text",placeholder:"Add a Item",onChange:function(e){l(e.target.value)},value:n}),c.a.createElement("button",{onClick:function(){d((function(e){return[].concat(Object(o.a)(e),[n])})),l("")}},"+"),c.a.createElement("ol",null,s.map((function(e,t){return c.a.createElement(i,{text:e,key:t,id:t,onSelect:E})}))))))};n(12);r.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.056db193.chunk.js.map