/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/** @format */

import React, { useState, useEffect } from "react";
import api, { sleep } from "../../service/api";
import "./styles.css";
import gifLoadingBtn from "../../img/loadingBtn.gif";
import um from "../../img/principal/1.jpg";
import dois from "../../img/principal/2.jpg";
import tres from "../../img/principal/3.jpg";
import quatro from "../../img/principal/4.jpg";
import logoGithub from "../../img/github.png";

export default function Login({ history }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [visibleMsg, setVisibleMsg] = useState(false);
  const [textMsg, setTextMsg] = useState("");

  const [load, setLoad] = useState(false);

  async function validarAcesso(event) {
    event.preventDefault();
    if (!usuario || !senha) {
      setVisibleMsg(true);
      setTextMsg("Email ou senha inválido");
      setSenha("");
    } else {
      setLoad(true);
     /*
      await api
        .post("/usuarios/buscar", {
          login: usuario,
          senha: senha,
        })
        .then((response) => {
          setLoad(false);
          setVisibleMsg(true);
          if (response.data) {
            const { status } = response;
            const { _id } = response.data;
            if (status === 200) {
              localStorage.setItem("idLogin", _id);
              history.push("/principal");
            } else {
              setTextMsg("Falha ao validar usuário");
            }
          } else {
            setTextMsg("Usuário não encontrado");
          }
        })
        .catch((error) => {
          setLoad(false);
          setVisibleMsg(true);
          setTextMsg("Serviço indisponível");
        });
    
        */
      }
    localStorage.setItem("idLogin", "1");
    history.push("/principal");
    limpaInput();
    fechaMsg();
  }

  async function criarConta(event) {
    event.preventDefault();
    setLoad(true);
    await sleep(2000);
    setLoad(false);
  }

  async function fechaMsg() {
    await sleep(2000);
    setVisibleMsg(false);
    setTextMsg("");
  }

  function limpaInput() {
    setUsuario("");
    setSenha("");
  }

  return (
    <>
      <div className="header">
        <div className="headerDiv">
          <div className="headerDivNome">
            <p className="headerDivNomeText">RELIEF</p>
          </div>
          <div className="headerDivAcesso">
            <form onSubmit={validarAcesso}>
              <input
                className="headerDivAcessoInput"
                placeholder="usuario"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
              />
              <input
                className="headerDivAcessoInput"
                type="password"
                placeholder="senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
              <button className="headerDivAcessoBtn">Entrar</button>
              <button
                className="headerDivAcessoBtn headerDivCadastroBtn"
                onClick={criarConta}
              >
                Criar Conta
              </button>
            </form>
          </div>
        </div>
        <div className="headerDivMsg">
          {load ? (
            <div className="divGifLoadingBtn">
              <img
                className="gifLoadingBtn"
                alt="loading"
                src={gifLoadingBtn}
              />
            </div>
          ) : visibleMsg ? (
            <div className="headerDivMsgCard">
              <p className="headerDivMsgCardText">{textMsg}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="section">
        <div className="conteudo">
          <div className="conteudoAmostra">
            <div className="conteudoAmostraDiv">
              <img
                className="conteudoAmostraDivImg"
                alt="loading"
                src={quatro}
              />
              <p className="conteudoAmostraDivText">
                Ciclo Mental - Cheio de ideias na cabeça, doido para coloca-las
                em prática.
              </p>
            </div>
            <div className="conteudoAmostraDiv">
              <img className="conteudoAmostraDivImg" alt="loading" src={um} />
              <p className="conteudoAmostraDivText">
                Ciclo Emocional - Está feliz, e quase sempre não está no seu
                melhor dia.
              </p>
            </div>
          </div>
          <div className="conteudoAmostra">
            <div className="conteudoAmostraDiv">
              <img className="conteudoAmostraDivImg" alt="loading" src={tres} />
              <p className="conteudoAmostraDivText">
                Ciclo Emocional - Está triste, mesmo sem motivos, você só não
                está feliz.
              </p>
            </div>
            <div className="conteudoAmostraDiv">
              <img className="conteudoAmostraDivImg" alt="loading" src={dois} />
              <p className="conteudoAmostraDivText">
                Crise trabalho/estudo - Acontece quando você se sente incapaz de
                fazer ou resolver algo.
              </p>
            </div>
          </div>

          <div className="conteudoAmostra">
            <div className="conteudoAmostraDiv">
              <img className="conteudoAmostraDivImg" alt="loading" src={tres} />
              <p className="conteudoAmostraDivText">
                Ciclo Emocional - Está triste, mesmo sem motivos, você só não
                está feliz.
              </p>
            </div>
            <div className="conteudoAmostraDiv">
              <img className="conteudoAmostraDivImg" alt="loading" src={dois} />
              <p className="conteudoAmostraDivText">
                Crise trabalho/estudo - Acontece quando você se sente incapaz de
                fazer ou resolver algo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p className="footerText">Desenvolvido por</p>
        <a className="footerLinkLinkedin" target="_blank" href="https://linkedin.com/in/alexsouzasilvax">
          Alex Silva
        </a>
        <a target="_blank" href="https://github.com/AlexSouzaSilvax/relief">
          <img src={logoGithub} width={60} height={60} />
        </a>
      </div>
    </>
  );
}
