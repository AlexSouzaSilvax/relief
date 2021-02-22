/** @format */

import React, { useState } from "react";

import "./styles.css";

export default function Login({ history }) {
  const [usuario, setUsuario] = useState();

  function validarAcesso(event) {
    event.preventDefault();
    history.push("/principal");
  }

  return (
    <>
      <div className="header"></div>
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
          <div class="conteudoAcesso">
            <div class="conteudoAcessoDiv">
              <form class="login-form" onSubmit={validarAcesso}>
                <input
                  type="usuario"
                  placeholder="usuario"
                  value={usuario}
                  onChange={(event) => setUsuario(event.target.value)}
                />
                <button>Acessar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}
