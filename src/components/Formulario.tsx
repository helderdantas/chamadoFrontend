import { useState } from "react";
import Chamado from "../core/chamado/Chamado";
import Botao from "./Botao";
import Entrada from "./Entrada";
import EntradaListaEquipamento from "./EntradaListaEquipamento"
import EntradaListaSuporte from "./EntradaListaEquipeSuport";
import EntradaListaSetor from "./EntradaListaSetor";
import EntradaListaSubSetor from "./EntradaListaSubSetor";
import EntradaListaStatus from "./EntradaListaStatus";
import ColecaoControle from "../backend/db/ColecaoControle";
import Controle from "../core/controle/Controle";
import ControleRepositorio from "../core/controle/ControleRepositorio";


interface FormularioProps {
    chamado: Chamado
    chamadoMudou?: (chamado: Chamado) => void
    cancelado?: () => void

}


// Componete que criar o modelo de formulario
export default function Formulario(props: FormularioProps) {

    const repo: ControleRepositorio = new ColecaoControle()
    const id = props.chamado?.id
    const aberto = props.chamado?.aberto
    const createAt = props.chamado?.createAt
    const updateAt = props.chamado?.updateAt
    const [nome, setNome] = useState(props.chamado?.nome ?? '')
    const [setor, setSetor] = useState(props.chamado?.setor ?? '')
    const [subSetor, setSubSetor] = useState(props.chamado?.subSetor ?? '')
    const [ilha, setIlha] = useState(props.chamado?.ilha ?? '')
    const [baia, setBaia] = useState(props.chamado?.baia ?? '')
    const [cpuTombo, setCpuTombo] = useState(props.chamado?.cputombo ?? '')
    const [cpuNumeroSerie, setCpuNumeroSerie] = useState(props.chamado?.cpunumeroserie ?? '')
    const [monitor1Tombo, setMonitor1Tombo] = useState(props.chamado?.monitor1tombo ?? '')
    const [monitor1NumeroSerie, setMonitor1NumeroSerie] = useState(props.chamado?.monitor1numeroserie ?? '')
    const [monitor2Tombo, setMonitor2Tombo] = useState(props.chamado?.monitor2tombo ?? '')
    const [monitor2NumeroSerie, setMonitor2NumeroSerie] = useState(props.chamado?.monitor2numeroserie ?? '')
    const [impressora, setImpressora] = useState(props.chamado?.impressora ?? '')
    const [telefone, setTelefone] = useState(props.chamado?.telefone ?? '')
    const [equipamentoComDefeito, setEquipamentoComDefeito] = useState(props.chamado?.equipamentoComDefeito ?? '')
    const [equipamentoTombo, setEquipamentoTombo] = useState(props.chamado?.equipamentoTombo ?? '')
    const [descricao, setDescicao] = useState(props.chamado?.descricao ?? '')
    const [equipeSuport, setEquipeSuport] = useState(props.chamado?.equipeSuport ?? '')
    const [status, setStatus] = useState(props.chamado?.status ?? '')
    const [observacao, setObservacao] = useState(props.chamado?.observacao ?? null)
    const [controle, setControle] = useState<Controle>(Controle.vazio())
    const [qrcode, setQrcode] = useState('')


    async function preencherFormularios() {

        try {
            if (qrcode === '') {
                console.log('digite o codigo')
            } else {
                await repo.obterControleControlePorId(qrcode).then(controle => {
                    setControle(controle)
                })
                setSetor(controle.setor)
                setSubSetor(controle.subsetor)
                setIlha(controle.ilha)
                setBaia(controle.baia)
                setCpuTombo(controle.cputombo)
                setCpuNumeroSerie(controle.cpunumeroserie)
                setMonitor1Tombo(controle.monitor1tombo)
                setMonitor1NumeroSerie(controle.monitor1numeroserie)
                setMonitor2Tombo(controle.monitor2tombo)
                setMonitor2NumeroSerie(controle.monitor2numeroserie)
                setImpressora(controle.impressora)
                //setTelefone(controle.telefone)
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

            {!id ? (
                <div>
                    <Entrada
                        texto="QRCODE"
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
                    texto="Baia Nº"
                    valor={baia.toUpperCase()}
                    valorMudou={setBaia}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Est. Trabalho"
                    valor={baia.toUpperCase()}
                    valorMudou={setBaia}

                />
            )}

            {id ? (
                <Entrada
                    texto="CPU-T"
                    valor={cpuTombo.toUpperCase()}
                    valorMudou={setCpuTombo}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="CPU-T"
                    valor={cpuTombo.toUpperCase()}
                    valorMudou={setCpuTombo}

                />
            )}
            {id ? (
                <Entrada
                    texto="CPU-NS"
                    valor={cpuNumeroSerie.toUpperCase()}
                    valorMudou={setCpuNumeroSerie}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="CPU-NS"
                    valor={cpuNumeroSerie.toUpperCase()}
                    valorMudou={setCpuNumeroSerie}

                />
            )}
            {id ? (
                <Entrada
                    texto="Monitor1-T"
                    valor={monitor1Tombo.toUpperCase()}
                    valorMudou={setMonitor1Tombo}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Monitor1-T"
                    valor={monitor1Tombo.toUpperCase()}
                    valorMudou={setMonitor1Tombo}

                />
            )}
            {id ? (
                <Entrada
                    texto="Monitor1-NS"
                    valor={monitor1NumeroSerie.toUpperCase()}
                    valorMudou={setMonitor1NumeroSerie}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Monitor1-NS"
                    valor={monitor1NumeroSerie.toUpperCase()}
                    valorMudou={setMonitor1NumeroSerie}

                />
            )}
            {id ? (
                <Entrada
                    texto="Monitor2-T"
                    valor={monitor2Tombo.toUpperCase()}
                    valorMudou={setMonitor2Tombo}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Monitor2-T"
                    valor={monitor2Tombo.toUpperCase()}
                    valorMudou={setMonitor2Tombo}

                />
            )}
            {id ? (
                <Entrada
                    texto="Monitor2-NS"
                    valor={monitor2NumeroSerie.toUpperCase()}
                    valorMudou={setMonitor2NumeroSerie}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Monitor2-NS"
                    valor={monitor2NumeroSerie.toUpperCase()}
                    valorMudou={setMonitor2NumeroSerie}

                />
            )}
            {id ? (
                <Entrada
                    texto="Impressora"
                    valor={impressora.toUpperCase()}
                    valorMudou={setImpressora}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Impressora"
                    valor={impressora.toUpperCase()}
                    valorMudou={setImpressora}

                />
            )}
            {id ? (
                <Entrada
                    texto="Telefone"
                    valor={telefone.toUpperCase()}
                    valorMudou={setTelefone}
                    somenteLeitura

                />
            ) : (
                <Entrada
                    texto="Telefone"
                    valor={telefone.toUpperCase()}
                    valorMudou={setTelefone}

                />
            )}

            <EntradaListaEquipamento
                texto="Equipamento com defeito"
                valor={equipamentoComDefeito.toUpperCase()}
                valorMudou={setEquipamentoComDefeito}

            />
            <Entrada
                texto="Tombo do Equipamento"
                valor={equipamentoTombo.toUpperCase()}
                valorMudou={setEquipamentoTombo}

            />
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

            <EntradaListaSuporte
                texto="Nome do suport"
                valor={equipeSuport.toUpperCase()}
                valorMudou={setEquipeSuport}

            />
            {id ? (
                <EntradaListaStatus
                    texto="Status"
                    valor={status.toUpperCase()}
                    valorMudou={setStatus}
                />
            ) : false}
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
                    onClick={() => props.chamadoMudou?.(new Chamado(aberto, nome.toUpperCase(), setor.toUpperCase(), subSetor.toUpperCase(), ilha.toUpperCase(), baia.toUpperCase(), cpuNumeroSerie.toUpperCase(), cpuTombo.toUpperCase(), monitor1Tombo.toUpperCase(), monitor1NumeroSerie.toUpperCase(), monitor2Tombo.toUpperCase(), monitor2NumeroSerie.toUpperCase(), impressora.toUpperCase(), telefone.toUpperCase(), equipamentoComDefeito.toUpperCase(), equipamentoTombo.toUpperCase(), descricao.toUpperCase(), equipeSuport.toUpperCase(), status, observacao.toUpperCase(), id, createAt, updateAt))}>
                    {id ? 'Alterar' : 'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}