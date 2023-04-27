import Controle from "./Controle";

export default interface ControleRepositorio{
    obterControleControlePorId(id: string): Promise<Controle>
    
}