import Titulo from "./Titulo";
import Image from 'next/image';
import logo from '../../public/logotipoSeec.png';


// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

function image (props) {
  return <Image {...props} loader={customLoader} />
}

interface LayoutProps{
    titulo:string
    children:any
}

// Componente que criar o layout da aplicacao
export default function Layout(props:LayoutProps) {
    return (
        //configuracao do tamanho do layout w-8/9
        <div className={`
            flex flex-col w-99
            bg-gray-200
            text-gray-800 
            rounded-md
        `}>
            <div className='flex flex-row items-center px-6 py-6'>
                {image(logo)}
                <div className='flex flex-col px-3'>
                    <h1 className="text-3xl text-center">
                        Secretaria de Educação, do Esporte e Lazer do Estado do Rio Grande do Norte
                    </h1>
                    <h2 className="text-2xl text-center">
                        Grupo de Processamento de Dados - GPD
                    </h2>
                </div>
            </div>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-2">
                {props.children}
            </div>

        </div>
    )

}