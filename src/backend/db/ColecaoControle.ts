import Controle from "../../core/controle/Controle";
import ControleRepositorio from "../../core/controle/ControleRepositorio";
const axios = require('axios');



export default class ColecaoControle implements ControleRepositorio {
  
  
    async obterControleControlePorId(id:string): Promise<Controle> {
        try {

            let response = await axios.get(`http://localhost:3030/listarControle/` + id)
            return response.data

        } catch (error) {
            return error

        }
    }


}
