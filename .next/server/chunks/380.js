"use strict";
exports.id = 380;
exports.ids = [380];
exports.modules = {

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Formulario)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/core/chamado/Chamado.ts
var Chamado = __webpack_require__(266);
// EXTERNAL MODULE: ./src/components/Botao.tsx
var Botao = __webpack_require__(663);
// EXTERNAL MODULE: ./src/components/Entrada.tsx
var Entrada = __webpack_require__(197);
// EXTERNAL MODULE: ./src/backend/db/ColecaoEquipamemto.ts
var ColecaoEquipamemto = __webpack_require__(633);
;// CONCATENATED MODULE: ./src/hooks/useEquipamentos.tsx


//hooks que busca no banco os equipamento que estão ativos e cria uma lista de equipamentos
const useEquipamentos = ()=>{
    const repo = new ColecaoEquipamemto/* default */.Z();
    const { 0: equipamentos , 1: setEquipamentos  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(carregaEquipamentos, []);
    function carregaEquipamentos() {
        repo.obterEquipamentosAtivos().then((response)=>setEquipamentos(response)
        );
    }
    return equipamentos;
};

;// CONCATENATED MODULE: ./src/components/EntradaListaEquipamento.tsx


function Equipamentos(props) {
    const equipamentos = useEquipamentos();
    function renderiza() {
        return equipamentos?.map((equipamento, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: equipamento.nome,
                children: equipamento.nome
            });
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "mb-1 mt-3",
                children: props.texto
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    onChange: (e)=>props.valorMudou(e.target.value)
                    ,
                    className: `border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "SELECIONE"
                        }),
                        renderiza()
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/backend/db/ColecaoEquipeSuport.ts
var ColecaoEquipeSuport = __webpack_require__(523);
;// CONCATENATED MODULE: ./src/hooks/useEquipeSuport.tsx


//hooks que busca no banco o nome da equipe de suportes que estão ativos e cria uma lista de equipeSuport
const useEquipeSuport = ()=>{
    const repo = new ColecaoEquipeSuport/* default */.Z();
    const { 0: equipeSuports , 1: setEquipeSuports  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(carregaEquipeSuports, []);
    function carregaEquipeSuports() {
        repo.obterEquipeSuportAtivos().then((response)=>setEquipeSuports(response)
        );
    }
    return equipeSuports;
};

;// CONCATENATED MODULE: ./src/components/EntradaListaEquipeSuport.tsx


function EquipeSuport(props) {
    const equipeSuports = useEquipeSuport();
    function renderiza() {
        return equipeSuports?.map((suport, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: suport.nome,
                children: suport.nome
            });
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "mb-1 mt-3",
                children: props.texto
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    onChange: (e)=>props.valorMudou(e.target.value)
                    ,
                    className: `border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "SELECIONE"
                        }),
                        renderiza()
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/EntradaListaStatus.tsx

function Status(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "mb-1 mt-3",
                children: props.texto
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    onChange: (e)=>props.valorMudou(e.target.value)
                    ,
                    className: `border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "ABERTO",
                            children: "ABERTO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "EM ATENDIMENTO",
                            children: "EM ATENDIMENTO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "RESOLVIDO",
                            children: "RESOLVIDO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "NAO RESOLVIDO",
                            children: "N\xc3O RESOLVIDO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "CANCELADO",
                            children: "CANCELADO"
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/backend/db/ColecaoControle.ts
const axios = __webpack_require__(167);
class ColecaoControle {
    async obterControleControlePorId(id) {
        try {
            let response = await axios.get(`http://localhost:3030/listarControle/` + id);
            return response.data;
        } catch (error) {
            return error;
        }
    }
};

