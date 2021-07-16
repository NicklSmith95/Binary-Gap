(this["webpackJsonpbinary-gap"]=this["webpackJsonpbinary-gap"]||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,h,b,s=t(1),d=t(9),l=t.n(d),p=t(4),x=function(n){for(var e=n.number.toString(2),t=0,i=0,r=0;r<e.length;r++)"0"===e[r]&&t++,"1"===e[r]&&(t>i&&(i=t),t=0);return n.onInput(e,i),null},j=t(2),u=t(3),g=u.a.div(i||(i=Object(j.a)(["\n  display: block;\n  background: whitesmoke;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n  border-radius: 10px;\n  padding: 10px;\n  margin: auto;\n  width: 500px;\n  height: 125px;\n"]))),O=u.a.form(r||(r=Object(j.a)(["\n  input {\n    display: block;\n    width: 80%;\n    border-style: solid;\n    border-width: 2px;\n    border-radius: 10px;\n    border-color: #00bdec;\n    text-align: center;\n    height: 20px;\n    padding: 5px;\n    background-color: white;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    font-size: 15px;\n    outline: none;\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  div {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  button {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    padding: 10px;\n    border-width: 0px;\n    border-radius: 10px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n    background-color: white;\n    font-size: 15px;\n  }\n  button:hover {\n    background-color: #00bdec;\n    color: white;\n  }\n"]))),f=u.a.div(a||(a=Object(j.a)(["\n  h3 {\n    color: white;\n    text-align: center;\n    font-size: 30px;\n  }\n\n  h4 {\n    color: white;\n    text-align: center;\n    font-size: 25px;\n  }\n"]))),m=u.a.body(o||(o=Object(j.a)(['\n  height: 100vh;\n  min-height: 100vh;\n  background-color: #00bdec;\n  margin: 0;\n  font-family: "Roboto Condensed", sans-serif;\n\n  h1 {\n    color: white;\n    font-size: 50px;\n    text-align: center;\n    margin: 0;\n    padding: 30px;\n  }\n']))),w=u.a.div(c||(c=Object(j.a)(["\nbox-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\nborder-radius: 6px;\nbackground-color: white;\npadding: 1rem;\ntext-align: center;\nwidth: 30rem;\nz-index: 10;\nposition: fixed;\ntop: 20vh;\nleft: calc(50% - 15rem);\n"]))),v=u.a.footer(h||(h=Object(j.a)(["\ntext-align: center;\n  svg {\n    padding-left: 15px;\n    padding-right: 15px;\n    margin-top: 44vh;\n    fill: white;\n  }\n\n  svg:hover {\n    fill: grey;\n  }\n"]))),k=u.a.div(b||(b=Object(j.a)(["\n  position: fixed;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.75);\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n"]))),y=t(0),z=function(){return Object(y.jsxs)(w,{children:[Object(y.jsx)("h3",{children:"The Binary Gap Problem"}),Object(y.jsx)("p",{children:"This is a React project based on finding the binary gap of a number"}),Object(y.jsx)("p",{children:" The idea of this is to take input and convert it into a binary sequence. the program then will count the number of concurrent 0's that are located in between 1's."}),Object(y.jsx)("p",{children:"EX: 10010 has a Binary gap of 2"})]})},B=function(n){return Object(y.jsx)(k,{onClick:n.onClick})},C=function(){var n=Object(s.useState)(""),e=Object(p.a)(n,2),t=e[0],i=e[1],r=Object(s.useState)(0),a=Object(p.a)(r,2),o=a[0],c=a[1],h=Object(s.useState)(0),b=Object(p.a)(h,2),d=b[0],l=b[1],j=Object(s.useState)(!1),u=Object(p.a)(j,2),m=u[0],w=u[1];return console.log(o),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{children:"Binary Gap"}),m&&Object(y.jsx)(z,{}),m&&Object(y.jsx)(B,{onClick:function(){w(!1)}}),Object(y.jsx)(g,{children:Object(y.jsxs)(O,{children:[Object(y.jsxs)("div",{className:"input__label",children:["Input Your Number",Object(y.jsx)("input",{className:"input",type:"number",onChange:function(n){i(+n.target.value)},value:t||""})]}),Object(y.jsx)("button",{className:"submit__button",onClick:function(n){n.preventDefault(),i(Math.floor(1e3*Math.random()))},children:"Random"})]})}),Object(y.jsx)(x,{number:t,onInput:function(n,e){c(n),l(e)}}),Object(y.jsxs)(f,{children:[Object(y.jsx)("h3",{children:"Your Binary Conversion Is"}),Object(y.jsx)("h4",{children:o}),Object(y.jsx)("h3",{children:"Which Has a Binary Gap of"}),Object(y.jsx)("h4",{children:d})]}),Object(y.jsxs)(v,{children:[Object(y.jsx)("a",{href:"https://github.com/NicklSmith95/Binary-Gap",target:"_blank",children:Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"25",height:"25",children:Object(y.jsx)("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})}),Object(y.jsx)("svg",{onClick:function(){w(!0)},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"25",height:"25",children:Object(y.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"})})]})]})};var M=function(){return Object(y.jsx)(m,{children:Object(y.jsx)(C,{})})};l.a.render(Object(y.jsx)(M,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.225b66ea.chunk.js.map