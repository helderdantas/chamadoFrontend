import { useEffect, useState } from "react";
import ColecaoChamado from "../backend/db/ColecaoChamado";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario"
import Layout from "../components/Layout";
import TabelaReduzida from "../components/TabelaReduzida";
import Chamado from "../core/chamado/Chamado";
import ChamadoRepositorio from "../core/chamado/ChamadoRepositorio";

import ColecaoControle from "../backend/db/ColecaoControle";
import Controle from "../core/controle/Controle";
import ControleRepositorio from "../core/controle/ControleRepositorio";


export default function Home() {

  const repoControle: ControleRepositorio = new ColecaoControle()
  const [controle, setControle] = useState<Controle>(Controle.vazio())

  const repo: ChamadoRepositorio = new ColecaoChamado()
  const [chamado, setChamado] = useState<Chamado>(Chamado.vazio())
  const [chamados, setChamados] = useState<Chamado[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [valor, setValor] = useState('')





  useEffect(obterChamadosAbertos, [])

  // Metodo que exibe na tabela todos os chamados abertos
  function obterChamadosAbertos() {
    repo.obterChamadosAbertos().then(chamados => {
      if (chamado) {
        setChamados(chamados)
        setVisivel('tabela')
      }
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

    // Suponha que a URL seja: http://seusite.com/?parametro=valor
    // Obtém a URL atual
    const urlParams = new URLSearchParams(window.location.search);
    // Obtém o valor do parâmetro 'parametro'
    const parametro = urlParams.get('parametro');
    // Obtém o elemento do campo de entrada por seu ID
    //const campoInput = document.getElementById('seuInput');
    if (parametro) {
      setValor(parametro)
      repoControle.obterControleControlePorId(parametro).then(controle => {
        setControle(controle)
      })
    
    }

    
    setChamado(Chamado.vazio())
    setVisivel('form')

  }

  return (
    <>

      <div className={`
    flex justify-center items-center min-h-screen  max-h-full
    bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
    `}>
        <Layout titulo="Chamados">

          {visivel === 'tabela' ? (
            <>
              <div className="flex justify-end">
                <Botao cor="blue" className="mb-1"
                  onClick={novoChamado}>
                  Novo chamado
                </Botao>
              </div>

              <TabelaReduzida chamados={chamados}/>
            </>
          ) : (

            <Formulario
              chamado={chamado}
              chamadoMudou={salvarChamado}
              cancelado={() => setVisivel('tabela')}
              controle={controle}
              parametro={valor}

            />
          )}
        </Layout>

      </div>
    </>
  )
}
