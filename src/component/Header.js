/** @format */

import React from "react";
import gifLoadingBtn from "../img/loadingBtn.gif";

export default function Headers({
  loadingBtn,
  txtPost,
  setTxtPost,
  salvarPost,
  txtBtn,
  txtInfo,
  corTxtInfo,
}) {
  return (
    <header>
      <div className='sign-in'>
        <div className='formPost'>
          <textarea
            wrap='hard'
            cols='30'
            rows='5'
            className='inputPost'
            placeholder='O que te encomoda hoje ?'
            value={txtPost}
            onChange={(event) => setTxtPost(event.target.value)}
          ></textarea>
          <div className='btnFormPost'>
            <div className='btnFormPost2'>
              <p style={{ color: `${corTxtInfo}` }}>{txtInfo}</p>
            </div>
            <div className='btnFormPost3'>
              {loadingBtn ? (
                <div className='divGifLoadingBtn'>
                  <img
                    className='gifLoadingBtn'
                    alt='loading button save'
                    src={gifLoadingBtn}
                  />
                </div>
              ) : (
                <button className='button primary' onClick={salvarPost}>
                  {txtBtn}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
