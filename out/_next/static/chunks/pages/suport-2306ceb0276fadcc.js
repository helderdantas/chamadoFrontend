(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[907],{8531:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/suport",function(){return r(2980)}])},2980:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(4051),a=r.n(n),s=r(5893),o=r(7294),c=r(3547),i=r(5663),u=r(1591),l=r(8798),d=r(469),h=r(6997);function m(e,t,r,n,a,s,o){try{var c=e[s](o),i=c.value}catch(u){return void r(u)}c.done?t(i):Promise.resolve(i).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function o(e){m(s,n,a,o,c,"next",e)}function c(e){m(s,n,a,o,c,"throw",e)}o(void 0)}))}}function b(){var e=function(){t.obterChamadosAbertos().then((function(e){x(e),_("tabela")})),t.obterChamadosComStatusAberto().then((function(e){j(e)}))},t=new c.Z,r=(0,o.useState)(h.Z.vazio()),n=r[0],m=(r[1],(0,o.useState)([])),b=m[0],x=m[1],p=(0,o.useState)([]),j=(p[0],p[1]),v=(0,o.useState)("tabela"),N=v[0],_=v[1];function w(){return(w=f(a().mark((function r(n){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n.id){r.next=5;break}return r.next=3,t.atualizarChamado(n);case 3:r.next=7;break;case 5:return r.next=7,t.criarChamado(n);case 7:e();case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return(0,o.useEffect)(e,[]),(0,o.useEffect)((function(){setInterval(e,3e4)}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"\n    flex justify-center items-center min-h-screen  max-h-full\n    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50\n    ",children:(0,s.jsx)(l.Z,{titulo:"Chamados abertos",children:"tabela"===N?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"mt-1 flex justify-end",children:[(0,s.jsx)(i.Z,{cor:"blue",className:"mb-3 m-2",children:(0,s.jsx)("a",{href:"/suport/edicao",children:"Edi\xe7\xe3o dos Chamados"})}),(0,s.jsx)(i.Z,{cor:"blue",className:"mb-3 m-2",children:(0,s.jsx)("a",{href:"/suport/relatorio",target:"_blank",children:"Relat\xf3rios"})}),(0,s.jsx)(i.Z,{cor:"blue",className:"mb-3 m-2",children:(0,s.jsx)("a",{href:"/adm/setores",children:"Listar Setores"})}),(0,s.jsx)(i.Z,{cor:"blue",className:"mb-3 m-2",children:(0,s.jsx)("a",{href:"/adm/subSetores",children:"Listar SubSetores"})}),(0,s.jsx)(i.Z,{cor:"blue",className:"mb-3 m-2",children:(0,s.jsx)("a",{href:"/adm/equipamentos",children:"Listar tipos de Equipamentos"})}),(0,s.jsx)(i.Z,{cor:"blue",className:"mb-3 m-2",children:(0,s.jsx)("a",{href:"/adm/equipeSuport",children:"Listar Equipe de Suporte"})})]}),(0,s.jsx)(d.Z,{chamados:b})]}):(0,s.jsx)(u.Z,{chamado:n,chamadoMudou:function(e){return w.apply(this,arguments)},cancelado:function(){return _("tabela")}})})})})}}},function(e){e.O(0,[713,349,688,774,888,179],(function(){return t=8531,e(e.s=t);var t}));var t=e.O();_N_E=t}]);