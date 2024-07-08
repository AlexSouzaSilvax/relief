/** @format */

import React from "react";
import gifLoadingBtn from "../img/loadingBtn.gif";

export default function CardLoading({}) {
  return (
    <li key={0} className='post postVazio postLoading'>
      <div className='divTxtPostVazio'></div>
      <div className='divTxtPostVazio divTxtPostVazio2'></div>
      <div className='divLogoCaixaVazia divLogoLoading'>
        <img
          className='gifLoadingBtn'
          alt='loading button save'
          src={gifLoadingBtn}
        />
      </div>

      <div className='divHoraPostVazio'>
        <div className='txtHoraPostVazio'></div>
      </div>
    </li>
  );
}
