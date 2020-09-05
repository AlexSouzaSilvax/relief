/** @format */

import React from "react";

export default function CardPosts({ p }) {
  return (
    <li key={p.id} className='post'>
      <p className='txtPost'>{p.post}</p>
      <div className='divHoraPost'>
        <p className='txtHoraPost'>{p.hrDt}</p>
      </div>
    </li>
  );
}
