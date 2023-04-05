"use strict";
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 3389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColecaoSubSetor)
/* harmony export */ });
const axios = __webpack_require__(2167);
class ColecaoSubSetor {
    async criarSubSetor(subSetor) {
        try {
            let body = {
                ativo: true,
                nome: subSetor.nome,
                nomeSetor: subSetor.nomeSetor,
                telefone: subSetor.telefone
            };
            var response = await axios.post(`${"http://10.26.0.73:3032/"}criarSubSetor/`, body);
            console.log(response);
            var data = response.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async finalizarSubSetor(subSetor) {
        try {
            if (subSetor.id) {
                let config = {
                    method: "put",
                    url: `${"http://10.26.0.73:3032/"}updateCampoAtivoSubSetor/` + subSetor.id,
                    headers: {}
                };
                await axios(config);
                console.log("finalizado com sucesso");
            }
        } catch (error) {
            console.log(`Erro ao finalizar subSetor ${error}`);
        }
    }
    async atualizarTelefoneSubSetor(subSetor) {
        try {
            try {
                let config = {
                    method: "put",
                    url: `${"http://10.26.0.73:3032/"}updateTelefoneSubSetor/` + subSetor.id,
                    data: {
                        telefone: subSetor.telefone
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
    async obterSubSetoresAtivos() {
        try {
            let response = await axios.get(`${"http://10.26.0.73:3032/"}listarSubSetoresAtivos`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async obterTodosSubSetores() {
        try {
            let response = await axios.get(`${"http://10.26.0.73:3032/"}listarTodosSubSetores`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
};


/***/ })

};
;