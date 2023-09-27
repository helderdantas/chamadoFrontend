import Titulo from "./Titulo";
<<<<<<< HEAD
import Image from "next/image";
import logo from '../../src/public/logotipoSeec.png';
=======
import Image from 'next/image';
import logo from '../../public/logotipoSeec.png';
>>>>>>> guiVersao


// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
    return src
}

function image(props) {
    return <Image {...props} loader={customLoader} />
}

interface LayoutProps {
    titulo: string
    children: any
}

// Componente que criar o layout da aplicacao
export default function Layout(props: LayoutProps) {
    return (
        //configuracao do tamanho do layout w-8/9
        <div className={`
            flex flex-col w-8/9
            bg-white text-gray-800 rounded-md
            
        `}>
<<<<<<< HEAD
            <div className='columns-1 flex items-center p-3 gap-5'>
                <Image src={logo} alt="Logo" width={100} height={100} loader={customLoader} />
                <div>
                    <h1 className="text-3xl font-bold">Secretaria de Educação, do Esporte e Lazer do Rio Grande do Norte</h1>
                    <h2 className="text-2xl font-bold">Grupo de Processamento e Dados - GPD</h2>
                </div>
            </div>
            
=======
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
>>>>>>> guiVersao
            <Titulo>{props.titulo}</Titulo>

            <div className="p-3">               
                {props.children}
            </div>
        </div>
    )
}