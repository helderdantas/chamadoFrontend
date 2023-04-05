import EquipeSuport from "./EquipeSuport";

export default interface EquipeSuportRepositorio{
    criarEquipeSuport(EquipeSuport: EquipeSuport): Promise<EquipeSuport>
    finalizarEquipeSuport(EquipeSuport: EquipeSuport): Promise<void>
    atualizarTelefoneEquipeSuport(EquipeSuport:EquipeSuport): Promise<void>
    obterEquipeSuportAtivos(): Promise<EquipeSuport[]>
    obterTodosEquipeSuport(): Promise<EquipeSuport[]>
}