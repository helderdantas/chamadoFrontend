import { useEffect, useState } from "react";
import ColecaoChamado from "../../backend/db/ColecaoChamado";
import Botao from "../../components/Botao";
import Formulario from "../../components/Formulario"
import Layout from "../../components/Layout";
import Tabela from "../../components/TabelaSuport";
import Chamado from "../../core/chamado/Chamado";
import ChamadoRepositorio from "../../core/chamado/ChamadoRepositorio";
import Rota from "../../components/Rota";
import FormularioSuport from "../../components/FormularioSuport";


export default function Suport() {


    const repo: ChamadoRepositorio = new ColecaoChamado()

    const [chamado, setChamado] = useState<Chamado>(Chamado.vazio())
    const [chamados, setChamados] = useState<Chamado[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const [flag, setFlag] = useState<true | false>(true)

    /*
     useEffect(() => {
      setInterval(obterChamadosAbertos, 1000);}, [])
  
   */
    useEffect(obterChamadosAbertos, [])


    // Metodo que exibe na tabela todos os chamados abertos
    function obterChamadosAbertos() {
        repo.obterChamadosAbertos().then(chamados => {
            setChamados(chamados)
            setVisivel('tabela')

        })
    }

    // Metodo que exibe no formulario os dados do chamado selecionado
    function chamadoSelecionado(chamado: Chamado) {
        setChamado(chamado)
        setVisivel('form')
    }
    // Metodo para finalizar chamado
    async function chamadoFinalizado(chamado: Chamado) {
        await repo.finalizarChamado(chamado)
        obterChamadosAbertos()
    }
    // Metodo para criar ou atualizar chamado
    async function salvarChamado(chamado: Chamado) {
        if (chamado.id) {
            await repo.atualizarChamado(chamado) // atualza chamado existente
        } else {
            await repo.criarChamado(chamado) // cria um novo chamado
        }
        obterChamadosAbertos()
        setFlag(true)
    }

    // Metodo que abre um formulario vazio para criar um novo chamado
    function novoChamado() {
        setChamado(Chamado.vazio())
        setFlag(false)

    }

    return (
        <>
            <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
                <Layout titulo="Chamados abertos">

                    {flag ? (visivel === 'tabela' ? (
                        <>
                            <div className="mt-1 flex justify-end">

                                <Botao cor="blue" className="mb-1 m-2"
                                    onClick={novoChamado}>
                                    Novo chamado
                                </Botao>
                                <Rota rota="suport">Suport</Rota>



                            </div>
                            <div className="flex justify-center">
                                <Tabela chamados={chamados}
                                    chamadoSelecionado={chamadoSelecionado}
                                    chamadoFinalizado={chamadoFinalizado}
                                />
                            </div>
                        </>
                    ) : (

                        <Formulario
                            chamado={chamado}
                            chamadoMudou={salvarChamado}
                            cancelado={() => setVisivel('tabela')}
                            controle={undefined}
                            parametro={""}
                        />
                    )) : (<FormularioSuport
                        chamadoMudou={salvarChamado}
                        cancelado={() => {setVisivel('tabela'), setFlag(true)}}
                      
                    />)}


                </Layout>


            </div>

        </>
    )
}
