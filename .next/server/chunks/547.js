"use strict";
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColecaoChamado)
/* harmony export */ });
const axios = __webpack_require__(167);
class ColecaoChamado {
    async criarChamado(chamado) {
        try {
            let body = {
                aberto: true,
                nome: chamado.nome,
                setor: chamado.setor,
                subSetor: chamado.subSetor,
                ilha: chamado.ilha,
                baia: chamado.baia,
                cputombo: chamado.cputombo,
                cpunumeroserie: chamado.cpunumeroserie,
                monitor1tombo: chamado.monitor1tombo,
                monitor1numeroserie: chamado.monitor1numeroserie,
                monitor2tombo: chamado.monitor2tombo,
                monitor2numeroserie: chamado.monitor2numeroserie,
                impressora: chamado.impressora,
                telefone: chamado.telefone,
                equipamentoComDefeito: chamado.equipamentoComDefeito,
                equipamentoTombo: chamado.equipamentoTombo,
                descricao: chamado.descricao,
                equipeSuport: chamado.equipeSuport,
                status: "ABERTO",
                observacao: chamado.observacao
            };
            var response = await axios.post(`${"http://localhost:3032/"}criarChamado/`, body);
            console.log(response);
            var data = response.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async atualizarChamado(chamado) {
        try {
            try {
                let config = {
                    method: "put",
                    url: `${"http://localhost:3032/"}updateChamado/` + chamado.id,
                    data: {
                        subSetor: chamado.subSetor,
                        equipamentoComDefeito: chamado.equipamentoComDefeito,
                        equipeSuport: chamado.equipeSuport,
                        status: chamado.status,
                        ilha: chamado.ilha,
                        observacao: chamado.observacao
                    }
                };
                const response = await axios(config);
                console.log("chamado atualizado com sucesso");
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    }
    async finalizarChamado(chamado) {
        try {
            if (chamado.id) {
                let config = {
                    method: "put",
                    url: `${"http://localhost:3032/"}updateCampoAbertoChamado/` + chamado.id,
                    headers: {}
                };
                await axios(config);
                console.log("finalizado com sucesso");
            }
        } catch (error) {
            console.log(`Erro ao finalizar chamado ${error}`);
        }
    }
    async obterChamadosAbertos() {
        try {
            let response = await axios.get(`${"http://localhost:3032/"}listarChamadosAbertos`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async obterChamadosComStatusAberto() {
        try {
            let response = await axios.get(`${"http://localhost:3032/"}listarChamadosComStatusAberto`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async obterTodosChamados() {
        console.log("entrei na rota chamado");
        try {
            let response = await axios.get(`${"http://localhost:3032/"}listarTodosChamados`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async chamadosPorSetor(nome, dataInicial, dataFinal) {
        try {
            console.log("entrei na rota seto");
            let body = {
                setor: nome,
                dataInicial: dataInicial,
                dataFinal: dataFinal
            };
            const response = await axios.post(`${"http://localhost:3032/"}chamadosPorSetor`, body);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async chamadosPorSuport(nome, dataInicial, dataFinal) {
        try {
            let body = {
                equipeSuport: nome,
                dataInicial: dataInicial,
                dataFinal: dataFinal
            };
            const response = await axios.post(`${"http://localhost:3032/"}chamadosPorSuport`, body);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async chamadosPorTipoEquipamento(nome, dataInicial, dataFinal) {
        try {
            let body = {
                equipamentoComDefeito: nome,
                dataInicial: dataInicial,
                dataFinal: dataFinal
            };
            const response = await axios.post(`${"http://localhost:3032/"}chamadosPorTipoEquipamento`, body);
            return response.data;
        } catch (error) {
            return error;
        }
    }
};


/***/ })

};
;