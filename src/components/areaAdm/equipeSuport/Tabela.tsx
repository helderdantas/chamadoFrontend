import EquipeSuport from "../../../core/equipeSuport/EquipeSuport"
import {IconeEdicao, IconeFinalizado } from "../../Icones"

interface TabelaProps {
    equipeSuports: EquipeSuport[]
    equipeSuportSelecionado?: (equipeSuport: EquipeSuport) => void
    equipeSuportFinalizado?: (equipeSuport: EquipeSuport) => void
   
}

// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.equipeSuportSelecionado || props.equipeSuportFinalizado

    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3">Código</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Telefone</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}

            </tr>

        )
    }
    // Renderiza os dados do equipeSuport na tabela e formulario
    function renderizarDados() {
        return props.equipeSuports?.map((equipeSuport, i) => {
            return (
                <tr key={equipeSuport.id} className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                    <td className="text-left p-2">{equipeSuport.id}</td>
                    <td className="text-left p-2">{equipeSuport.nome}</td>
                    <td className="text-left p-2">{equipeSuport.telefone}</td>
                    {exibirAcoes ? renderizarAcoes(equipeSuport) : false}
                </tr>
            )

        })
    }

    // Renderiza os botoes editar e finalizar na tabela de equipeSuports
    function renderizarAcoes(equipeSuport: EquipeSuport) {

        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return (
            <td className="flex justify-center">
              {props.equipeSuportSelecionado ? (
                    <button onClick={() => props.equipeSuportSelecionado?.(equipeSuport)} className={`
                      flex justify-center items-center
                      text-green-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                    {IconeEdicao}
                    <>Editar</>
                    </button>
                ) : false
                }

                {props.equipeSuportFinalizado ? (
                    <button onClick={() => props.equipeSuportFinalizado?.(equipeSuport)} className={`
                      flex justify-center items-center
                      text-yellow-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                        {IconeFinalizado}
                        <>Inativar</>
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