import { useEffect, useState } from "react";
import ColecaoChamado from "../../backend/db/ColecaoChamado";
import Botao from "../../components/Botao";
import Formulario from "../../components/Formulario"
import Layout from "../../components/Layout";
import Tabela from "../../components/Tabela";
import Chamado from "../../core/chamado/Chamado";
import ChamadoRepositorio from "../../core/chamado/ChamadoRepositorio";


export default function Suport() {


    function play(valor: number) {
        let context = new AudioContext(),
            oscillator = context.createOscillator();
        oscillator.type = 'sine';
        oscillator.connect(context.destination);
        if (valor === 0) {
            oscillator.start()
        }
        if (valor === 1) {
            oscillator.stop()
        }
    }

    const repo: ChamadoRepositorio = new ColecaoChamado()
    const [chamado, setChamado] = useState<Chamado>(Chamado.vazio())
    const [chamados, setChamados] = useState<Chamado[]>([])
    const [chamadosAberto, setChamadosAberto] = useState<Chamado[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


    useEffect(obterChamadosAbertos, [])
    useEffect(() => {
        setInterval(obterChamadosAbertos, 30000);
    }, [])

    function listItems(items, pageActual, limitItems) {
        let result = [];
        return result;
    };


    // Metodo que exibe na tabela todos os chamados abertos
    function obterChamadosAbertos() {
        repo.obterChamadosAbertos().then(chamados => {
            setChamados(chamados)
            setVisivel('tabela')
        });

        repo.obterChamadosComStatusAberto().then(chamadosAbertos => {
            setChamadosAberto(chamadosAbertos)

        })

    }

    // Metodo para criar ou atualizar chamado
    async function salvarChamado(chamado: Chamado) {
        if (chamado.id) {
            await repo.atualizarChamado(chamado) // atualza chamado existente
        } else {
            await repo.criarChamado(chamado) // cria um novo chamado
        }

        obterChamadosAbertos()
    }

    // Metodo que abre um formulario vazio para criar um novo chamado
    function novoChamado() {
        setChamado(Chamado.vazio())
        setVisivel('form')

    }

    // Metodo para listar todos os chamados abertos e finalizados
    function listarTodosChamados() {
        repo.obterTodosChamados().then(chamados => {
            setChamados(chamados)
            setVisivel('tabela')
        })

    }

    //<Paginacao limite={12} total={120} offset={24} />

    return (
        <>
            <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
                <Layout titulo="Chamados abertos">
                    {visivel === 'tabela' ? (
                        <>
                            <div className="mt-1 flex justify-end">

                                <Botao cor="blue" className="mb-3 m-2">
                                    <a href="/suport/edicao">Edição dos Chamados</a>
                                </Botao>
                                <Botao cor="blue" className="mb-3 m-2">
                                    <a href="/suport/relatorio" target="_blank">Relatórios</a>
                                </Botao>
                                <Botao cor="blue" className="mb-3 m-2">
                                    <a href="/adm/setores" >Listar Setores</a>
                                </Botao>
                                <Botao cor="blue" className="mb-3 m-2">
                                    <a href="/adm/subSetores">Listar SubSetores</a>
                                </Botao>
                                <Botao cor="blue" className="mb-3 m-2">
                                    <a href="/adm/equipamentos">Listar tipos de Equipamentos</a>
                                </Botao>
                                <Botao cor="blue" className="mb-3 m-2">
                                    <a href="/adm/equipeSuport">Listar Equipe de Suporte</a>
                                </Botao>


                            </div>

                            <Tabela chamados={chamados}

                            />
                        </>
                    ) : (

                        <Formulario
                            chamado={chamado}
                            chamadoMudou={salvarChamado}
                            cancelado={() => setVisivel('tabela')}

                        />
                    )}
                </Layout>
            </div>

        </>
    )
}
