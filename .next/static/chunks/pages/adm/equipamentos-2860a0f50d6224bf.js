(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{9240:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adm/equipamentos",function(){return n(90)}])},2633:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4051),a=n.n(r);function o(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function u(e){o(i,r,a,u,c,"next",e)}function c(e){o(i,r,a,u,c,"throw",e)}u(void 0)}))}}var u=n(9669),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t=e.prototype;return t.criarEquipamento=function(e){return i(a().mark((function t(){var n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={ativo:!0,nome:e.nome},console.log("entrei"),t.next=5,u.post("".concat("http://10.26.0.73:3032/","criarEquipamento/"),n);case 5:return r=t.sent,console.log(r),o=r.data,t.abrupt("return",o);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},t.finalizarEquipamento=function(e){return i(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.id){t.next=6;break}return n={method:"put",url:"".concat("http://10.26.0.73:3032/","updateCampoAtivoEquipamento/")+e.id,headers:{}},t.next=5,u(n);case 5:console.log("finalizado com sucesso");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Erro ao finalizar equipamento ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.obterEquipamentosAtivos=function(){return i(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("".concat("http://10.26.0.73:3032/","listarEquipamentosAtivos"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},t.obterTodosEquipamentos=function(){return i(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("".concat("http://10.26.0.73:3032/","listarTodosEquipamentos"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},e}()},5663:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){e.cor;return(0,r.jsx)("button",{onClick:e.onClick,className:"bg-blue-900\n         text-white px-2 py-2 rounded-md\n         ".concat(e.className," \n        "),children:e.children})}},2197:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){var t;return(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"mb-1 mt-3",children:e.texto}),(0,r.jsx)("input",{type:null!==(t=e.tipo)&&void 0!==t?t:"text",value:e.valor,readOnly:e.somenteLeitura,onChange:function(t){var n;return null===(n=e.valorMudou)||void 0===n?void 0:n.call(e,t.target.value)},className:"\n                border border-purple-500 rounded-lg \n                focus:outline-none bg-gray-200 px-4 py-2\n                ".concat(e.somenteLeitura?"bg-gray":"bg-white","\n            ")})]})}},7376:function(e,t,n){"use strict";n.d(t,{K:function(){return a},z:function(){return o}});var r=n(5893),a=(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})}),o=(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})},8798:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893);function a(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"px-10 py-2 text-xl",children:e.children}),(0,r.jsx)("hr",{className:"border-2 border-gray-600"})]})}var o=n(5675),i=n.n(o),u={src:"/_next/static/media/logotipoSeec.06cb5494.png",height:120,width:145,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/ASOBPigP/ARPzoO+s9jW2iEKCQ7qHiEY3DVmPFT2KgSbAR99OMMCAQs8eCc69wsDH94NCAT15+vaCnDUvywg+PmFARt/QK408d8+GSSTExcUGQDu+AAA9PHZAL7gcQAF/yyLAQAA/wCUXgFwbCfNfKMyBhPC6QT8m+Pn93rhQrCG8FWDAZhsOQAb9+xnhi87hvUB2RIHBQwAFPMX7Wm/pXLfGySiAVO6OAsr2AKc6wXvCcwBFyr2/v35Rv7u4Qz8D/KDb8ZbAanQDQfq3S5Q7+4KKhAL7AH0+gUC//wQ+w8T89FFRseyOytlYFywrzIAAAAASUVORK5CYII="};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e.src};function l(e){return(0,r.jsx)(i(),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},e,{loader:s}))}function d(e){return(0,r.jsxs)("div",{className:"\n            flex flex-col w-10/12\n            bg-gray-200\n            text-gray-800 \n            rounded-md\n        ",children:[(0,r.jsxs)("div",{className:"columns-1",children:[(0,r.jsx)("div",{className:"grid justify-items-center",children:l(u)}),(0,r.jsx)("h1",{className:"px-0 py-0 text-xl text-center",children:"Secretaria de Educa\xe7\xe3o, do Esporte e Lazer do Estado do Rio Grande do Norte"}),(0,r.jsx)("h1",{className:"px-0 py-0 text-xl text-center",children:"Grupo de Processamento de Dados - GPD"}),(0,r.jsx)("h1",{className:"px-0 py-0 text-xl text-center",children:"Suporte"})]}),(0,r.jsx)("hr",{className:"border-2 border-gray-600"}),(0,r.jsx)(a,{children:e.titulo}),(0,r.jsx)("div",{className:"p-2",children:e.children})]})}},90:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r=n(4051),a=n.n(r),o=n(5893),i=n(7294),u=n(2633),c=n(5663);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function d(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,l(e,t,"get"))}function f(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function p(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,l(e,t,"set"),n),n}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=new WeakMap,m=new WeakMap,x=new WeakMap,w=new WeakMap,g=new WeakMap,b=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;s(this,e),f(this,v,{writable:!0,value:void 0}),f(this,m,{writable:!0,value:void 0}),f(this,x,{writable:!0,value:void 0}),f(this,w,{writable:!0,value:void 0}),f(this,g,{writable:!0,value:void 0}),p(this,m,t),p(this,x,n),p(this,w,a),p(this,g,o),p(this,v,r)}var t,n,r;return e.vazio=function(){return new e(null,"",null,null,null)},t=e,(n=[{key:"id",get:function(){return d(this,v)}},{key:"ativo",get:function(){return d(this,m)}},{key:"nome",get:function(){return d(this,x)}},{key:"createAt",get:function(){return d(this,w)}},{key:"updateAt",get:function(){return d(this,g)}}])&&h(t.prototype,n),r&&h(t,r),e}(),j=n(2197);function y(e){var t,n,r,a,u,s,l=null===(t=e.equipamento)||void 0===t?void 0:t.id,d=null===(n=e.equipamento)||void 0===n?void 0:n.ativo,f=null===(r=e.equipamento)||void 0===r?void 0:r.createAt,p=null===(a=e.equipamento)||void 0===a?void 0:a.updateAt,h=(0,i.useState)(null!==(s=null===(u=e.equipamento)||void 0===u?void 0:u.nome)&&void 0!==s?s:""),v=h[0],m=h[1];return(0,o.jsxs)("div",{children:[!!l&&(0,o.jsx)(j.Z,{somenteLeitura:!0,texto:"C\xf3digo",valor:l}),l?(0,o.jsx)(j.Z,{texto:"Nome",valor:v.toUpperCase(),somenteLeitura:!0}):(0,o.jsx)(j.Z,{texto:"Nome",valor:v.toUpperCase(),valorMudou:m}),(0,o.jsxs)("div",{className:"mt-5 flex justify-end",children:[(0,o.jsx)(c.Z,{cor:"blue",className:"mr-2",onClick:function(){var t;return null===(t=e.equipamentoMudou)||void 0===t?void 0:t.call(e,new b(d,v.toUpperCase(),l,f,p))},children:l?"Alterar":"Criar"}),(0,o.jsx)(c.Z,{cor:"blue",onClick:e.cancelado,children:"Cancelar"})]})]})}var A=n(8798),N=n(7376);function k(e){var t=function(t){return(0,o.jsx)("td",{className:"flex justify-center",children:!!e.equipamentoFinalizado&&(0,o.jsx)("button",{children:N.z,onClick:function(){var n;return null===(n=e.equipamentoFinalizado)||void 0===n?void 0:n.call(e,t)},className:"\n                      flex justify-center items-center\n                      text-blue-600 rounded-full p-2 m-1\n                      hover:bg-purple-50\n                  "})})},n=e.equipamentoSelecionado||e.equipamentoFinalizado;return(0,o.jsxs)("table",{className:"w-full",children:[(0,o.jsx)("thead",{className:"\n                text-gray-200\n                bg-gradient-to-r from-gray-500 to-gray-600\n            \n            ",children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{className:"text-left p-3",children:"C\xf3digo"}),(0,o.jsx)("th",{className:"text-left p-3",children:"Nome"}),!!n&&(0,o.jsx)("th",{className:"p-4",children:"Inativar"})]})}),(0,o.jsx)("tbody",{children:function(){var r;return null===(r=e.equipamentos)||void 0===r?void 0:r.map((function(e,r){return(0,o.jsxs)("tr",{className:"".concat(r%2===0?"bg-gray-300":"bg-gray-400"),children:[(0,o.jsx)("td",{className:"text-left p-2",children:e.id}),(0,o.jsx)("td",{className:"text-left p-2",children:e.nome}),!!n&&t(e)]},e.id)}))}()})]})}function C(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){C(o,r,a,i,u,"next",e)}function u(e){C(o,r,a,i,u,"throw",e)}i(void 0)}))}}function q(){var e=function(){t.obterEquipamentosAtivos().then((function(e){f(e),v("tabela")}))},t=new u.Z,n=(0,i.useState)(b.vazio()),r=n[0],s=n[1],l=(0,i.useState)([]),d=l[0],f=l[1],p=(0,i.useState)("tabela"),h=p[0],v=p[1];function m(){return(m=E(a().mark((function n(r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.finalizarEquipamento(r);case 2:e();case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(){return(x=E(a().mark((function n(r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.criarEquipamento(r);case 2:e();case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,i.useEffect)(e,[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"\n    flex justify-center items-center min-h-screen  max-h-full\n    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50\n    ",children:(0,o.jsx)(A.Z,{titulo:"Equipamentos Ativos",children:"tabela"===h?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"mt-1 flex justify-end",children:[(0,o.jsx)(c.Z,{cor:"blue",className:"mb-3 m-2",onClick:function(){s(b.vazio()),v("form")},children:"Novo equipamento"}),(0,o.jsx)(c.Z,{cor:"blue",className:"mb-3 m-2",children:(0,o.jsx)("a",{href:"/suport",children:"Suport"})})]}),(0,o.jsx)(k,{equipamentos:d,equipamentoFinalizado:function(e){return m.apply(this,arguments)}})]}):(0,o.jsx)(y,{equipamento:r,equipamentoMudou:function(e){return x.apply(this,arguments)},cancelado:function(){return v("tabela")}})})})})}}},function(e){e.O(0,[713,774,888,179],(function(){return t=9240,e(e.s=t);var t}));var t=e.O();_N_E=t}]);