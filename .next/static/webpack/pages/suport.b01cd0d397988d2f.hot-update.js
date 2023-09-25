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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Suport; }\n/* harmony export */ });\n/* harmony import */ var _home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backend_db_ColecaoChamado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../backend/db/ColecaoChamado */ \"./src/backend/db/ColecaoChamado.ts\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_TabelaSuport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TabelaSuport */ \"./src/components/TabelaSuport.tsx\");\n/* harmony import */ var _core_chamado_Chamado__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/chamado/Chamado */ \"./src/core/chamado/Chamado.ts\");\n/* harmony import */ var _components_Rota__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Rota */ \"./src/components/Rota.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Suport() {\n    var refreshAlerta = function refreshAlerta() {\n        /* \n        const audio = new Audio(\"/alerta.mp3\");\n        */ if (chamadosAberto.length > 0) {\n            if (oscillator === null) {\n                oscillator = teste.createOscillator();\n                oscillator.type = \"sine\";\n                oscillator.connect(teste.destination);\n                oscillator.start();\n            }\n        } else {\n            if (oscillator !== null) {\n                oscillator.stop();\n                oscillator = null;\n            }\n        }\n    };\n    var obterChamadosAbertos = // Metodo que exibe na tabela todos os chamados abertos\n    function obterChamadosAbertos() {\n        repo.obterChamadosAbertos().then(function(chamados) {\n            setChamados(chamados);\n            setVisivel(\"tabela\");\n            refreshAlerta();\n        });\n        repo.obterChamadosComStatusAberto().then(function(chamadosAbertos) {\n            setChamadosAberto(chamadosAbertos);\n        });\n    };\n    var novoChamado = // Metodo que abre um formulario vazio para criar um novo chamado\n    function novoChamado() {\n        setChamado(_core_chamado_Chamado__WEBPACK_IMPORTED_MODULE_6__[\"default\"].vazio());\n        setVisivel(\"form\");\n    };\n    var listarTodosChamados = // Metodo para listar todos os chamados abertos e finalizados\n    function listarTodosChamados() {\n        repo.obterTodosChamados().then(function(chamados) {\n            setChamados(chamados);\n            setVisivel(\"tabela\");\n        });\n    };\n    _s();\n    var repo = new _backend_db_ColecaoChamado__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_core_chamado_Chamado__WEBPACK_IMPORTED_MODULE_6__[\"default\"].vazio()), chamado1 = ref[0], setChamado = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), chamados1 = ref1[0], setChamados = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), chamadosAberto = ref2[0], setChamadosAberto = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"tabela\"), visivel = ref3[0], setVisivel = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(obterChamadosAbertos, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setInterval(obterChamadosAbertos, 5000);\n    }, []);\n    var teste = new AudioContext();\n    var oscillator = teste.createOscillator();\n    function salvarChamado(chamado) {\n        return _salvarChamado.apply(this, arguments);\n    }\n    function _salvarChamado() {\n        _salvarChamado = // Metodo para criar ou atualizar chamado\n        _asyncToGenerator(_home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(chamado) {\n            return _home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!chamado.id) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return repo.atualizarChamado(chamado) // atualza chamado existente\n                        ;\n                    case 3:\n                        _ctx.next = 7;\n                        break;\n                    case 5:\n                        _ctx.next = 7;\n                        return repo.criarChamado(chamado) // cria um novo chamado\n                        ;\n                    case 7:\n                        obterChamadosAbertos();\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _salvarChamado.apply(this, arguments);\n    }\n    //<Paginacao limite={12} total={120} offset={24} />\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"\\n    flex justify-center items-center min-h-screen  max-h-full\\n    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50\\n    \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                titulo: \"Chamados abertos\",\n                children: visivel === \"tabela\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mt-1 flex justify-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/edicao\",\n                                    children: \"Edi\\xe7\\xe3o dos Chamados\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/relatorio\",\n                                    novaAba: true,\n                                    children: \"Relat\\xf3rios\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/equipamentos\",\n                                    children: \"Listar tipos de Equipamentos\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/equipeSuport\",\n                                    children: \"Listar Equipe de Suporte\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TabelaSuport__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            chamados: chamados1\n                        }, void 0, false, {\n                            fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true) : false\n            }, void 0, false, {\n                fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                lineNumber: 95,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n            lineNumber: 91,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n};\n_s(Suport, \"jMoT8dtL60gLczbmMQxMWqHkLT8=\");\n_c = Suport;\nvar _c;\n$RefreshReg$(_c, \"Suport\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUFDa0IsUUFBUSxFQUFFQSxTQUFROzs7OztnQ0FFeEI7O2dDQUNILEdBQ0gsS0FBSzs7Ozs7b0JBQ0o7Ozs7O2dCQUNQO3FCQUVQLENBQ047Q0FDSjtHQTVHdUJmLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3Vwb3J0L2luZGV4LnRzeD80NjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xlY2FvQ2hhbWFkbyBmcm9tIFwiLi4vLi4vYmFja2VuZC9kYi9Db2xlY2FvQ2hhbWFkb1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBUYWJlbGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFiZWxhU3Vwb3J0XCI7XG5pbXBvcnQgQ2hhbWFkbyBmcm9tIFwiLi4vLi4vY29yZS9jaGFtYWRvL0NoYW1hZG9cIjtcbmltcG9ydCBDaGFtYWRvUmVwb3NpdG9yaW8gZnJvbSBcIi4uLy4uL2NvcmUvY2hhbWFkby9DaGFtYWRvUmVwb3NpdG9yaW9cIjtcbmltcG9ydCBSb3RhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JvdGFcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdXBvcnQoKSB7XG5cbiAgICBjb25zdCByZXBvOiBDaGFtYWRvUmVwb3NpdG9yaW8gPSBuZXcgQ29sZWNhb0NoYW1hZG8oKVxuICAgIGNvbnN0IFtjaGFtYWRvLCBzZXRDaGFtYWRvXSA9IHVzZVN0YXRlPENoYW1hZG8+KENoYW1hZG8udmF6aW8oKSlcbiAgICBjb25zdCBbY2hhbWFkb3MsIHNldENoYW1hZG9zXSA9IHVzZVN0YXRlPENoYW1hZG9bXT4oW10pXG4gICAgY29uc3QgW2NoYW1hZG9zQWJlcnRvLCBzZXRDaGFtYWRvc0FiZXJ0b10gPSB1c2VTdGF0ZTxDaGFtYWRvW10+KFtdKVxuICAgIGNvbnN0IFt2aXNpdmVsLCBzZXRWaXNpdmVsXSA9IHVzZVN0YXRlKCd0YWJlbGEnKVxuXG4gICAgdXNlRWZmZWN0KG9idGVyQ2hhbWFkb3NBYmVydG9zLCBbXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJbnRlcnZhbChvYnRlckNoYW1hZG9zQWJlcnRvcywgNTAwMCk7XG4gICAgfSwgW10pXG5cbiAgICBjb25zdCB0ZXN0ZSA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBsZXQgb3NjaWxsYXRvciA9IHRlc3RlLmNyZWF0ZU9zY2lsbGF0b3IoKVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaEFsZXJ0YSgpIHtcbiAgICAgICAgLyogXG4gICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiL2FsZXJ0YS5tcDNcIik7XG4gICAgICAgICovXG4gICAgICAgIGlmIChjaGFtYWRvc0FiZXJ0by5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAob3NjaWxsYXRvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9zY2lsbGF0b3IgPSB0ZXN0ZS5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICAgICAgICAgICAgb3NjaWxsYXRvci50eXBlID0gXCJzaW5lXCI7XG4gICAgICAgICAgICAgICAgb3NjaWxsYXRvci5jb25uZWN0KHRlc3RlLmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICBvc2NpbGxhdG9yLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3NjaWxsYXRvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9zY2lsbGF0b3Iuc3RvcCgpO1xuICAgICAgICAgICAgICAgIG9zY2lsbGF0b3IgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWV0b2RvIHF1ZSBleGliZSBuYSB0YWJlbGEgdG9kb3Mgb3MgY2hhbWFkb3MgYWJlcnRvc1xuICAgIGZ1bmN0aW9uIG9idGVyQ2hhbWFkb3NBYmVydG9zKCkge1xuICAgICAgICByZXBvLm9idGVyQ2hhbWFkb3NBYmVydG9zKCkudGhlbihjaGFtYWRvcyA9PiB7XG4gICAgICAgICAgICBzZXRDaGFtYWRvcyhjaGFtYWRvcylcbiAgICAgICAgICAgIHNldFZpc2l2ZWwoJ3RhYmVsYScpXG4gICAgICAgICAgICByZWZyZXNoQWxlcnRhKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVwby5vYnRlckNoYW1hZG9zQ29tU3RhdHVzQWJlcnRvKCkudGhlbihjaGFtYWRvc0FiZXJ0b3MgPT4ge1xuICAgICAgICAgICAgc2V0Q2hhbWFkb3NBYmVydG8oY2hhbWFkb3NBYmVydG9zKVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvLyBNZXRvZG8gcGFyYSBjcmlhciBvdSBhdHVhbGl6YXIgY2hhbWFkb1xuICAgIGFzeW5jIGZ1bmN0aW9uIHNhbHZhckNoYW1hZG8oY2hhbWFkbzogQ2hhbWFkbykge1xuICAgICAgICBpZiAoY2hhbWFkby5pZCkge1xuICAgICAgICAgICAgYXdhaXQgcmVwby5hdHVhbGl6YXJDaGFtYWRvKGNoYW1hZG8pIC8vIGF0dWFsemEgY2hhbWFkbyBleGlzdGVudGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHJlcG8uY3JpYXJDaGFtYWRvKGNoYW1hZG8pIC8vIGNyaWEgdW0gbm92byBjaGFtYWRvXG4gICAgICAgIH1cblxuICAgICAgICBvYnRlckNoYW1hZG9zQWJlcnRvcygpXG4gICAgfVxuXG4gICAgLy8gTWV0b2RvIHF1ZSBhYnJlIHVtIGZvcm11bGFyaW8gdmF6aW8gcGFyYSBjcmlhciB1bSBub3ZvIGNoYW1hZG9cbiAgICBmdW5jdGlvbiBub3ZvQ2hhbWFkbygpIHtcbiAgICAgICAgc2V0Q2hhbWFkbyhDaGFtYWRvLnZhemlvKCkpXG4gICAgICAgIHNldFZpc2l2ZWwoJ2Zvcm0nKVxuXG4gICAgfVxuXG4gICAgLy8gTWV0b2RvIHBhcmEgbGlzdGFyIHRvZG9zIG9zIGNoYW1hZG9zIGFiZXJ0b3MgZSBmaW5hbGl6YWRvc1xuICAgIGZ1bmN0aW9uIGxpc3RhclRvZG9zQ2hhbWFkb3MoKSB7XG4gICAgICAgIHJlcG8ub2J0ZXJUb2Rvc0NoYW1hZG9zKCkudGhlbihjaGFtYWRvcyA9PiB7XG4gICAgICAgICAgICBzZXRDaGFtYWRvcyhjaGFtYWRvcylcbiAgICAgICAgICAgIHNldFZpc2l2ZWwoJ3RhYmVsYScpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvLzxQYWdpbmFjYW8gbGltaXRlPXsxMn0gdG90YWw9ezEyMH0gb2Zmc2V0PXsyNH0gLz5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiAgbWF4LWgtZnVsbFxuICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1zbGF0ZS00MDAgdG8tc2xhdGUtNTAwIHRleHQtbmV1dHJhbC01MFxuICAgIGB9PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQgdGl0dWxvPVwiQ2hhbWFkb3MgYWJlcnRvc1wiPlxuICAgICAgICAgICAgICAgICAgICB7dmlzaXZlbCA9PT0gJ3RhYmVsYScgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSBmbGV4IGp1c3RpZnktZW5kXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdGEgcm90YT1cInN1cG9ydC9lZGljYW9cIj5FZGnDp8OjbyBkb3MgQ2hhbWFkb3M8L1JvdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3RhIHJvdGE9XCJzdXBvcnQvcmVsYXRvcmlvXCIgbm92YUFiYT5SZWxhdMOzcmlvczwvUm90YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdGEgcm90YT1cInN1cG9ydC9lcXVpcGFtZW50b3NcIj5MaXN0YXIgdGlwb3MgZGUgRXF1aXBhbWVudG9zPC9Sb3RhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um90YSByb3RhPVwic3Vwb3J0L2VxdWlwZVN1cG9ydFwiPkxpc3RhciBFcXVpcGUgZGUgU3Vwb3J0ZTwvUm90YT5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiZWxhIGNoYW1hZG9zPXtjaGFtYWRvc31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29sZWNhb0NoYW1hZG8iLCJMYXlvdXQiLCJUYWJlbGEiLCJDaGFtYWRvIiwiUm90YSIsIlN1cG9ydCIsInJlZnJlc2hBbGVydGEiLCJjaGFtYWRvc0FiZXJ0byIsImxlbmd0aCIsIm9zY2lsbGF0b3IiLCJ0ZXN0ZSIsImNyZWF0ZU9zY2lsbGF0b3IiLCJ0eXBlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwic3RhcnQiLCJzdG9wIiwib2J0ZXJDaGFtYWRvc0FiZXJ0b3MiLCJyZXBvIiwidGhlbiIsImNoYW1hZG9zIiwic2V0Q2hhbWFkb3MiLCJzZXRWaXNpdmVsIiwib2J0ZXJDaGFtYWRvc0NvbVN0YXR1c0FiZXJ0byIsImNoYW1hZG9zQWJlcnRvcyIsInNldENoYW1hZG9zQWJlcnRvIiwibm92b0NoYW1hZG8iLCJzZXRDaGFtYWRvIiwidmF6aW8iLCJsaXN0YXJUb2Rvc0NoYW1hZG9zIiwib2J0ZXJUb2Rvc0NoYW1hZG9zIiwiY2hhbWFkbyIsInZpc2l2ZWwiLCJzZXRJbnRlcnZhbCIsIkF1ZGlvQ29udGV4dCIsInNhbHZhckNoYW1hZG8iLCJpZCIsImF0dWFsaXphckNoYW1hZG8iLCJjcmlhckNoYW1hZG8iLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXR1bG8iLCJyb3RhIiwibm92YUFiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/suport/index.tsx\n");

/***/ })

});