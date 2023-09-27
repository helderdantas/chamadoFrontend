import React, { useState, useEffect } from "react";
import ColecaoChamado from "../../backend/db/ColecaoChamado";
import Layout from "../../components/Layout";
import Tabela from "../../components/TabelaSuport";
import Chamado from "../../core/chamado/Chamado";
import ChamadoRepositorio from "../../core/chamado/ChamadoRepositorio";
import Rota from "../../components/Rota";
import { Howl } from "howler";

export default function Suport() {
  const repo: ChamadoRepositorio = new ColecaoChamado();
  const [chamado, setChamado] = useState<Chamado>(Chamado.vazio());
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [chamadosAberto, setChamadosAberto] = useState<Chamado[]>([]);
  const [visivel, setVisivel] = useState('tabela');

  // Carregue o som quando o componente for montado e limpe-o quando desmontado
  useEffect(() => {
    const sound = new Howl({
      src: ["/Alertabomba.wav"], // Substitua pelo caminho correto para o seu arquivo de som
    });

    return () => {
      sound.unload();
    };
  }, []);

  // Verifique a condição e toque o som quando necessário
  useEffect(() => {
    const sound = new Howl({
      src: ["/Alertabomba.wav"], // Substitua pelo caminho correto para o seu arquivo de som
    });

    if (chamadosAberto.length !== 0 || chamado.status === 'Aberto') {
      sound.play();

      // Defina um temporizador para parar o som após 1 segundo
      const timeoutId = setTimeout(() => {
        sound.stop();
      }, 2000); 

      // Certifique-se de limpar o temporizador quando o componente é desmontado
      return () => {
        clearTimeout(timeoutId);
        sound.stop();
      };
    } else {
      sound.stop();
    }
  }, [chamadosAberto]);

  // Metodo que exibe na tabela todos os chamados abertos
  function obterChamadosAbertos() {
    repo.obterChamadosAbertos().then(chamados => {
      setChamados(chamados);
      setVisivel('tabela');
    });

    repo.obterChamadosComStatusAberto().then(chamadosAbertos => {
      setChamadosAberto(chamadosAbertos);
    });
  }

  // Metodo para criar ou atualizar chamado
  async function salvarChamado(chamado: Chamado) {
    if (chamado.id) {
      await repo.atualizarChamado(chamado); // atualiza chamado existente
    } else {
      await repo.criarChamado(chamado); // cria um novo chamado
    }

    obterChamadosAbertos();
  }

  // Metodo que abre um formulario vazio para criar um novo chamado
  function novoChamado() {
    setChamado(Chamado.vazio());
    setVisivel('form');
  }

  // Metodo para listar todos os chamados abertos e finalizados
  function listarTodosChamados() {
    repo.obterTodosChamados().then(chamados => {
      setChamados(chamados);
      setVisivel('tabela');
    });
  }

  // Carregue os chamados abertos quando o componente for montado
  useEffect(() => {
    obterChamadosAbertos();
  }, []);

  // Use um intervalo para atualizar os chamados abertos a cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(obterChamadosAbertos, 5000);

    // Certifique-se de limpar o intervalo quando o componente é desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className={`
        flex justify-center items-center min-h-screen max-h-full
        bg-gradient-to-r from-slate-400 to-slate-500 text-neutral-50
      `}>
        <Layout titulo="Chamados abertos">
          {visivel === 'tabela' ? (
            <>
              <div className="mt-1 flex justify-end">
                <Rota rota="suport/edicao">Edição dos Chamados</Rota>
                <Rota rota="suport/relatorio" novaAba>Relatórios</Rota>
                <Rota rota="suport/equipamentos">Listar tipos de Equipamentos</Rota>
                <Rota rota="suport/equipeSuport">Listar Equipe de Suporte</Rota>
              </div>
              <Tabela chamados={chamados} />
            </>
          ) : false}
        </Layout>
      </div>
    </>
  );
}

