import Chamado from "../core/chamado/Chamado"
import { IconeEdicao, IconeFinalizado } from "./Icones"

import React from "react"

interface TabelaProps {
    chamados: Chamado[]
    chamadoSelecionado?: (chamado: Chamado) => void
    chamadoFinalizado?: (chamado: Chamado) => void
    dateProp?: React.ReactNode;

}

// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.chamadoSelecionado || props.chamadoFinalizado;

    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return (
            <tr className="flex-wrap">
                <th className="text-left p-1 text-xs">Nome</th>
                <th className="text-left p-1 text-xs">Setor</th>
                <th className="text-left p-1 text-xs">Ilha Nº</th>
                <th className="text-left p-1 text-xs">Est. Trabalho</th>
                <th className="text-left p-1 text-xs">Descrição</th>
                <th className="text-left p-1 text-xs">Suporte</th>
                <th className="text-left p-1 text-xs">Status</th>
                <th className="text-left p-1 text-xs">Data</th>

                {exibirAcoes ? <th className="p-1 text-xs">Ações</th> : false}

            </tr>

        )
    }
    // Renderiza os dados do chamado no tabela e formulario
    function renderizarDados() {
        return props.chamados?.map((chamado, i) => {
            let h = chamado.createdAt
            const dt = new Date(h)
            const data = dt.getUTCDate()+ '/' + (dt.getMonth()+1) + '/' + dt.getUTCFullYear() + ' | ' + (dt.getHours()) + ' : ' + (dt.getMinutes())
            const rowClassName = `flex-wrap ${ i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'} ${chamado.status === 'ABERTO' ? 'bg-red-500' : ''}`;      

            
            return (
                <tr key={chamado.id} className={rowClassName}>
                    <td className="text-left p-1 text-xs">{chamado.nome}</td>
                    <td className="text-left p-1 text-xs">{chamado.subsetor}</td>
                    <td className="text-left p-1 text-xs">{chamado.ilha}</td>
                    <td className="text-left p-1 text-xs">{chamado.estacaotrabalho}</td>
                    <td className="text-left p-1 text-xs">{chamado.descricao}</td>
                    <td className="text-left p-1 text-xs">{chamado.equipesuport}</td>
                    <td className="text-left p-1 text-xs">{chamado.status}</td>
                    <td className="text-left p-1 text-xs">{data}</td>
                    {exibirAcoes ?  <th className="p-1 text-xs">{renderizarAcoes(chamado)}</th>: false}
                </tr>
            )

        })
    }

    // Renderiza os botoes editar e finalizar na tabela de chamados
    function renderizarAcoes(chamado: Chamado) {

        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return (
            <td className="flex justify-center">
                {props.chamadoSelecionado ? (
                    <button onClick={() => props.chamadoSelecionado?.(chamado)} className={`
                      flex justify-center items-center
                      text-green-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                        {IconeEdicao}
                        <>Editar</>
                    </button>
                ) : false
                }

                {props.chamadoFinalizado ? (
                    <button onClick={() => props.chamadoFinalizado?.(chamado)} className={`
                      flex justify-center items-center
                      text-red-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                        {IconeFinalizado}
                        <>Finalizar</>
                    </button>
                ) : false
                }
            </td>
        )
    }

    return (        
        <table className="w-full">
            <thead className={`
                text-gray-200
                bg-gradient-to-r from-gray-500 to-gray-600            
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>

        </table>
    )
}