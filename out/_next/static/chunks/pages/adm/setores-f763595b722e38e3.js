(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[213],{6244:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adm/setores",function(){return n(7298)}])},4680:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4051),o=n.n(r);function a(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,c,"next",e)}function c(e){a(i,r,o,s,c,"throw",e)}s(void 0)}))}}var s=n(9669),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t=e.prototype;return t.atualizarTelefone=function(e){throw new Error("Method not implemented.")},t.criarSetor=function(e){return i(o().mark((function t(){var n,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={ativo:!0,nome:e.nome,telefone:e.telefone},console.log("entrei"),t.next=5,s.post("".concat("http://10.26.0.73:3032/","criarSetor/"),n);case 5:return r=t.sent,console.log(r),a=r.data,t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},t.finalizarSetor=function(e){return i(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.id){t.next=6;break}return n={method:"put",url:"".concat("http://10.26.0.73:3032/","updateCampoAtivoSetor/")+e.id,headers:{}},t.next=5,s(n);case 5:console.log("finalizado com sucesso");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Erro ao finalizar setor ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.atualizarTelefoneSetor=function(e){return i(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.prev=1,n={method:"put",url:"".concat("http://10.26.0.73:3032/","updateTelefoneSetor/")+e.id,data:{telefone:e.telefone}},t.next=5,s(n);case 5:t.sent,console.log("telefone atualizado com sucesso"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(0),console.log(t.t1);case 17:case"end":return t.stop()}}),t,null,[[0,14],[1,9]])})))()},t.obterSetoresAtivos=function(){return i(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("".concat("http://10.26.0.73:3032/","listarSetoresAtivos"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},t.obterTodosSetores=function(){return i(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("".concat("http://10.26.0.73:3032/","listarTodosSetores"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},e}()},5663:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893);function o(e){e.cor;return(0,r.jsx)("button",{onClick:e.onClick,className:"bg-blue-900\n         text-white px-2 py-2 rounded-md\n         ".concat(e.className," \n        "),children:e.children})}},2197:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893);function o(e){var t;return(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{className:"mb-1 mt-3",children:e.texto}),(0,r.jsx)("input",{type:null!==(t=e.tipo)&&void 0!==t?t:"text",value:e.valor,readOnly:e.somenteLeitura,onChange:function(t){var n;return null===(n=e.valorMudou)||void 0===n?void 0:n.call(e,t.target.value)},className:"\n                border border-purple-500 rounded-lg \n                focus:outline-none bg-gray-200 px-4 py-2\n                ".concat(e.somenteLeitura?"bg-gray":"bg-white","\n            ")})]})}},7376:function(e,t,n){"use strict";n.d(t,{K:function(){return o},z:function(){return a}});var r=n(5893),o=(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})}),a=(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})},8798:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893);function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"px-10 py-2 text-xl",children:e.children}),(0,r.jsx)("hr",{className:"border-2 border-gray-600"})]})}var a=n(5675),i=n.n(a),s={src:"/_next/static/media/logotipoSeec.06cb5494.png",height:120,width:145,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/ASOBPigP/ARPzoO+s9jW2iEKCQ7qHiEY3DVmPFT2KgSbAR99OMMCAQs8eCc69wsDH94NCAT15+vaCnDUvywg+PmFARt/QK408d8+GSSTExcUGQDu+AAA9PHZAL7gcQAF/yyLAQAA/wCUXgFwbCfNfKMyBhPC6QT8m+Pn93rhQrCG8FWDAZhsOQAb9+xnhi87hvUB2RIHBQwAFPMX7Wm/pXLfGySiAVO6OAsr2AKc6wXvCcwBFyr2/v35Rv7u4Qz8D/KDb8ZbAanQDQfq3S5Q7+4KKhAL7AH0+gUC//wQ+w8T89FFRseyOytlYFywrzIAAAAASUVORK5CYII="};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){return e.src};function u(e){return(0,r.jsx)(i(),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},e,{loader:l}))}function d(e){return(0,r.jsxs)("div",{className:"\n            flex flex-col w-10/12\n            bg-gray-200\n            text-gray-800 \n            rounded-md\n        ",children:[(0,r.jsxs)("div",{className:"columns-1",children:[(0,r.jsx)("div",{className:"grid justify-items-center",children:u(s)}),(0,r.jsx)("h1",{className:"px-0 py-0 text-xl text-center",children:"Secretaria de Educa\xe7\xe3o, do Esporte e Lazer do Estado do Rio Grande do Norte"}),(0,r.jsx)("h1",{className:"px-0 py-0 text-xl text-center",children:"Grupo de Processamento de Dados - GPD"}),(0,r.jsx)("h1",{className:"px-0 py-0 text-xl text-center",children:"Suporte"})]}),(0,r.jsx)("hr",{className:"border-2 border-gray-600"}),(0,r.jsx)(o,{children:e.titulo}),(0,r.jsx)("div",{className:"p-2",children:e.children})]})}},7298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(4051),o=n.n(r),a=n(5893),i=n(7294),s=n(4680),c=n(5663);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function d(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,u(e,t,"get"))}function f(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function h(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,u(e,t,"set"),n),n}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=new WeakMap,x=new WeakMap,m=new WeakMap,g=new WeakMap,w=new WeakMap,b=new WeakMap,j=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;l(this,e),f(this,p,{writable:!0,value:void 0}),f(this,x,{writable:!0,value:void 0}),f(this,m,{writable:!0,value:void 0}),f(this,g,{writable:!0,value:void 0}),f(this,w,{writable:!0,value:void 0}),f(this,b,{writable:!0,value:void 0}),h(this,x,t),h(this,m,n),h(this,g,r),h(this,w,a),h(this,b,i),h(this,p,o)}var t,n,r;return e.vazio=function(){return new e(null,"",null,null,null,null)},t=e,(n=[{key:"id",get:function(){return d(this,p)}},{key:"ativo",get:function(){return d(this,x)}},{key:"nome",get:function(){return d(this,m)}},{key:"telefone",get:function(){return d(this,g)}},{key:"createAt",get:function(){return d(this,w)}},{key:"updateAt",get:function(){return d(this,b)}}])&&v(t.prototype,n),r&&v(t,r),e}(),y=n(2197);function A(e){var t,n,r,o,s,l,u,d,f=null===(t=e.setor)||void 0===t?void 0:t.id,h=null===(n=e.setor)||void 0===n?void 0:n.ativo,v=null===(r=e.setor)||void 0===r?void 0:r.createAt,p=null===(o=e.setor)||void 0===o?void 0:o.updateAt,x=(0,i.useState)(null!==(u=null===(s=e.setor)||void 0===s?void 0:s.nome)&&void 0!==u?u:""),m=x[0],g=x[1],w=(0,i.useState)(null!==(d=null===(l=e.setor)||void 0===l?void 0:l.telefone)&&void 0!==d?d:null),b=w[0],A=w[1];return(0,a.jsxs)("div",{children:[!!f&&(0,a.jsx)(y.Z,{somenteLeitura:!0,texto:"C\xf3digo",valor:f}),f?(0,a.jsx)(y.Z,{texto:"Nome",valor:m.toUpperCase(),somenteLeitura:!0}):(0,a.jsx)(y.Z,{texto:"Nome",valor:m.toUpperCase(),valorMudou:g}),(0,a.jsx)(y.Z,{texto:"Telefone",valor:b,valorMudou:A}),(0,a.jsxs)("div",{className:"mt-5 flex justify-end",children:[(0,a.jsx)(c.Z,{cor:"blue",className:"mr-2",onClick:function(){var t;return null===(t=e.setorMudou)||void 0===t?void 0:t.call(e,new j(h,m.toUpperCase(),b,f,v,p))},children:f?"Alterar":"Criar"}),(0,a.jsx)(c.Z,{cor:"blue",onClick:e.cancelado,children:"Cancelar"})]})]})}var N=n(8798),k=n(7376);function S(e){var t=function(t){return(0,a.jsxs)("td",{className:"flex justify-center",children:[!!e.setorSelecionado&&(0,a.jsxs)("button",{onClick:function(){var n;return null===(n=e.setorSelecionado)||void 0===n?void 0:n.call(e,t)},className:"\n                      flex justify-center items-center\n                      text-green-600 rounded-full p-2 m-1\n                      hover:bg-purple-50\n                  ",children:[k.K,(0,a.jsx)(a.Fragment,{children:"Editar"})]}),!!e.setorFinalizado&&(0,a.jsxs)("button",{onClick:function(){var n;return null===(n=e.setorFinalizado)||void 0===n?void 0:n.call(e,t)},className:"\n                      flex justify-center items-center\n                      text-yellow-600 rounded-full p-2 m-1\n                      hover:bg-purple-50\n                  ",children:[k.z,(0,a.jsx)(a.Fragment,{children:"Inativar"})]})]})},n=e.setorSelecionado||e.setorFinalizado;return(0,a.jsxs)("table",{className:"w-full",children:[(0,a.jsx)("thead",{className:"\n                text-gray-200\n                bg-gradient-to-r from-gray-500 to-gray-600\n            \n            ",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"text-left p-3",children:"C\xf3digo"}),(0,a.jsx)("th",{className:"text-left p-3",children:"Nome"}),(0,a.jsx)("th",{className:"text-left p-3",children:"Telefone"}),!!n&&(0,a.jsx)("th",{className:"p-4",children:"A\xe7\xf5es"})]})}),(0,a.jsx)("tbody",{children:function(){var r;return null===(r=e.setores)||void 0===r?void 0:r.map((function(e,r){return(0,a.jsxs)("tr",{className:"".concat(r%2===0?"bg-gray-300":"bg-gray-400"),children:[(0,a.jsx)("td",{className:"text-left p-2",children:e.id}),(0,a.jsx)("td",{className:"text-left p-2",children:e.nome}),(0,a.jsx)("td",{className:"text-left p-2",children:e.telefone}),!!n&&t(e)]},e.id)}))}()})]})}function C(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function z(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){C(a,r,o,i,s,"next",e)}function s(e){C(a,r,o,i,s,"throw",e)}i(void 0)}))}}function E(){var e=function(){t.obterSetoresAtivos().then((function(e){f(e),p("tabela")}))},t=new s.Z,n=(0,i.useState)(j.vazio()),r=n[0],l=n[1],u=(0,i.useState)([]),d=u[0],f=u[1],h=(0,i.useState)("tabela"),v=h[0],p=h[1];function x(){return(x=z(o().mark((function n(r){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.finalizarSetor(r);case 2:e();case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=z(o().mark((function n(r){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.id){n.next=5;break}return n.next=3,t.atualizarTelefoneSetor(r);case 3:n.next=7;break;case 5:return n.next=7,t.criarSetor(r);case 7:e();case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,i.useEffect)(e,[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"\n    flex justify-center items-center min-h-screen  max-h-full\n    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50\n    ",children:(0,a.jsx)(N.Z,{titulo:"Setores Ativos",children:"tabela"===v?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"mt-1 flex justify-end",children:[(0,a.jsx)(c.Z,{cor:"blue",className:"mb-3 m-2",onClick:function(){l(j.vazio()),p("form")},children:"Novo setor"}),(0,a.jsx)(c.Z,{cor:"blue",className:"mb-3 m-2",children:(0,a.jsx)("a",{href:"/suport",children:"Suport"})})]}),(0,a.jsx)(S,{setores:d,setorSelecionado:function(e){l(e),p("form")},setorFinalizado:function(e){return x.apply(this,arguments)}})]}):(0,a.jsx)(A,{setor:r,setorMudou:function(e){return m.apply(this,arguments)},cancelado:function(){return p("tabela")}})})})})}}},function(e){e.O(0,[713,774,888,179],(function(){return t=6244,e(e.s=t);var t}));var t=e.O();_N_E=t}]);