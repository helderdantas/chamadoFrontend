import { useEffect, useState } from "react";
import Chamado from "../core/chamado/Chamado";
import Botao from "../components/Botao";
import Entrada from "../components/Entrada";
import EntradaListaEquipamento from "../components/EntradaListaEquipamento"
import ColecaoControle from "../backend/db/ColecaoControle";
import Controle from "../core/controle/Controle";
import ControleRepositorio from "../core/controle/ControleRepositorio";



interface FormularioProps {
    chamadoMudou?: (chamado: Chamado) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    // Componete que criar o modelo de formulario
    const repo: ControleRepositorio = new ColecaoControle()
    const [nome, setNome] = useState('')
    const [setor, setSetor] = useState('')
    const [subSetor, setSubSetor] = useState('')
    const [ilha, setIlha] = useState('')
    const [estacaotrabalho, setEstacaotrabalho] = useState('')
    const [equipamentocomdefeito, setEquipamentocomdefeito] = useState('')
    const [equipamentotombo, setEquipamentotombo] = useState('')
    const [equipamentonumeroserie, setEquipamentonumeroserie] = useState('')
    const [descricao, setDescicao] = useState('')
    const [equipeSuport, setEquipeSuport] = useState('')
    const [status, setStatus] = useState('')
    const [observacao, setObservacao] = useState('')
    const [controle, setControle] = useState<Controle>(Controle.vazio())
    const [qrcode, setQrcode] = useState('')
    const aberto = true
    const createdAt = null
    const updatedAt = null
    const id = ''


    useEffect(() => {
        buscarControle()
    }, [qrcode])

    useEffect(() => {
        preencherFormulario()
    }, [equipamentocomdefeito])

    async function buscarControle() {
        if (qrcode) {
            await fetch(`${process.env.NEXT_PUBLIC_URL_2}listarControle/` + qrcode)
                .then(response => response.json())
                .then(data => {
                    setControle(data)
                })
                .catch(error => console.log(error))
                .finally(() => { "aviso de fim de carregamento" })
        }
    }

    function preencherFormulario() {

        if (controle) {
            setSetor(controle.setor)
            setSubSetor(controle.subsetor)
            setIlha(controle.ilha)
            setEstacaotrabalho(controle.baia)

            if (equipamentocomdefeito === "CPU") {
                setEquipamentotombo(controle.cputombo)
                setEquipamentonumeroserie(controle.cpunumeroserie)
            }
            if (equipamentocomdefeito === "MONITOR-1") {
                setEquipamentotombo(controle.monitor1tombo)
                setEquipamentonumeroserie(controle.monitor1numeroserie)
            }

            if (equipamentocomdefeito === "MONITOR-2") {
                setEquipamentotombo(controle.monitor2tombo)
                setEquipamentonumeroserie(controle.monitor2numeroserie)
            }

            if (equipamentocomdefeito === "IMPRESSORA") {
                setEquipamentotombo(controle.impressora)
            }
        }

    }



    function criarChamado() {
        if (controle) {
            props.chamadoMudou(new Chamado(aberto, nome.toUpperCase(), setor, subSetor, ilha, estacaotrabalho, equipamentocomdefeito, equipamentotombo, equipamentonumeroserie, descricao.toUpperCase(), equipeSuport, status, observacao, id, createdAt, updatedAt))
        }

    }

    const atualizarCodigo = (e) => {
        setQrcode(e.target.value)
    }


    return (
        <div>
            <Entrada
                texto="Nome"
                valor={nome.toUpperCase()}
                valorMudou={setNome}
            />


            <div className="flex flex-col">
                <label className="mb-1 mt-3">
                    {'CODIGO'}
                </label>
                <input
                    type={'text'}
                    value={qrcode}
                    readOnly={false}
                    onChange={atualizarCodigo}
                    className={`
                        border border-purple-500 rounded-lg 
                        focus:outline-none bg-white px-4 py-2
                   `}
                />

            </div>
            <EntradaListaEquipamento
                texto="Equipamento Com Defeito"
                valor={equipamentocomdefeito.toUpperCase()}
                valorMudou={setEquipamentocomdefeito}

            />

            <Entrada
                texto="Descrição"
                valor={descricao.toUpperCase()}
                valorMudou={setDescicao}

            />

            <div className="mt-5 flex justify-end">
                <Botao cor="blue" className="mr-2"
                    onClick={criarChamado}>
                    {'Criar'}

                </Botao>
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}

