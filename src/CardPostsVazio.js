/** @format */

import React from "react";
import logoCaixaVazia from "./img/logoCaixaVazia.png";

export default function CardPostsVazio({ }) {
  return (
    <li key={0} className='post postVazio'>
      <div className='divTxtPostVazio'></div>
      <div className='divTxtPostVazio divTxtPostVazio2'></div>

      <div className='divLogoCaixaVazia'>
        <img
          className='logoCaixaVazia'
          alt='logo caixa vazia'
          src={logoCaixaVazia}
        />
        <p className="txtLogoCaixaVazia">Nenhum post por aqui</p>
      </div>

      <div className='divHoraPostVazio'>
        <div className='txtHoraPostVazio'></div>
      </div>
    </li>
  );
}
