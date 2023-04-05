import SubSetor from "../../../core/subSetor/SubSetor"
import {IconeEdicao, IconeFinalizado } from "../../Icones"

interface TabelaProps {
    subSetors: SubSetor[]
    subSetorSelecionado?: (subSetor: SubSetor) => void
    subSetorFinalizado?: (subSetor: SubSetor) => void
   
}

// Componente que criar o modelo de tabela
export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.subSetorSelecionado || props.subSetorFinalizado

    // Renderiza o cabelcaho nas pagina onde ele é chamado
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-3">Código</th>
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Setor</th>
                <th className="text-left p-3">Telefone</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}

            </tr>

        )
    }
    // Renderiza os dados do subSetor na tabela e formulario
    function renderizarDados() {
        return props.subSetors?.map((subSetor, i) => {
            return (
                <tr key={subSetor.id} className={`${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}`}>
                    <td className="text-left p-2">{subSetor.id}</td>
                    <td className="text-left p-2">{subSetor.nome}</td>
                    <td className="text-left p-2">{subSetor.nomeSetor}</td>
                    <td className="text-left p-2">{subSetor.telefone}</td>
                    {exibirAcoes ? renderizarAcoes(subSetor) : false}
                </tr>
            )

        })
    }

    // Renderiza os botoes editar e finalizar na tabela de subSetors
    function renderizarAcoes(subSetor: SubSetor) {

        // <Link href="/suport/editar">editar</Link> - substituir no lugar do botao
        return (
            <td className="flex justify-center">
              {props.subSetorSelecionado ? (
                    <button onClick={() => props.subSetorSelecionado?.(subSetor)} className={`
                      flex justify-center items-center
                      text-green-600 rounded-full p-2 m-1
                      hover:bg-purple-50
                  `}>
                    {IconeEdicao}
                    <>Editar</>
                    </button>
                ) : false
                }

                {props.subSetorFinalizado ? (
                    <button onClick={() => props.subSetorFinalizado?.(subSetor)} className={`
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