/** @format */

import React, { useEffect, useState } from "react";

import Header from "../../component/Header.js";
import Separator from "../../component/Separator.js";
import ListaPosts from "../../component/ListaPosts";

import "./styles.css";
import api, { sleep, getDtHrAtual, pegaIndexLista } from "../../service/api.js";
import Modal from "../../component/Modal.js";
import ModalLogin from "../../component/ModalLogin.js";

function App({ history }) {
  const [txtPost, setTxtPost] = useState();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [txtBtn, setTxtBtn] = useState("Go");

  const [txtInfo, setTxtInfo] = useState("");
  const [corTxtInfo, setCorTxtInfo] = useState("");

  const [postSelecionado, setPostSelecinado] = useState({ _id: null });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalLoginVisible, setModalLoginVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("idLogin")) {
      setModalLoginVisible(!modalLoginVisible);
    } else {
      setLoading(true);
      getPosts();
      setLoading(false);
    }
  }, []);

  function onClickModalLogin() {
    history.push("/");
  }

  async function getPosts() {
    setLoading(true);
    await api
      .post("/post", {
        usuario: localStorage.getItem("idLogin"),
      })
      .then((response) => {       
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
  }

  async function salvarPost(ev) {
    ev.preventDefault();
    setLoadingBtn(true);
    if (txtPost) {
      if (postSelecionado._id) {
        await api
          .post("/post/atualizar", {
            _id: postSelecionado._id,
            post: txtPost,
            hrDt: getDtHrAtual(),
            usuario: localStorage.getItem("idLogin"),
          })
          .then((response) => {
            msgInfo("Alterado com sucesso!");
          })
          .catch((error) => {
            console.error(error);
            msgInfo("Não foi possivel alterar este post");
          });
      } else {
        await api
          .post("/post/criar", {
            post: txtPost,
            hrDt: getDtHrAtual(),
            usuario: localStorage.getItem("idLogin"),
          })
          .then((response) => {
            msgInfo("Salvo com sucesso!");
          })
          .catch((error) => {
            console.error(error);
            msgInfo("Não foi possivel salvar este post");
          });
      }
    }
    setLoadingBtn(false);
    setTxtBtn("Go");
    getPosts();
  }

  function onClickEditar(p) {
    setTxtBtn("Editar");
    setPostSelecinado(p);
    setTxtPost(p.post);
  }

 async function onClickApagar() {
    setModalVisible(!modalVisible);
    setLoading(true);

    await api.post("/post/apagar", {
      _id: postSelecionado._id,
    })
    .then((response) => {
      msgInfo("Apagado com sucesso");
    })
    .catch((error) => {
      console.error(error);
      msgInfo("Não foi possivel apagar este post");
    });
    setLoading(false);
    setPostSelecinado({ id: null });
    setTxtPost("");
    setTxtBtn("Go");
    getPosts();
  }

  async function msgInfo(txt) {
    setTxtInfo(txt);
    await sleep(1500);
    setTxtInfo("");
  }

  function sair(ev) {
    ev.preventDefault();
    localStorage.removeItem("idLogin");
    history.push("/");
  }

  return (
    <>
      <div className="options">
        <div className="sair" onClick={sair}>
          <p className="sairText">exit</p>
        </div>
      </div>
      <Header
        loadingBtn={loadingBtn}
        txtPost={txtPost}
        setTxtPost={setTxtPost}
        salvarPost={salvarPost}
        txtBtn={txtBtn}
        txtInfo={txtInfo}
        corTxtInfo={corTxtInfo}
      />
      <Separator />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
        onClickApagar={onClickApagar}
      />
      <ListaPosts
        posts={posts}
        loading={loading}
        onClickEditar={(p) => onClickEditar(p)}
        onClickApagar={(p) => {
          setPostSelecinado(p);
          setModalVisible(!modalVisible);
        }}
      />
      <ModalLogin
        modalVisible={modalLoginVisible}
        setModalVisible={() => setModalLoginVisible(!modalLoginVisible)}
        onClick={onClickModalLogin}
      />
    </>
  );
}

export default App;
