import SubSetor from "../../core/subSetor/SubSetor";
import SubSetorRepositorio from "../../core/subSetor/SubSetorRepositorio";
const axios = require('axios');


export default class ColecaoSubSetor implements SubSetorRepositorio {
   
    async criarSubSetor(subSetor: SubSetor): Promise<SubSetor> {
        try {

            let body = {
                ativo: true,
                nome: subSetor.nome,
                nomeSetor:subSetor.nomeSetor,
                telefone:subSetor.telefone,
            };
            var response = await axios.post(`${process.env.NEXT_PUBLIC_URL}criarSubSetor/`, body);
            console.log(response)
            var data = response.data
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async finalizarSubSetor(subSetor: SubSetor): Promise<void> {
        try {
            if (subSetor.id) {

                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}updateCampoAtivoSubSetor/` + subSetor.id,
                    headers: {}
                };
                await axios(config)
                console.log('finalizado com sucesso')
            }

        } catch (error) {
            console.log(`Erro ao finalizar subSetor ${error}`)
        }

    }


    async atualizarTelefoneSubSetor(subSetor: SubSetor): Promise<void> {
        try {
            try {
                let config = {
                    method: 'put',
                    url: `${process.env.NEXT_PUBLIC_URL}updateTelefoneSubSetor/` + subSetor.id,
                    data: {
                        telefone: subSetor.telefone
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


    async obterSubSetoresAtivos(): Promise<SubSetor[]> {
        try {

            let response = await axios.get(`${process.env.NEXT_PUBLIC_URL}listarSubSetoresAtivos`)
            return response.data

        } catch (error) {
            return error

        }
    }

    async obterTodosSubSetores(): Promise<SubSetor[]> {
        try {

            let response = await axios.get(`${process.env.NEXT_PUBLIC_URL}listarTodosSubSetores`)
            return response.data

        } catch (error) {
            return error

        }
    }
}
