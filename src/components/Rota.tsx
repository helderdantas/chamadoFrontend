
import Router from "next/router";
import Botao from "./Botao";

interface Dados {
    rota?: string
    children: any
    novaAba?: boolean

}

// Componente que criar o modelo de botão
export default function rotas(props: Dados) {

    const rota = (valor: string) => {
        console.log(valor)


        //     if(props.novaAba){
        //         return window.open(`/${valor}`, '_blank');            
        //     }else{
        //         return Router.push(`/${valor}`);
        //     }     

        return Router.push(`/${valor}`);

    }


    return (
        <>
            <Botao className="mb-3 m-2"
                onClick={() => rota(props.rota)}>
                {props.children}
            </Botao>

        </>


    )
}