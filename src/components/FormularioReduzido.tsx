import { useEffect, useState } from "react";
import Chamado from "../core/chamado/Chamado";
import Botao from "./Botao";
import Entrada from "./Entrada";
import EntradaListaEquipamento from "./EntradaListaEquipamento"
import ColecaoControle from "../backend/db/ColecaoControle";
import Controle from "../core/controle/Controle";
import ControleRepositorio from "../core/controle/ControleRepositorio";



interface FormularioProps {
    chamadoMudou?: (chamado: Chamado) => void
    cancelado?: () => void
    controle?: Controle
    parametro?: string

}

export default function Formulario(props: FormularioProps) {

    // Componete que criar o modelo de formulario
    const repo: ControleRepositorio = new ColecaoControle()
    const [nome, setNome] = useState('')
    const [equipamentocomdefeito, setEquipamentocomdefeito] = useState('')
    const [equipamentotombo, setEquipamentotombo] = useState('')
    const [equipamentonumeroserie, setEquipamentonumeroserie] = useState('')
    const [descricao, setDescicao] = useState('')
    const [equipeSuport, setEquipeSuport] = useState('')
    const [status, setStatus] = useState('')
    const [observacao, setObservacao] = useState('')
    const [controle, setControle] = useState<Controle>(Controle.vazio())
    const [codigo, setCodigo] = useState(null)
    const aberto = true
    const createAt = null
    const updateAt = null
    const id = ''

    useEffect(() => {
        buscarControle()
        preencherFormulario()
    }, [codigo, props.controle])

    useEffect(() => {
        preencherFormulario()
    }, [])

    async function buscarControle() {
        if (codigo) {
            await fetch(`${process.env.NEXT_PUBLIC_URL_2}listarControle/` + codigo)
                .then(response => response.json())
                .then(data => {
                    setControle(data)
                })
                .catch(error => console.log(error))
                .finally(() => { "aviso de fim de carregamento" })
        } else {
            setControle(props.controle)
        }
    }

    function preencherFormulario() {
        if (controle) {
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

        if(props.controle.setor){
            if (equipamentocomdefeito === "CPU") {
                setEquipamentotombo(props.controle.cputombo)
                setEquipamentonumeroserie(props.controle.cpunumeroserie)
            }
            if (equipamentocomdefeito === "MONITOR-1") {
                setEquipamentotombo(props.controle.monitor1tombo)
                setEquipamentonumeroserie(props.controle.monitor1numeroserie)
            }

            if (equipamentocomdefeito === "MONITOR-2") {
                setEquipamentotombo(props.controle.monitor2tombo)
                setEquipamentonumeroserie(props.controle.monitor2numeroserie)
            }

            if (equipamentocomdefeito === "IMPRESSORA") {
                setEquipamentotombo(props.controle.impressora)
            }
        }
        
    }

    function criarChamado() {
        preencherFormulario()
        if (controle) {
            props.chamadoMudou(new Chamado(aberto, nome.toUpperCase(), controle.setor, controle.subsetor, controle.ilha, controle.baia, equipamentocomdefeito, equipamentotombo, equipamentonumeroserie, descricao.toUpperCase(), equipeSuport, status, observacao, id, createAt, updateAt))
        }

    }

    const atualizarCodigo = (e) => {
        setCodigo(e.target.value)
    }


    return (
        <div>
            <Entrada
                texto="Nome"
                valor={nome.toUpperCase()}
                valorMudou={setNome}
            />

            {!props.parametro && !id ? (
                <div className="flex flex-col">
                    <label className="mb-1 mt-3">
                        {'CODIGO'}
                    </label>
                    <input
                        type={'number'}
                        value={codigo}
                        readOnly={false}
                        onChange={atualizarCodigo}
                        className={`
                        border border-purple-500 rounded-lg 
                        focus:outline-none bg-white px-4 py-2
                   `}
                    />

                </div>
            ) : false}

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

                {(nome !== "" && codigo > 0) ? (
                <Botao cor="blue" className="mr-2"
                    onClick={criarChamado}>
                    {'Criar'}

                </Botao>
                ): false}
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>

        </div>
    )
}