;// CONCATENATED MODULE: ./src/core/controle/Controle.ts
class Controle {
    #id;
    #setor;
    #subsetor;
    #ilha;
    #baia;
    #cputombo;
    #cpunumeroserie;
    #monitor1tombo;
    #monitor1numeroserie;
    #monitor2tombo;
    #monitor2numeroserie;
    #impressora;
    #telefone;
    #observacao;
    #createAt;
    #updateAt;
    constructor(setor, subsetor, ilha, baia, cputombo, cpunumeroserie, monitor1tombo, monitor1numeroserie, monitor2tombo, monitor2numeroserie, impressora, telefone, observacao, id = null, createAt, updateAt){
        this.#setor = setor;
        this.#subsetor = subsetor;
        this.#ilha = ilha;
        this.#baia = baia;
        this.#cputombo = cputombo;
        this.#cpunumeroserie = cpunumeroserie;
        this.#monitor1tombo = monitor1tombo;
        this.#monitor1numeroserie = monitor1numeroserie;
        this.#monitor2tombo = monitor2tombo;
        this.#monitor2numeroserie = monitor2numeroserie;
        this.#impressora = impressora;
        this.#telefone = telefone;
        this.#observacao = observacao;
        this.#createAt = createAt;
        this.#updateAt = updateAt;
        this.#id = id;
    }
    static vazio() {
        return new Controle("", "", "", "", "", "", "", "", "", "", "", "", "", null, null, null);
    }
    get id() {
        return this.#id;
    }
    get setor() {
        return this.#setor;
    }
    get subsetor() {
        return this.#subsetor;
    }
    get ilha() {
        return this.#ilha;
    }
    get baia() {
        return this.#baia;
    }
    get cputombo() {
        return this.#cputombo;
    }
    get cpunumeroserie() {
        return this.#cpunumeroserie;
    }
    get monitor1tombo() {
        return this.#monitor1tombo;
    }
    get monitor1numeroserie() {
        return this.#monitor1numeroserie;
    }
    get monitor2tombo() {
        return this.#monitor2tombo;
    }
    get monitor2numeroserie() {
        return this.#monitor2numeroserie;
    }
    get impressora() {
        return this.#impressora;
    }
    get telefone() {
        return this.#telefone;
    }
    get observacao() {
        return this.#observacao;
    }
    get createAt() {
        return this.#createAt;
    }
    get updateAt() {
        return this.#updateAt;
    }
};

;// CONCATENATED MODULE: ./src/components/Formulario.tsx










