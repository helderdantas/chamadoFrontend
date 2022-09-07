"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{3547:function(t,r,e){e.d(r,{Z:function(){return s}});var n=e(4051),a=e.n(n);function o(t,r,e,n,a,o,c){try{var u=t[o](c),s=u.value}catch(i){return void e(i)}u.done?r(s):Promise.resolve(s).then(n,a)}function c(t){return function(){var r=this,e=arguments;return new Promise((function(n,a){var c=t.apply(r,e);function u(t){o(c,n,a,u,s,"next",t)}function s(t){o(c,n,a,u,s,"throw",t)}u(void 0)}))}}var u=e(9669),s=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)}var r=t.prototype;return r.criarChamado=function(t){return c(a().mark((function r(){var e,n,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e={aberto:!0,nome:t.nome,setor:t.setor,subSetor:t.subSetor,equipamentoComDefeito:t.equipamentoComDefeito,equipamentoTombo:t.equipamentoTombo,descricao:t.descricao,equipeSuport:t.equipeSuport,status:"ABERTO",observacao:t.observacao},r.next=4,u.post("".concat("http://localhost:3030/","criarChamado/"),e);case 4:return n=r.sent,console.log(n),o=n.data,r.abrupt("return",o);case 10:r.prev=10,r.t0=r.catch(0),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},r.atualizarChamado=function(t){return c(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.prev=1,e={method:"put",url:"".concat("http://localhost:3030/","updateChamado/")+t.id,data:{subSetor:t.subSetor,equipamentoComDefeito:t.equipamentoComDefeito,equipeSuport:t.equipeSuport,status:t.status,observacao:t.observacao}},r.next=5,u(e);case 5:r.sent,console.log("atualizado com sucesso"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:r.next=17;break;case 14:r.prev=14,r.t1=r.catch(0),console.log(r.t1);case 17:case"end":return r.stop()}}),r,null,[[0,14],[1,9]])})))()},r.finalizarChamado=function(t){return c(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!t.id){r.next=6;break}return e={method:"put",url:"".concat("http://localhost:3030/","updateCampoAbertoChamado/")+t.id,headers:{}},r.next=5,u(e);case 5:console.log("finalizado com sucesso");case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log("Erro ao finalizar chamado ".concat(r.t0));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},r.obterChamadosAbertos=function(){return c(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("".concat("http://localhost:3030/","listarChamadosAbertos"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},r.obterTodosChamados=function(){return c(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("".concat("http://localhost:3030/","listarTodosChamados"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},r.chamadosPorSetor=function(t,r,e){return c(a().mark((function n(){var o,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o={setor:t,dataInicial:r,dataFinal:e},n.next=4,u.post("".concat("http://localhost:3030/","chamadosPorSetor"),o);case 4:return c=n.sent,n.abrupt("return",c.data);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},r.chamadosPorSuport=function(t,r,e){return c(a().mark((function n(){var o,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o={equipeSuport:t,dataInicial:r,dataFinal:e},n.next=4,u.post("".concat("http://localhost:3030/","chamadosPorSuport"),o);case 4:return c=n.sent,n.abrupt("return",c.data);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},r.chamadosPorTipoEquipamento=function(t,r,e){return c(a().mark((function n(){var o,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o={equipamentoComDefeito:t,dataInicial:r,dataFinal:e},n.next=4,u.post("".concat("http://localhost:3030/","chamadosPorTipoEquipamento"),o);case 4:return c=n.sent,n.abrupt("return",c.data);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},t}()},4680:function(t,r,e){e.d(r,{Z:function(){return s}});var n=e(4051),a=e.n(n);function o(t,r,e,n,a,o,c){try{var u=t[o](c),s=u.value}catch(i){return void e(i)}u.done?r(s):Promise.resolve(s).then(n,a)}function c(t){return function(){var r=this,e=arguments;return new Promise((function(n,a){var c=t.apply(r,e);function u(t){o(c,n,a,u,s,"next",t)}function s(t){o(c,n,a,u,s,"throw",t)}u(void 0)}))}}var u=e(9669),s=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)}var r=t.prototype;return r.criarSetor=function(t){return c(a().mark((function r(){var e,n,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e={ativo:!0,nome:t.nome},console.log("entrei"),r.next=5,u.post("".concat("http://localhost:3030/","criarSetor/"),e);case 5:return n=r.sent,console.log(n),o=n.data,r.abrupt("return",o);case 11:r.prev=11,r.t0=r.catch(0),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},r.finalizarSetor=function(t){return c(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!t.id){r.next=6;break}return e={method:"put",url:"".concat("http://localhost:3030/","updateCampoAtivoSetor/")+t.id,headers:{}},r.next=5,u(e);case 5:console.log("finalizado com sucesso");case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log("Erro ao finalizar setor ".concat(r.t0));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},r.obterSetoresAtivos=function(){return c(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("".concat("http://localhost:3030/","listarSetoresAtivos"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},r.obterTodosSetores=function(){return c(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("".concat("http://localhost:3030/","listarTodosSetores"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},t}()},3343:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(5893);function a(t){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"px-5 py-2 text-2xl",children:t.children}),(0,n.jsx)("hr",{className:"border-2 border-gray-600"})]})}function o(t){return(0,n.jsxs)("div",{className:"\n            flex flex-col w-10/12\n            bg-gray-100\n            text-gray-800 \n            rounded-md\n        ",children:[(0,n.jsx)(a,{children:t.titulo}),(0,n.jsx)("div",{className:"p-2",children:t.children})]})}}}]);