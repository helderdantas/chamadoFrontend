"use strict";
exports.id = 523;
exports.ids = [523];
exports.modules = {

/***/ 523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColecaoEquipeSuport)
/* harmony export */ });
const axios = __webpack_require__(167);
class ColecaoEquipeSuport {
    atualizarTelefone(EquipeSuport) {
        throw new Error("Method not implemented.");
    }
    async criarEquipeSuport(equipeSuport) {
        try {
            let body = {
                ativo: true,
                nome: equipeSuport.nome,
                telefone: equipeSuport.telefone
            };
            console.log("entrei");
            var response = await axios.post(`${"http://localhost:3032/"}criarEquipeSuport/`, body);
            console.log(response);
            var data = response.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async finalizarEquipeSuport(equipeSuport) {
        try {
            if (equipeSuport.id) {
                let config = {
                    method: "put",
                    url: `${"http://localhost:3032/"}updateCampoAtivoEquipeSuport/` + equipeSuport.id,
                    headers: {}
                };
                await axios(config);
                console.log("finalizado com sucesso");
            }
        } catch (error) {
            console.log(`Erro ao finalizar equipeSuport ${error}`);
        }
    }
    async atualizarTelefoneEquipeSuport(equipeSuport) {
        try {
            try {
                let config = {
                    method: "put",
                    url: `${"http://localhost:3032/"}updateTelefoneEquipeSuport/` + equipeSuport.id,
                    data: {
                        telefone: equipeSuport.telefone
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
    async obterEquipeSuportAtivos() {
        try {
            let response = await axios.get(`${"http://localhost:3032/"}listarEquipeSuportAtivos`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async obterTodosEquipeSuport() {
        try {
            let response = await axios.get(`${"http://localhost:3032/"}listarTodosEquipeSuport`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
};


/***/ })

};
;