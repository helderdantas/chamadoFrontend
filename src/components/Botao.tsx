
interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' 
    className?: string
    children: any
    onClick?: () => void 
    disabled?: boolean
}

// Componente que criar o modelo de botão
export default function Botao(props: BotaoProps) {
    const cor = props.cor
    return (
        <button onClick={props.onClick} className={`bg-blue-900
         text-white px-2 py-2 rounded-md  hover:bg-blue-600
         ${props.className} 
        `} disabled={props.disabled}>
            {props.children}
        </button>
    )
}