/** @format */

import React from "react";

export default function Modal({
  modalVisible,
  setModalVisible,
  onClickApagar,
}) {
  return (
    <>
      {modalVisible ? (
        <div className='modal'>
          <div>
            <p className='tituloModal'>Excluir Post ?</p>
            <p className='tituloModal txtInfoModal'>
              Esta ação não poderá ser desfeita.
            </p>

            <div class='divBtnModal'>
              <a
                className='button secondary btnModal'
                onClick={setModalVisible}
              >
                Agora não
              </a>
              <a
                className='button primary txtBtnModal btnModal'
                onClick={onClickApagar}
              >
                Sim, vai logo
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
