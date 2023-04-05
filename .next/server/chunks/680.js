"use strict";
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 4680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColecaoSetor)
/* harmony export */ });
const axios = __webpack_require__(2167);
class ColecaoSetor {
    atualizarTelefone(setor) {
        throw new Error("Method not implemented.");
    }
    async criarSetor(setor) {
        try {
            let body = {
                ativo: true,
                nome: setor.nome,
                telefone: setor.telefone
            };
            console.log("entrei");
            var response = await axios.post(`${"http://10.26.0.73:3032/"}criarSetor/`, body);
            console.log(response);
            var data = response.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async finalizarSetor(setor) {
        try {
            if (setor.id) {
                let config = {
                    method: "put",
                    url: `${"http://10.26.0.73:3032/"}updateCampoAtivoSetor/` + setor.id,
                    headers: {}
                };
                await axios(config);
                console.log("finalizado com sucesso");
            }
        } catch (error) {
            console.log(`Erro ao finalizar setor ${error}`);
        }
    }
    async atualizarTelefoneSetor(setor) {
        try {
            try {
                let config = {
                    method: "put",
                    url: `${"http://10.26.0.73:3032/"}updateTelefoneSetor/` + setor.id,
                    data: {
                        telefone: setor.telefone
                    }
                };
                const response = await axios(config);
                console.log("telefone atualizado com sucesso");
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    }
    async obterSetoresAtivos() {
        try {
            let response = await axios.get(`${"http://10.26.0.73:3032/"}listarSetoresAtivos`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async obterTodosSetores() {
        try {
            let response = await axios.get(`${"http://10.26.0.73:3032/"}listarTodosSetores`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
};


/***/ })

};
;