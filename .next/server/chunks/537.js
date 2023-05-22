"use strict";
exports.id = 537;
exports.ids = [537];
exports.modules = {

/***/ 9215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rotas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Botao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5663);



// Componente que criar o modelo de botão
function rotas(props) {
    const rota = (valor)=>{
        return next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`/${valor}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Botao__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: "mb-3 m-2",
            onClick: ()=>rota(props.rota)
            ,
            children: props.children
        })
    });
};


/***/ }),

/***/ 469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tabela)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7376);


// Componente que criar o modelo de tabela
function Tabela(props) {
    const exibirAcoes = props.chamadoSelecionado || props.chamadoFinalizado;
    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            className: "flex-wrap",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Nome"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Setor"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Subsetor"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Ilha N\xba"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Baia N\xba"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "CPU-T"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "CPU-NS"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Monitor1-T"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Monitor1-NS"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Monitor2-T"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Monitor2-NS"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Impressora"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Telefone"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Equipamento com Defeito"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Tombo do Equipamento"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Descricao"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Atribuido para"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Status"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "text-left p-1 text-xs",
                    children: "Observa\xe7\xe3o"
                }),
                exibirAcoes ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: "p-1 text-xs",
                    children: "A\xe7\xf5es"
                }) : false
            ]
        });
    }
    // Renderiza os dados do chamado no tabela e formulario
    function renderizarDados() {
        return props.chamados?.map((chamado, i)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                className: `flex-wrap ${i % 2 === 0 ? "bg-gray-300" : "bg-gray-400"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.nome
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.setor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.subSetor
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.ilha
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.baia
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.cputombo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.cpunumeroserie
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.monitor1tombo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.monitor1numeroserie
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.monitor2tombo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.monitor2numeroserie
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.impressora
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.telefone
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.equipamentoComDefeito
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.equipamentoTombo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.descricao
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.equipeSuport
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.status
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                        className: "text-left p-1 text-xs",
                        children: chamado.observacao
                    }),
                    exibirAcoes ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: "p-1 text-xs",
                        children: renderizarAcoes(chamado)
                    }) : false
                ]
            }, chamado.id);
        });
    }
    // Renderiza os botoes editar e finalizar na tabela de chamados
    function renderizarAcoes(chamado) {
        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "flex justify-center",
            children: [
                props.chamadoSelecionado ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: ()=>props.chamadoSelecionado?.(chamado)
                    ,
                    className: `
                      flex justify-center items-center
                      text-green-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `,
                    children: [
                        _Icones__WEBPACK_IMPORTED_MODULE_1__/* .IconeEdicao */ .K,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: "Editar"
                        })
                    ]
                }) : false,
                props.chamadoFinalizado ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: ()=>props.chamadoFinalizado?.(chamado)
                    ,
                    className: `
                      flex justify-center items-center
                      text-red-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `,
                    children: [
                        _Icones__WEBPACK_IMPORTED_MODULE_1__/* .IconeFinalizado */ .z,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: "Finalizar"
                        })
                    ]
                }) : false
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                className: `
                text-gray-200
                bg-gradient-to-r from-gray-500 to-gray-600
            
            `,
                children: renderizarCabecalho()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                children: renderizarDados()
            })
        ]
    });
};


/***/ })

};
;