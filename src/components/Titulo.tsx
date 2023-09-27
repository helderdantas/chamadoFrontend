import logo from '../../public/logotipoSeec.png'
import Image from 'next/image'
// Componente que criar o modelo de titulo
export default function Titulo(props){

    return(
        <> 
            <hr className="border-2 border-gray-600"/>       
            <h1 className="py-2 text-1xl text-center">
                    {props.children}
            </h1>
            <hr className="border-2 border-gray-600"/>
        </>
    )
}