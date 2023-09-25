"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/suport",{

/***/ "./src/pages/suport/index.tsx":
/*!************************************!*\
  !*** ./src/pages/suport/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Suport; }\n/* harmony export */ });\n/* harmony import */ var _home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backend_db_ColecaoChamado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../backend/db/ColecaoChamado */ \"./src/backend/db/ColecaoChamado.ts\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_TabelaSuport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TabelaSuport */ \"./src/components/TabelaSuport.tsx\");\n/* harmony import */ var _core_chamado_Chamado__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/chamado/Chamado */ \"./src/core/chamado/Chamado.ts\");\n/* harmony import */ var _components_Rota__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Rota */ \"./src/components/Rota.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Suport() {\n    var refreshAlerta = function refreshAlerta() {\n        /* \n        const audio = new Audio(\"/alerta.mp3\");\n         */ var teste = new AudioContext();\n        var oscillator = teste.createOscillator();\n        oscillator.type = \"sine\";\n        oscillator.connect(teste.destination);\n        if (chamadosAberto.length > 0) {\n            setInterval(function() {\n                oscillator.start();\n                oscillator.stop(0.5);\n            }, 1000);\n        /* \n            audio.play();\n             */ }\n    };\n    var obterChamadosAbertos = // Metodo que exibe na tabela todos os chamados abertos\n    function obterChamadosAbertos() {\n        repo.obterChamadosAbertos().then(function(chamados) {\n            setChamados(chamados);\n            setVisivel(\"tabela\");\n            refreshAlerta();\n        });\n        repo.obterChamadosComStatusAberto().then(function(chamadosAbertos) {\n            setChamadosAberto(chamadosAbertos);\n        });\n    };\n    var novoChamado = // Metodo que abre um formulario vazio para criar um novo chamado\n    function novoChamado() {\n        setChamado(_core_chamado_Chamado__WEBPACK_IMPORTED_MODULE_6__[\"default\"].vazio());\n        setVisivel(\"form\");\n    };\n    var listarTodosChamados = // Metodo para listar todos os chamados abertos e finalizados\n    function listarTodosChamados() {\n        repo.obterTodosChamados().then(function(chamados) {\n            setChamados(chamados);\n            setVisivel(\"tabela\");\n        });\n    };\n    _s();\n    var repo = new _backend_db_ColecaoChamado__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_core_chamado_Chamado__WEBPACK_IMPORTED_MODULE_6__[\"default\"].vazio()), chamado1 = ref[0], setChamado = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), chamados1 = ref1[0], setChamados = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), chamadosAberto = ref2[0], setChamadosAberto = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"tabela\"), visivel = ref3[0], setVisivel = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(obterChamadosAbertos, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setInterval(obterChamadosAbertos, 5000);\n    }, []);\n    function salvarChamado(chamado) {\n        return _salvarChamado.apply(this, arguments);\n    }\n    function _salvarChamado() {\n        _salvarChamado = // Metodo para criar ou atualizar chamado\n        _asyncToGenerator(_home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(chamado) {\n            return _home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!chamado.id) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return repo.atualizarChamado(chamado) // atualza chamado existente\n                        ;\n                    case 3:\n                        _ctx.next = 7;\n                        break;\n                    case 5:\n                        _ctx.next = 7;\n                        return repo.criarChamado(chamado) // cria um novo chamado\n                        ;\n                    case 7:\n                        obterChamadosAbertos();\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _salvarChamado.apply(this, arguments);\n    }\n    //<Paginacao limite={12} total={120} offset={24} />\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"\\n    flex justify-center items-center min-h-screen  max-h-full\\n    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50\\n    \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                titulo: \"Chamados abertos\",\n                children: visivel === \"tabela\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mt-1 flex justify-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/edicao\",\n                                    children: \"Edi\\xe7\\xe3o dos Chamados\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/relatorio\",\n                                    novaAba: true,\n                                    children: \"Relat\\xf3rios\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/equipamentos\",\n                                    children: \"Listar tipos de Equipamentos\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/equipeSuport\",\n                                    children: \"Listar Equipe de Suporte\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 37\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TabelaSuport__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            chamados: chamados1\n                        }, void 0, false, {\n                            fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, void 0, true) : false\n            }, void 0, false, {\n                fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                lineNumber: 95,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n            lineNumber: 91,\n            columnNumber: 17\n        }, this)\n    }, void 0, false);\n};\n_s(Suport, \"jMoT8dtL60gLczbmMQxMWqHkLT8=\");\n_c = Suport;\nvar _c;\n$RefreshReg$(_c, \"Suport\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R21CakIsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdXBvcnQvaW5kZXgudHN4PzQ2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbGVjYW9DaGFtYWRvIGZyb20gXCIuLi8uLi9iYWNrZW5kL2RiL0NvbGVjYW9DaGFtYWRvXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFRhYmVsYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJlbGFTdXBvcnRcIjtcbmltcG9ydCBDaGFtYWRvIGZyb20gXCIuLi8uLi9jb3JlL2NoYW1hZG8vQ2hhbWFkb1wiO1xuaW1wb3J0IENoYW1hZG9SZXBvc2l0b3JpbyBmcm9tIFwiLi4vLi4vY29yZS9jaGFtYWRvL0NoYW1hZG9SZXBvc2l0b3Jpb1wiO1xuaW1wb3J0IFJvdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUm90YVwiO1xuaW1wb3J0IHVzZVNvdW5kIGZyb20gJ3VzZS1zb3VuZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Vwb3J0KCkge1xuXG4gICAgY29uc3QgcmVwbzogQ2hhbWFkb1JlcG9zaXRvcmlvID0gbmV3IENvbGVjYW9DaGFtYWRvKClcbiAgICBjb25zdCBbY2hhbWFkbywgc2V0Q2hhbWFkb10gPSB1c2VTdGF0ZTxDaGFtYWRvPihDaGFtYWRvLnZhemlvKCkpXG4gICAgY29uc3QgW2NoYW1hZG9zLCBzZXRDaGFtYWRvc10gPSB1c2VTdGF0ZTxDaGFtYWRvW10+KFtdKVxuICAgIGNvbnN0IFtjaGFtYWRvc0FiZXJ0bywgc2V0Q2hhbWFkb3NBYmVydG9dID0gdXNlU3RhdGU8Q2hhbWFkb1tdPihbXSlcbiAgICBjb25zdCBbdmlzaXZlbCwgc2V0VmlzaXZlbF0gPSB1c2VTdGF0ZSgndGFiZWxhJylcblxuICAgIHVzZUVmZmVjdChvYnRlckNoYW1hZG9zQWJlcnRvcywgW10pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SW50ZXJ2YWwob2J0ZXJDaGFtYWRvc0FiZXJ0b3MsIDUwMDApO1xuICAgIH0sIFtdKVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEFsZXJ0YSgpIHtcbi8qIFxuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhcIi9hbGVydGEubXAzXCIpO1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdGVzdGUgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIGxldCBvc2NpbGxhdG9yID0gdGVzdGUuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgICAgICBvc2NpbGxhdG9yLnR5cGUgPSBcInNpbmVcIjtcbiAgICAgICAgb3NjaWxsYXRvci5jb25uZWN0KHRlc3RlLmRlc3RpbmF0aW9uKTtcblxuICAgICAgICBpZiAoY2hhbWFkb3NBYmVydG8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9zY2lsbGF0b3Iuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBvc2NpbGxhdG9yLnN0b3AoMC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIDEwMDApO1xuLyogXG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgICAvLyBNZXRvZG8gcXVlIGV4aWJlIG5hIHRhYmVsYSB0b2RvcyBvcyBjaGFtYWRvcyBhYmVydG9zXG4gICAgICAgIGZ1bmN0aW9uIG9idGVyQ2hhbWFkb3NBYmVydG9zKCkge1xuICAgICAgICAgICAgcmVwby5vYnRlckNoYW1hZG9zQWJlcnRvcygpLnRoZW4oY2hhbWFkb3MgPT4ge1xuICAgICAgICAgICAgICAgIHNldENoYW1hZG9zKGNoYW1hZG9zKVxuICAgICAgICAgICAgICAgIHNldFZpc2l2ZWwoJ3RhYmVsYScpXG4gICAgICAgICAgICAgICAgcmVmcmVzaEFsZXJ0YSgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVwby5vYnRlckNoYW1hZG9zQ29tU3RhdHVzQWJlcnRvKCkudGhlbihjaGFtYWRvc0FiZXJ0b3MgPT4ge1xuICAgICAgICAgICAgICAgIHNldENoYW1hZG9zQWJlcnRvKGNoYW1hZG9zQWJlcnRvcylcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWV0b2RvIHBhcmEgY3JpYXIgb3UgYXR1YWxpemFyIGNoYW1hZG9cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc2FsdmFyQ2hhbWFkbyhjaGFtYWRvOiBDaGFtYWRvKSB7XG4gICAgICAgICAgICBpZiAoY2hhbWFkby5pZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlcG8uYXR1YWxpemFyQ2hhbWFkbyhjaGFtYWRvKSAvLyBhdHVhbHphIGNoYW1hZG8gZXhpc3RlbnRlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlcG8uY3JpYXJDaGFtYWRvKGNoYW1hZG8pIC8vIGNyaWEgdW0gbm92byBjaGFtYWRvXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9idGVyQ2hhbWFkb3NBYmVydG9zKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ldG9kbyBxdWUgYWJyZSB1bSBmb3JtdWxhcmlvIHZhemlvIHBhcmEgY3JpYXIgdW0gbm92byBjaGFtYWRvXG4gICAgICAgIGZ1bmN0aW9uIG5vdm9DaGFtYWRvKCkge1xuICAgICAgICAgICAgc2V0Q2hhbWFkbyhDaGFtYWRvLnZhemlvKCkpXG4gICAgICAgICAgICBzZXRWaXNpdmVsKCdmb3JtJylcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWV0b2RvIHBhcmEgbGlzdGFyIHRvZG9zIG9zIGNoYW1hZG9zIGFiZXJ0b3MgZSBmaW5hbGl6YWRvc1xuICAgICAgICBmdW5jdGlvbiBsaXN0YXJUb2Rvc0NoYW1hZG9zKCkge1xuICAgICAgICAgICAgcmVwby5vYnRlclRvZG9zQ2hhbWFkb3MoKS50aGVuKGNoYW1hZG9zID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDaGFtYWRvcyhjaGFtYWRvcylcbiAgICAgICAgICAgICAgICBzZXRWaXNpdmVsKCd0YWJlbGEnKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgLy88UGFnaW5hY2FvIGxpbWl0ZT17MTJ9IHRvdGFsPXsxMjB9IG9mZnNldD17MjR9IC8+XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcbiAgICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gIG1heC1oLWZ1bGxcbiAgICBiZy1ncmFkaWVudC10by1yIGZyb20tc2xhdGUtNDAwIHRvLXNsYXRlLTUwMCB0ZXh0LW5ldXRyYWwtNTBcbiAgICBgfT5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dCB0aXR1bG89XCJDaGFtYWRvcyBhYmVydG9zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmlzaXZlbCA9PT0gJ3RhYmVsYScgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIGZsZXgganVzdGlmeS1lbmRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdGEgcm90YT1cInN1cG9ydC9lZGljYW9cIj5FZGnDp8OjbyBkb3MgQ2hhbWFkb3M8L1JvdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um90YSByb3RhPVwic3Vwb3J0L3JlbGF0b3Jpb1wiIG5vdmFBYmE+UmVsYXTDs3Jpb3M8L1JvdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um90YSByb3RhPVwic3Vwb3J0L2VxdWlwYW1lbnRvc1wiPkxpc3RhciB0aXBvcyBkZSBFcXVpcGFtZW50b3M8L1JvdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um90YSByb3RhPVwic3Vwb3J0L2VxdWlwZVN1cG9ydFwiPkxpc3RhciBFcXVpcGUgZGUgU3Vwb3J0ZTwvUm90YT5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJlbGEgY2hhbWFkb3M9e2NoYW1hZG9zfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbGVjYW9DaGFtYWRvIiwiTGF5b3V0IiwiVGFiZWxhIiwiQ2hhbWFkbyIsIlJvdGEiLCJTdXBvcnQiLCJyZWZyZXNoQWxlcnRhIiwidGVzdGUiLCJBdWRpb0NvbnRleHQiLCJvc2NpbGxhdG9yIiwiY3JlYXRlT3NjaWxsYXRvciIsInR5cGUiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJjaGFtYWRvc0FiZXJ0byIsImxlbmd0aCIsInNldEludGVydmFsIiwic3RhcnQiLCJzdG9wIiwib2J0ZXJDaGFtYWRvc0FiZXJ0b3MiLCJyZXBvIiwidGhlbiIsImNoYW1hZG9zIiwic2V0Q2hhbWFkb3MiLCJzZXRWaXNpdmVsIiwib2J0ZXJDaGFtYWRvc0NvbVN0YXR1c0FiZXJ0byIsImNoYW1hZG9zQWJlcnRvcyIsInNldENoYW1hZG9zQWJlcnRvIiwibm92b0NoYW1hZG8iLCJzZXRDaGFtYWRvIiwidmF6aW8iLCJsaXN0YXJUb2Rvc0NoYW1hZG9zIiwib2J0ZXJUb2Rvc0NoYW1hZG9zIiwiY2hhbWFkbyIsInZpc2l2ZWwiLCJzYWx2YXJDaGFtYWRvIiwiaWQiLCJhdHVhbGl6YXJDaGFtYWRvIiwiY3JpYXJDaGFtYWRvIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0dWxvIiwicm90YSIsIm5vdmFBYmEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/suport/index.tsx\n");

/***/ })

});