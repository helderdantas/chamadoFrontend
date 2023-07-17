import { useEffect, useState } from "react";
import Chamado from "../core/chamado/Chamado";
import Botao from "./Botao";
import Entrada from "./Entrada";
import EntradaListaEquipamento from "./EntradaListaEquipamento"
import EntradaListaSuporte from "./EntradaListaEquipeSuport";
import EntradaListaStatus from "./EntradaListaStatus";
import ColecaoControle from "../backend/db/ColecaoControle";
import Controle from "../core/controle/Controle";
import ControleRepositorio from "../core/controle/ControleRepositorio";


interface FormularioProps {
    chamado: Chamado
    chamadoMudou?: (chamado: Chamado) => void
    cancelado?: () => void
    controle: Controle
    parametro: string

}

export default function Formulario(props: FormularioProps) {


    // Componete que criar o modelo de formulario
    const repo: ControleRepositorio = new ColecaoControle()
    const id = props.chamado?.id
    const aberto = props.chamado?.aberto
    const createAt = props.chamado?.createAt
    const updateAt = props.chamado?.updateAt
    const [nome, setNome] = useState(props.chamado?.nome ?? '')
    const [setor, setSetor] = useState(props.chamado?.setor ?? '')
    const [subSetor, setSubSetor] = useState(props.chamado?.subsetor ?? '')
    const [ilha, setIlha] = useState(props.chamado?.ilha ?? '')
    const [estacaotrabalho, setEstacaotrabalho] = useState(props.chamado?.estacaotrabalho ?? '')
    const [equipamentocomdefeito, setEquipamentocomdefeito] = useState(props.chamado?.equipamentocomdefeito ?? '')
    const [equipamentotombo, setEquipamentotombo] = useState(props.chamado?.equipamentotombo ?? '')
    const [equipamentonumeroserie, setEquipamentonumeroserie] = useState(props.chamado?.equipamentonumeroserie ?? '')
    const [descricao, setDescicao] = useState(props.chamado?.descricao ?? '')
    const [equipeSuport, setEquipeSuport] = useState(props.chamado?.equipesuport ?? '')
    const [status, setStatus] = useState(props.chamado?.status ?? '')
    const [observacao, setObservacao] = useState(props.chamado?.observacao ?? null)
    const [controle, setControle] = useState<Controle>(Controle.vazio())
    const [qrcode, setQrcode] = useState('')


    // console.log(props.controle.valueOf.length)
    if (props.controle) {

        useEffect(() => {
            setSetor(props.controle.setor)
            setSubSetor(props.controle.subsetor)
            setIlha(props.controle.ilha)
            setEstacaotrabalho(props.controle.baia)
            setEquipamentocomdefeito(props.controle.cputombo)
            setEquipamentotombo(props.controle.cpunumeroserie)
            setEquipamentonumeroserie(props.controle.monitor1tombo)
        }, [props.controle])
    }

    //console.log(props.controle)
    async function preencherFormularios() {

        try {
            if (qrcode === '') {

            } else {

                await repo.obterControleControlePorId(qrcode).then(controle => {
                    setControle(controle)
                })
                setSetor(props.controle.setor)
                setSubSetor(props.controle.subsetor)
                setIlha(props.controle.ilha)
                setEstacaotrabalho(props.controle.baia)
                setEquipamentocomdefeito(props.controle.cputombo)
                setEquipamentotombo(props.controle.cpunumeroserie)
                setEquipamentonumeroserie(props.controle.monitor1tombo)

            }
        } catch (error) {
            console.log(error)


        }


    }


    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                />
            ) : false}

            {id ? (
                <Entrada
                    texto="Nome"
                    valor={nome.toUpperCase()}
                    somenteLeitura
                />

            ) : (
                <Entrada
                    texto="Nome"
                    valor={nome.toUpperCase()}
                    valorMudou={setNome}
                />

            )}

            {!props.parametro && !id ? (
                <div>
                    <Entrada
                        texto="CÓDIGO"
                        valor={qrcode}
                        valorMudou={setQrcode}
                    />
                    <Botao cor="blue" onClick={preencherFormularios}>
                        Buscar
                    </Botao>
                </div>

            ) : false}


            {id ? (
                <Entrada
                    texto="Setor"
                    valor={setor.toUpperCase()}
                    somenteLeitura
                />

            ) : (
                <Entrada
                    texto="Setor"
                    valor={setor.toUpperCase()}
                    valorMudou={setSetor}

                />
            )}

            {id ? (
                <Entrada
                    texto="subSetor"
                    valor={subSetor.toUpperCase()}
                    somenteLeitura
                />
            ) : (
                <Entrada
                    texto="subSetor"
                    valor={subSetor.toUpperCase()}
                    valorMudou={setSubSetor}

                />
            )}

            {id ? (
                <Entrada
                    texto="Ilha Nº"
                    valor={ilha.toUpperCase()}
                    valorMudou={setIlha}
                    somenteLeitura


                />
            ) : (
                <Entrada
                    texto="Ilha Nº"
                    valor={ilha.toUpperCase()}
                    valorMudou={setIlha}

                />
            )}

            {id ? (
                <Entrada
                    texto="Est. Trabalho"
                    valor={estacaotrabalho.toUpperCase()}
                    valorMudou={setEstacaotrabalho}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Est. Trabalho"
                    valor={estacaotrabalho.toUpperCase()}
                    valorMudou={setEstacaotrabalho}

                />
            )}

            {id ? (
                <EntradaListaEquipamento
                    id={id}
                    texto="Equipamento Com Defeito"
                    valor={equipamentocomdefeito.toUpperCase()}
                    valorMudou={setEquipamentocomdefeito}


                />
            ) : (
                <EntradaListaEquipamento
                    texto="Equipamento Com Defeito"
                    valor={equipamentocomdefeito.toUpperCase()}
                    valorMudou={setEquipamentocomdefeito}

                />
            )}
            {id ? (
                <Entrada
                    texto="Tombo"
                    valor={equipamentotombo.toUpperCase()}
                    valorMudou={setEquipamentotombo}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Tombo"
                    valor={equipamentotombo.toUpperCase()}
                    valorMudou={setEquipamentotombo}

                />
            )}
            {id ? (
                <Entrada
                    texto="Número de Série"
                    valor={equipamentonumeroserie.toUpperCase()}
                    valorMudou={setEquipamentonumeroserie}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Número de Série"
                    valor={equipamentonumeroserie.toUpperCase()}
                    valorMudou={setEquipamentonumeroserie}

                />
            )}
            {id ? (
                <Entrada
                    texto="Descrição"
                    valor={descricao.toUpperCase()}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Descrição"
                    valor={descricao.toUpperCase()}
                    valorMudou={setDescicao}

                />
            )}
            {id ? (<EntradaListaSuporte
                id={id}
                texto="Nome do suport"
                valor={equipeSuport.toUpperCase()}
                valorMudou={setEquipeSuport}

            />) : (<EntradaListaSuporte

                texto="Nome do suport"
                valor={equipeSuport.toUpperCase()}
                valorMudou={setEquipeSuport} />)
            }

            {id ? (
                <EntradaListaStatus
                    id={id}
                    texto="Status"
                    valor={status.toUpperCase()}
                    valorMudou={setStatus}
                />
            ) : (
                <EntradaListaStatus
                    texto="Status"
                    valor={status.toUpperCase()}
                    valorMudou={setStatus}
                />
            )
            }
            {!id ? (
                <Entrada
                    texto="Observacao"
                    valor={observacao.toUpperCase()}
                    somenteLeitura

                />

            ) : (
                <Entrada
                    texto="Observacao"
                    valor={observacao.toUpperCase()}
                    valorMudou={setObservacao}

                />

            )}

            <div className="mt-5 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.chamadoMudou?.(new Chamado(aberto, nome.toUpperCase(), setor.toUpperCase(), subSetor.toUpperCase(), ilha.toUpperCase(), estacaotrabalho.toUpperCase(), equipamentocomdefeito.toUpperCase(), equipamentotombo.toUpperCase(), equipamentonumeroserie.toUpperCase(), descricao.toUpperCase(), equipeSuport.toUpperCase(), status, observacao.toUpperCase(), id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}