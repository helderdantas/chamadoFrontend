import { useEquipamentos } from "../hooks/useEquipamentos";
interface EntradaProps {
    id?: string
    tipo?: 'text'
    texto: string
    valor: any
    valorMudou?: (valor: any) => void

}
export default function Equipamentos(props: EntradaProps) {
    const equipamentos = useEquipamentos()
    function renderiza() {
        if (equipamentos) {
            return equipamentos?.map((equipamento, i) => {
                return (
                    <option key={i} value={equipamento.nome} >{equipamento.nome}</option>
                )
            })

        }

    }
    return (
        <div>
            <label className="mb-1 mt-3">
                {props.texto}
            </label>
            <div className="flex flex-col">
                <select
                    onChange={e => props.valorMudou(e.target.value)}
                    className={`border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3`}>
                    {!props.id ? (<option value={''} >SELECIONE</option>) :
                        (<option value={props.valor} >{props.valor}</option>)
                    }
                    {renderiza()}
                </select>
            </div>


        </div>
    )

}