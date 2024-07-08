/** @format */

import React from "react";
import logoEditar from "../img/logoEditar.png";
import logoApagar from "../img/logoApagar.png";
export default function CardPosts({ p, onClickEditar, onClickApagar }) {
  return (
    <li key={p.id} className='post postFocus'>
      <div className='divCorpoPost'>
        <div className='divTxtPost'>
          <p className='txtPost'>{p.post}</p>
        </div>
        <div className='divLogoPost'>
          <a href='#'>
            <img
              className='logoEditar'
              alt='Logo Editar'
              src={logoEditar}
              onClick={onClickEditar}
            />
          </a>
          <img
            className='logoEditar logoApagar'
            alt='Logo Apagar'
            src={logoApagar}
            onClick={onClickApagar}
          />
        </div>
      </div>
      <div className='divHoraPost'>
        <p className='txtHoraPost'>{p.hrDt}</p>
      </div>
    </li>
  );
}
