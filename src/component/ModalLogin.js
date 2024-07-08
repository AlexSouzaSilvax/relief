/** @format */

import React from "react";

export default function ModalLogin({ modalVisible, setModalVisible, onClick }) {
  return (
    <>
      {modalVisible ? (
        <div className="modal">
          <div>
            <p className="tituloModal">Sessão expirada</p>
            <p className="tituloModal txtInfoModal">ops!</p>

            <div class="divBtnModal">
              <a
                className="button primary txtBtnModal btnModal"
                onClick={onClick}
              >
                Fazer login
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
