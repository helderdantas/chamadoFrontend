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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Suport; }\n/* harmony export */ });\n/* harmony import */ var _home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backend_db_ColecaoChamado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../backend/db/ColecaoChamado */ \"./src/backend/db/ColecaoChamado.ts\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_TabelaSuport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TabelaSuport */ \"./src/components/TabelaSuport.tsx\");\n/* harmony import */ var _core_chamado_Chamado__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/chamado/Chamado */ \"./src/core/chamado/Chamado.ts\");\n/* harmony import */ var _components_Rota__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Rota */ \"./src/components/Rota.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Suport() {\n    var refreshAlerta = function refreshAlerta() {\n        /* \n        const audio = new Audio(\"/alerta.mp3\");\n         */ var teste = new AudioContext();\n        var oscillator = teste.createOscillator();\n        oscillator.type = \"sine\";\n        oscillator.connect(teste.destination);\n        if (chamadosAberto.length > 0) {\n            oscillator.start();\n        /* \n            audio.play();\n             */ } else {\n            oscillator.stop(1);\n        }\n    };\n    var obterChamadosAbertos = // Metodo que exibe na tabela todos os chamados abertos\n    function obterChamadosAbertos() {\n        repo.obterChamadosAbertos().then(function(chamados) {\n            setChamados(chamados);\n            setVisivel(\"tabela\");\n            refreshAlerta();\n        });\n        repo.obterChamadosComStatusAberto().then(function(chamadosAbertos) {\n            setChamadosAberto(chamadosAbertos);\n        });\n    };\n    var novoChamado = // Metodo que abre um formulario vazio para criar um novo chamado\n    function novoChamado() {\n        setChamado(_core_chamado_Chamado__WEBPACK_IMPORTED_MODULE_6__[\"default\"].vazio());\n        setVisivel(\"form\");\n    };\n    var listarTodosChamados = // Metodo para listar todos os chamados abertos e finalizados\n    function listarTodosChamados() {\n        repo.obterTodosChamados().then(function(chamados) {\n            setChamados(chamados);\n            setVisivel(\"tabela\");\n        });\n    };\n    _s();\n    var repo = new _backend_db_ColecaoChamado__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_core_chamado_Chamado__WEBPACK_IMPORTED_MODULE_6__[\"default\"].vazio()), chamado1 = ref[0], setChamado = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), chamados1 = ref1[0], setChamados = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), chamadosAberto = ref2[0], setChamadosAberto = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"tabela\"), visivel = ref3[0], setVisivel = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(obterChamadosAbertos, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setInterval(obterChamadosAbertos, 5000);\n    }, []);\n    function salvarChamado(chamado) {\n        return _salvarChamado.apply(this, arguments);\n    }\n    function _salvarChamado() {\n        _salvarChamado = // Metodo para criar ou atualizar chamado\n        _asyncToGenerator(_home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(chamado) {\n            return _home_deyves_chamado_front_helder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!chamado.id) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return repo.atualizarChamado(chamado) // atualza chamado existente\n                        ;\n                    case 3:\n                        _ctx.next = 7;\n                        break;\n                    case 5:\n                        _ctx.next = 7;\n                        return repo.criarChamado(chamado) // cria um novo chamado\n                        ;\n                    case 7:\n                        obterChamadosAbertos();\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _salvarChamado.apply(this, arguments);\n    }\n    //<Paginacao limite={12} total={120} offset={24} />\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"\\n    flex justify-center items-center min-h-screen  max-h-full\\n    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50\\n    \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                titulo: \"Chamados abertos\",\n                children: visivel === \"tabela\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mt-1 flex justify-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/edicao\",\n                                    children: \"Edi\\xe7\\xe3o dos Chamados\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/relatorio\",\n                                    novaAba: true,\n                                    children: \"Relat\\xf3rios\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/equipamentos\",\n                                    children: \"Listar tipos de Equipamentos\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Rota__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    rota: \"suport/equipeSuport\",\n                                    children: \"Listar Equipe de Suporte\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 37\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TabelaSuport__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            chamados: chamados1\n                        }, void 0, false, {\n                            fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, void 0, true) : false\n            }, void 0, false, {\n                fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/deyves/chamado/front-helder/src/pages/suport/index.tsx\",\n            lineNumber: 90,\n            columnNumber: 17\n        }, this)\n    }, void 0, false);\n};\n_s(Suport, \"jMoT8dtL60gLczbmMQxMWqHkLT8=\");\n_c = Suport;\nvar _c;\n$RefreshReg$(_c, \"Suport\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3Vwb3J0L2luZGV4LnRzeD80NjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xlY2FvQ2hhbWFkbyBmcm9tIFwiLi4vLi4vYmFja2VuZC9kYi9Db2xlY2FvQ2hhbWFkb1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBUYWJlbGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFiZWxhU3Vwb3J0XCI7XG5pbXBvcnQgQ2hhbWFkbyBmcm9tIFwiLi4vLi4vY29yZS9jaGFtYWRvL0NoYW1hZG9cIjtcbmltcG9ydCBDaGFtYWRvUmVwb3NpdG9yaW8gZnJvbSBcIi4uLy4uL2NvcmUvY2hhbWFkby9DaGFtYWRvUmVwb3NpdG9yaW9cIjtcbmltcG9ydCBSb3RhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JvdGFcIjtcbmltcG9ydCB1c2VTb3VuZCBmcm9tICd1c2Utc291bmQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1cG9ydCgpIHtcblxuICAgIGNvbnN0IHJlcG86IENoYW1hZG9SZXBvc2l0b3JpbyA9IG5ldyBDb2xlY2FvQ2hhbWFkbygpXG4gICAgY29uc3QgW2NoYW1hZG8sIHNldENoYW1hZG9dID0gdXNlU3RhdGU8Q2hhbWFkbz4oQ2hhbWFkby52YXppbygpKVxuICAgIGNvbnN0IFtjaGFtYWRvcywgc2V0Q2hhbWFkb3NdID0gdXNlU3RhdGU8Q2hhbWFkb1tdPihbXSlcbiAgICBjb25zdCBbY2hhbWFkb3NBYmVydG8sIHNldENoYW1hZG9zQWJlcnRvXSA9IHVzZVN0YXRlPENoYW1hZG9bXT4oW10pXG4gICAgY29uc3QgW3Zpc2l2ZWwsIHNldFZpc2l2ZWxdID0gdXNlU3RhdGUoJ3RhYmVsYScpXG5cbiAgICB1c2VFZmZlY3Qob2J0ZXJDaGFtYWRvc0FiZXJ0b3MsIFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEludGVydmFsKG9idGVyQ2hhbWFkb3NBYmVydG9zLCA1MDAwKTtcbiAgICB9LCBbXSlcblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hBbGVydGEoKSB7XG4vKiBcbiAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oXCIvYWxlcnRhLm1wM1wiKTtcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHRlc3RlID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICBsZXQgb3NjaWxsYXRvciA9IHRlc3RlLmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAgICAgb3NjaWxsYXRvci50eXBlID0gXCJzaW5lXCI7XG4gICAgICAgIG9zY2lsbGF0b3IuY29ubmVjdCh0ZXN0ZS5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgaWYgKGNoYW1hZG9zQWJlcnRvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG9zY2lsbGF0b3Iuc3RhcnQoKTtcbi8qIFxuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgICovXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvc2NpbGxhdG9yLnN0b3AoMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgICAgLy8gTWV0b2RvIHF1ZSBleGliZSBuYSB0YWJlbGEgdG9kb3Mgb3MgY2hhbWFkb3MgYWJlcnRvc1xuICAgICAgICBmdW5jdGlvbiBvYnRlckNoYW1hZG9zQWJlcnRvcygpIHtcbiAgICAgICAgICAgIHJlcG8ub2J0ZXJDaGFtYWRvc0FiZXJ0b3MoKS50aGVuKGNoYW1hZG9zID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDaGFtYWRvcyhjaGFtYWRvcylcbiAgICAgICAgICAgICAgICBzZXRWaXNpdmVsKCd0YWJlbGEnKVxuICAgICAgICAgICAgICAgIHJlZnJlc2hBbGVydGEoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcG8ub2J0ZXJDaGFtYWRvc0NvbVN0YXR1c0FiZXJ0bygpLnRoZW4oY2hhbWFkb3NBYmVydG9zID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDaGFtYWRvc0FiZXJ0byhjaGFtYWRvc0FiZXJ0b3MpXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ldG9kbyBwYXJhIGNyaWFyIG91IGF0dWFsaXphciBjaGFtYWRvXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNhbHZhckNoYW1hZG8oY2hhbWFkbzogQ2hhbWFkbykge1xuICAgICAgICAgICAgaWYgKGNoYW1hZG8uaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCByZXBvLmF0dWFsaXphckNoYW1hZG8oY2hhbWFkbykgLy8gYXR1YWx6YSBjaGFtYWRvIGV4aXN0ZW50ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCByZXBvLmNyaWFyQ2hhbWFkbyhjaGFtYWRvKSAvLyBjcmlhIHVtIG5vdm8gY2hhbWFkb1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvYnRlckNoYW1hZG9zQWJlcnRvcygpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZXRvZG8gcXVlIGFicmUgdW0gZm9ybXVsYXJpbyB2YXppbyBwYXJhIGNyaWFyIHVtIG5vdm8gY2hhbWFkb1xuICAgICAgICBmdW5jdGlvbiBub3ZvQ2hhbWFkbygpIHtcbiAgICAgICAgICAgIHNldENoYW1hZG8oQ2hhbWFkby52YXppbygpKVxuICAgICAgICAgICAgc2V0VmlzaXZlbCgnZm9ybScpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ldG9kbyBwYXJhIGxpc3RhciB0b2RvcyBvcyBjaGFtYWRvcyBhYmVydG9zIGUgZmluYWxpemFkb3NcbiAgICAgICAgZnVuY3Rpb24gbGlzdGFyVG9kb3NDaGFtYWRvcygpIHtcbiAgICAgICAgICAgIHJlcG8ub2J0ZXJUb2Rvc0NoYW1hZG9zKCkudGhlbihjaGFtYWRvcyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q2hhbWFkb3MoY2hhbWFkb3MpXG4gICAgICAgICAgICAgICAgc2V0VmlzaXZlbCgndGFiZWxhJylcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vPFBhZ2luYWNhbyBsaW1pdGU9ezEyfSB0b3RhbD17MTIwfSBvZmZzZXQ9ezI0fSAvPlxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgXG4gICAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuICBtYXgtaC1mdWxsXG4gICAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXNsYXRlLTQwMCB0by1zbGF0ZS01MDAgdGV4dC1uZXV0cmFsLTUwXG4gICAgYH0+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdGl0dWxvPVwiQ2hhbWFkb3MgYWJlcnRvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Zpc2l2ZWwgPT09ICd0YWJlbGEnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSBmbGV4IGp1c3RpZnktZW5kXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3RhIHJvdGE9XCJzdXBvcnQvZWRpY2FvXCI+RWRpw6fDo28gZG9zIENoYW1hZG9zPC9Sb3RhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdGEgcm90YT1cInN1cG9ydC9yZWxhdG9yaW9cIiBub3ZhQWJhPlJlbGF0w7NyaW9zPC9Sb3RhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdGEgcm90YT1cInN1cG9ydC9lcXVpcGFtZW50b3NcIj5MaXN0YXIgdGlwb3MgZGUgRXF1aXBhbWVudG9zPC9Sb3RhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdGEgcm90YT1cInN1cG9ydC9lcXVpcGVTdXBvcnRcIj5MaXN0YXIgRXF1aXBlIGRlIFN1cG9ydGU8L1JvdGE+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiZWxhIGNoYW1hZG9zPXtjaGFtYWRvc31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb2xlY2FvQ2hhbWFkbyIsIkxheW91dCIsIlRhYmVsYSIsIkNoYW1hZG8iLCJSb3RhIiwiU3Vwb3J0IiwicmVmcmVzaEFsZXJ0YSIsInRlc3RlIiwiQXVkaW9Db250ZXh0Iiwib3NjaWxsYXRvciIsImNyZWF0ZU9zY2lsbGF0b3IiLCJ0eXBlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiY2hhbWFkb3NBYmVydG8iLCJsZW5ndGgiLCJzdGFydCIsInN0b3AiLCJvYnRlckNoYW1hZG9zQWJlcnRvcyIsInJlcG8iLCJ0aGVuIiwiY2hhbWFkb3MiLCJzZXRDaGFtYWRvcyIsInNldFZpc2l2ZWwiLCJvYnRlckNoYW1hZG9zQ29tU3RhdHVzQWJlcnRvIiwiY2hhbWFkb3NBYmVydG9zIiwic2V0Q2hhbWFkb3NBYmVydG8iLCJub3ZvQ2hhbWFkbyIsInNldENoYW1hZG8iLCJ2YXppbyIsImxpc3RhclRvZG9zQ2hhbWFkb3MiLCJvYnRlclRvZG9zQ2hhbWFkb3MiLCJjaGFtYWRvIiwidmlzaXZlbCIsInNldEludGVydmFsIiwic2FsdmFyQ2hhbWFkbyIsImlkIiwiYXR1YWxpemFyQ2hhbWFkbyIsImNyaWFyQ2hhbWFkbyIsImRpdiIsImNsYXNzTmFtZSIsInRpdHVsbyIsInJvdGEiLCJub3ZhQWJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/suport/index.tsx\n");

/***/ })

});