import logo from '../public/logotipoSeec.png'
import Image from 'next/image'
// Componente que criar o modelo de titulo
export default function Titulo(props){

    return(
        <div className="text-center">
            <hr className="border-2 border-gray-600" />  
            <h1 className="px-10 py-2 text-xl">
                    {props.children}
            </h1>
            <hr className="border-2 border-gray-600"/>
        </div>
    )
}