// Componete que criar o modelo de formulario
function Formulario(props) {
    const repo = new ColecaoControle();
    const id = props.chamado?.id;
    const aberto = props.chamado?.aberto;
    const createAt = props.chamado?.createAt;
    const updateAt = props.chamado?.updateAt;
    const { 0: nome , 1: setNome  } = (0,external_react_.useState)(props.chamado?.nome ?? "");
    const { 0: setor , 1: setSetor  } = (0,external_react_.useState)(props.chamado?.setor ?? "");
    const { 0: subSetor , 1: setSubSetor  } = (0,external_react_.useState)(props.chamado?.subSetor ?? "");
    const { 0: ilha , 1: setIlha  } = (0,external_react_.useState)(props.chamado?.ilha ?? "");
    const { 0: baia , 1: setBaia  } = (0,external_react_.useState)(props.chamado?.baia ?? "");
    const { 0: cpuTombo , 1: setCpuTombo  } = (0,external_react_.useState)(props.chamado?.cputombo ?? "");
    const { 0: cpuNumeroSerie , 1: setCpuNumeroSerie  } = (0,external_react_.useState)(props.chamado?.cpunumeroserie ?? "");
    const { 0: monitor1Tombo , 1: setMonitor1Tombo  } = (0,external_react_.useState)(props.chamado?.monitor1tombo ?? "");
    const { 0: monitor1NumeroSerie , 1: setMonitor1NumeroSerie  } = (0,external_react_.useState)(props.chamado?.monitor1numeroserie ?? "");
    const { 0: monitor2Tombo , 1: setMonitor2Tombo  } = (0,external_react_.useState)(props.chamado?.monitor2tombo ?? "");
    const { 0: monitor2NumeroSerie , 1: setMonitor2NumeroSerie  } = (0,external_react_.useState)(props.chamado?.monitor2numeroserie ?? "");
    const { 0: impressora , 1: setImpressora  } = (0,external_react_.useState)(props.chamado?.impressora ?? "");
    const { 0: telefone , 1: setTelefone  } = (0,external_react_.useState)(props.chamado?.telefone ?? "");
    const { 0: equipamentoComDefeito , 1: setEquipamentoComDefeito  } = (0,external_react_.useState)(props.chamado?.equipamentoComDefeito ?? "");
    const { 0: equipamentoTombo , 1: setEquipamentoTombo  } = (0,external_react_.useState)(props.chamado?.equipamentoTombo ?? "");
    const { 0: descricao , 1: setDescicao  } = (0,external_react_.useState)(props.chamado?.descricao ?? "");
    const { 0: equipeSuport , 1: setEquipeSuport  } = (0,external_react_.useState)(props.chamado?.equipeSuport ?? "");
    const { 0: status , 1: setStatus  } = (0,external_react_.useState)(props.chamado?.status ?? "");
    const { 0: observacao , 1: setObservacao  } = (0,external_react_.useState)(props.chamado?.observacao ?? null);
    const { 0: controle1 , 1: setControle  } = (0,external_react_.useState)(Controle.vazio());
    const { 0: qrcode , 1: setQrcode  } = (0,external_react_.useState)("");
    async function preencherFormularios() {
        try {
            if (qrcode === "") {
                console.log("digite o codigo");
            } else {
                await repo.obterControleControlePorId(qrcode).then((controle)=>{
                    setControle(controle);
                });
                setSetor(controle1.setor);
                setSubSetor(controle1.subsetor);
                setIlha(controle1.ilha);
                setBaia(controle1.baia);
                setCpuTombo(controle1.cputombo);
                setCpuNumeroSerie(controle1.cpunumeroserie);
                setMonitor1Tombo(controle1.monitor1tombo);
                setMonitor1NumeroSerie(controle1.monitor1numeroserie);
                setMonitor2Tombo(controle1.monitor2tombo);
                setMonitor2NumeroSerie(controle1.monitor2numeroserie);
                setImpressora(controle1.impressora);
            //setTelefone(controle.telefone)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                somenteLeitura: true,
                texto: "C\xf3digo",
                valor: id
            }) : false,
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Nome",
                valor: nome.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Nome",
                valor: nome.toUpperCase(),
                valorMudou: setNome
            }),
            !id ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                        texto: "QRCODE",
                        valor: qrcode,
                        valorMudou: setQrcode
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Botao/* default */.Z, {
                        cor: "blue",
                        onClick: preencherFormularios,
                        children: "Buscar"
                    })
                ]
            }) : false,
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Setor",
                valor: setor.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Setor",
                valor: setor.toUpperCase(),
                valorMudou: setSetor
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "subSetor",
                valor: subSetor.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "subSetor",
                valor: subSetor.toUpperCase(),
                valorMudou: setSubSetor
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Ilha N\xba",
                valor: ilha.toUpperCase(),
                valorMudou: setIlha,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Ilha N\xba",
                valor: ilha.toUpperCase(),
                valorMudou: setIlha
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Baia N\xba",
                valor: baia.toUpperCase(),
                valorMudou: setBaia,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Est. Trabalho",
                valor: baia.toUpperCase(),
                valorMudou: setBaia
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "CPU-T",
                valor: cpuTombo.toUpperCase(),
                valorMudou: setCpuTombo,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "CPU-T",
                valor: cpuTombo.toUpperCase(),
                valorMudou: setCpuTombo
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "CPU-NS",
                valor: cpuNumeroSerie.toUpperCase(),
                valorMudou: setCpuNumeroSerie,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "CPU-NS",
                valor: cpuNumeroSerie.toUpperCase(),
                valorMudou: setCpuNumeroSerie
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Monitor1-T",
                valor: monitor1Tombo.toUpperCase(),
                valorMudou: setMonitor1Tombo,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Monitor1-T",
                valor: monitor1Tombo.toUpperCase(),
                valorMudou: setMonitor1Tombo
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Monitor1-NS",
                valor: monitor1NumeroSerie.toUpperCase(),
                valorMudou: setMonitor1NumeroSerie,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Monitor1-NS",
                valor: monitor1NumeroSerie.toUpperCase(),
                valorMudou: setMonitor1NumeroSerie
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Monitor2-T",
                valor: monitor2Tombo.toUpperCase(),
                valorMudou: setMonitor2Tombo,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Monitor2-T",
                valor: monitor2Tombo.toUpperCase(),
                valorMudou: setMonitor2Tombo
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Monitor2-NS",
                valor: monitor2NumeroSerie.toUpperCase(),
                valorMudou: setMonitor2NumeroSerie,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Monitor2-NS",
                valor: monitor2NumeroSerie.toUpperCase(),
                valorMudou: setMonitor2NumeroSerie
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Impressora",
                valor: impressora.toUpperCase(),
                valorMudou: setImpressora,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Impressora",
                valor: impressora.toUpperCase(),
                valorMudou: setImpressora
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Telefone",
                valor: telefone.toUpperCase(),
                valorMudou: setTelefone,
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Telefone",
                valor: telefone.toUpperCase(),
                valorMudou: setTelefone
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Equipamentos, {
                texto: "Equipamento com defeito",
                valor: equipamentoComDefeito.toUpperCase(),
                valorMudou: setEquipamentoComDefeito
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Tombo do Equipamento",
                valor: equipamentoTombo.toUpperCase(),
                valorMudou: setEquipamentoTombo
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Descri\xe7\xe3o",
                valor: descricao.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Descri\xe7\xe3o",
                valor: descricao.toUpperCase(),
                valorMudou: setDescicao
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EquipeSuport, {
                texto: "Nome do suport",
                valor: equipeSuport.toUpperCase(),
                valorMudou: setEquipeSuport
            }),
            id ? /*#__PURE__*/ jsx_runtime_.jsx(Status, {
                texto: "Status",
                valor: status.toUpperCase(),
                valorMudou: setStatus
            }) : false,
            !id ? /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Observacao",
                valor: observacao.toUpperCase(),
                somenteLeitura: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Entrada/* default */.Z, {
                texto: "Observacao",
                valor: observacao.toUpperCase(),
                valorMudou: setObservacao
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-5 flex justify-end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Botao/* default */.Z, {
                        cor: "blue",
                        className: "mr-2",
                        onClick: ()=>props.chamadoMudou?.(new Chamado/* default */.Z(aberto, nome.toUpperCase(), setor.toUpperCase(), subSetor.toUpperCase(), ilha.toUpperCase(), baia.toUpperCase(), cpuNumeroSerie.toUpperCase(), cpuTombo.toUpperCase(), monitor1Tombo.toUpperCase(), monitor1NumeroSerie.toUpperCase(), monitor2Tombo.toUpperCase(), monitor2NumeroSerie.toUpperCase(), impressora.toUpperCase(), telefone.toUpperCase(), equipamentoComDefeito.toUpperCase(), equipamentoTombo.toUpperCase(), descricao.toUpperCase(), equipeSuport.toUpperCase(), status, observacao.toUpperCase(), id, createAt, updateAt))
                        ,
                        children: id ? "Alterar" : "Criar"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Botao/* default */.Z, {
                        cor: "blue",
                        onClick: props.cancelado,
                        children: "Cancelar"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Chamado)
/* harmony export */ });
class Chamado {
    #id;
    #aberto;
    #nome;
    #setor;
    #subSetor;
    #ilha;
    #baia;
    #cputombo;
    #cpunumeroserie;
    #monitor1tombo;
    #monitor1numeroserie;
    #monitor2tombo;
    #monitor2numeroserie;
    #impressora;
    #telefone;
    #equipamentoComDefeito;
    #equipamentoTombo;
    #descricao;
    #equipeSuport;
    #status;
    #observacao;
    #createAt;
    #updateAt;
    constructor(aberto, nome, setor, subSetor, ilha, baia, cputombo, cpunumeroserie, monitor1tombo, monitor1numeroserie, monitor2tombo, monitor2numeroserie, impressora, telefone, equipamentoComDefeito, equipamentoTombo, descricao, equipeSuport, status, observacao, id = null, createAt, updateAt){
        this.#aberto = aberto;
        this.#nome = nome;
        this.#setor = setor;
        this.#subSetor = subSetor;
        this.#ilha = ilha;
        this.#baia = baia;
        this.#cputombo = cputombo;
        this.#cpunumeroserie = cpunumeroserie;
        this.#monitor1tombo = monitor1tombo;
        this.#monitor1numeroserie = monitor1numeroserie;
        this.#monitor2tombo = monitor2tombo;
        this.#monitor2numeroserie = monitor2numeroserie;
        this.#impressora = impressora;
        this.#telefone = telefone;
        this.#equipamentoComDefeito = equipamentoComDefeito;
        this.#equipamentoTombo = equipamentoTombo;
        this.#descricao = descricao;
        this.#equipeSuport = equipeSuport;
        this.#status = status;
        this.#observacao = observacao;
        this.#createAt = createAt;
        this.#updateAt = updateAt;
        this.#id = id;
    }
    static vazio() {
        return new Chamado(null, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", null, null, null);
    }
    get id() {
        return this.#id;
    }
    get aberto() {
        return this.#aberto;
    }
    get nome() {
        return this.#nome;
    }
    get setor() {
        return this.#setor;
    }
    get subSetor() {
        return this.#subSetor;
    }
    get ilha() {
        return this.#ilha;
    }
    get baia() {
        return this.#baia;
    }
    get cputombo() {
        return this.#cputombo;
    }
    get cpunumeroserie() {
        return this.#cpunumeroserie;
    }
    get monitor1tombo() {
        return this.#monitor1tombo;
    }
    get monitor1numeroserie() {
        return this.#monitor1numeroserie;
    }
    get monitor2tombo() {
        return this.#monitor2tombo;
    }
    get monitor2numeroserie() {
        return this.#monitor2numeroserie;
    }
    get impressora() {
        return this.#impressora;
    }
    get telefone() {
        return this.#telefone;
    }
    get equipamentoComDefeito() {
        return this.#equipamentoComDefeito;
    }
    get equipamentoTombo() {
        return this.#equipamentoTombo;
    }
    get descricao() {
        return this.#descricao;
    }
    get equipeSuport() {
        return this.#equipeSuport;
    }
    get status() {
        return this.#status;
    }
    get observacao() {
        return this.#observacao;
    }
    get createAt() {
        return this.#createAt;
    }
    get updateAt() {
        return this.#updateAt;
    }
};


/***/ })

};
;