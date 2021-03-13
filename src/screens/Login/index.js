/** @format */

import React, { useState } from "react";
import api from "../../service/api";
import "./styles.css";

export default function Login({ history }) {
  
  const [usuario, setUsuario] = useState("alex");
  const [senha, setSenha] = useState("123");
  
  const [visibleMsg, setVisibleMsg] = useState(false);
  const [textMsg, setTextMsg] = useState('');
  
  async function validarAcesso(event) {
    event.preventDefault();
    
    setVisibleMsg(false);
    setTextMsg('');    

    if (!usuario || !senha) {
      setVisibleMsg(true);
      setTextMsg('Email ou senha inválido');      
      setSenha('');
    } else {
      await api
        .post('/usuarios/buscar', {
          login: usuario,
          senha: senha
        })
        .then(response => {
          setVisibleMsg(true);
          console.log(response.data);
          
          if (response.data) {
            const { status } = response;            
            const { _id } = response.data;
            if (status === 200) {   
              localStorage.setItem('idLogin', _id);          
              history.push("/principal");
            } else {              
              setTextMsg('Falha ao validar usuário');
            }
          } else {            
            setTextMsg("Usuário não encontrado");
          }
        })
        .catch(error => {          
          setTextMsg('Serviço indisponível');
        });
    }
  }

  return (
    <>
      <div className="header">
        <div className="headerDiv">
        <div className="headerDivNome">
            <p className="headerDivNomeText">RELIEF {visibleMsg ? textMsg : ''}</p>
            </div>
          
          <div className="headerDivAcesso">
              <form  onSubmit={validarAcesso}>
              <input placeholder="usuario" value={usuario} onChange={event => setUsuario(event.target.value)} />
              <input type="password" placeholder="senha" value={senha} onChange={event => setSenha(event.target.value)} />
              <button >Acessar</button>
              </form>
          </div>
        </div>
      </div>
      <div className="section">
        <div class="conteudo">
          <div class="conteudoAmostra">
            <div class="conteudoAmostraDiv">
              <p class="conteudoAmostraDivText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div class="conteudoAmostraDivImg"></div>
            </div>
            <div class="conteudoAmostraDiv">
              <div class="conteudoAmostraDivImg"></div>
              <p class="conteudoAmostraDivText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div class="conteudoAmostraDiv">
              <p class="conteudoAmostraDivText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div class="conteudoAmostraDivImg"></div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}
