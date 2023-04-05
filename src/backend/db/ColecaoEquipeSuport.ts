import EquipeSuport from "../../core/equipeSuport/EquipeSuport";
import EquipeSuportRepositorio from "../../core/equipeSuport/EquipeSuportRepositorio";
const axios = require('axios');


export default class ColecaoEquipeSuport implements EquipeSuportRepositorio {
    atualizarTelefone(EquipeSuport: EquipeSuport): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async criarEquipeSuport(equipeSuport: EquipeSuport): Promise<EquipeSuport> {
        try {

            let body = {
                ativo: true,
                nome: equipeSuport.nome,
                telefone: equipeSuport.telefone,
            };
            console.log('entrei')
            var response = await axios.post(`${process.env.NEXT_PUBLIC_URL}criarEquipeSuport/`, body);
            console.log(response)
            var data = response.data
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async finalizarEquipeSuport(equipeSuport: EquipeSuport): Promise<void> {
        try {
            if (equipeSuport.id) {

                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}updateCampoAtivoEquipeSuport/` + equipeSuport.id,
                    headers: {}
                };
                await axios(config)
                console.log('finalizado com sucesso')
            }

        } catch (error) {
            console.log(`Erro ao finalizar equipeSuport ${error}`)
        }

    }


    async atualizarTelefoneEquipeSuport(equipeSuport: EquipeSuport): Promise<void> {
        try {
            try {
                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}updateTelefoneEquipeSuport/` + equipeSuport.id,
                    data: {
                        telefone: equipeSuport.telefone
                    }
                };
                const response = await axios(config);
                console.log('telefone atualizado com sucesso')

            } catch (error) {
                console.log(error)
            }


        } catch (error) {
            console.log(error)
        }
    }



    async obterEquipeSuportAtivos(): Promise<EquipeSuport[]> {
        try {

            let response = await axios.get(`${process.env.NEXT_PUBLIC_URL}listarEquipeSuportAtivos`)
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterTodosEquipeSuport(): Promise<EquipeSuport[]> {
        try {

            let response = await axios.get(`${process.env.NEXT_PUBLIC_URL}listarTodosEquipeSuport`)
            return response.data

        } catch (error) {
            return error

        }
    }
}
