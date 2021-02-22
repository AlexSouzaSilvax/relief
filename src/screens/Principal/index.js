/** @format */

import React, { useEffect, useState } from "react";

import Header from "../../component/Header.js";
import Separator from "../../component/Separator.js";
import ListaPosts from "../../component/ListaPosts";

import "./styles.css";
import { sleep, getDtHrAtual, pegaIndexLista } from "../../service/api.js";
import Modal from "../../component/Modal.js";

function App() {
  const [txtPost, setTxtPost] = useState();
  const [posts, setPosts] = useState([]);
  /*
  {
      id: 0,
      post: "0000",
      hrDt: "00:00 • 00/00/0000",
    },
     */
  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [txtBtn, setTxtBtn] = useState("Go");

  const [txtInfo, setTxtInfo] = useState("");
  const [corTxtInfo, setCorTxtInfo] = useState("");

  const [postSelecionado, setPostSelecinado] = useState({ id: null });

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function _sleep() {
      await sleep(500); //5000
    }
    setLoading(true);
    _sleep();
    getPosts();
    setLoading(false);
  }, []);

  async function getPosts() {
    await fetch("https://alex-api-cobranca.herokuapp.com/usuarios")
      .then((response) => {
        
        setTxtInfo(response.status);
        setPosts([
          {
            id: posts.length,
            post:
              "Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo? quase foi, mas, agora vai, perfeito Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo? quase foi, mas, agora vai, perfeito Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo? quase foi, mas, agora vai, perfeito Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo?",
            hrDt: "22:05 • 04/09/2020",
          },
        ]);
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
      posts.splice(
        pegaIndexLista(posts, postSelecionado.id), // a partir desse index
        postSelecionado.id != null ? 1 : 0, /// 1 = remove 1 item ( no caso para um item existente), 0 = nao remove nenhum item
        {
          id: posts.length,
          post: txtPost,
          hrDt: getDtHrAtual(),
        } // obj a ser adicionado
      );
      setTxtPost("");
      msgInfo(
        postSelecionado.id != null
          ? "Alterado com sucesso"
          : "Salvo com sucesso"
      );
    }
    setLoadingBtn(false);
    setPostSelecinado({ id: null });
    setTxtBtn("Go");
  }

  function onClickEditar(p) {
    setTxtBtn("Salvar");
    setPostSelecinado(p);
    setTxtPost(p.post);
  }

  function onClickApagar() {
    setModalVisible(!modalVisible);
    posts.splice(pegaIndexLista(posts, postSelecionado.id), 1);
    setLoading(false);
    msgInfo("Apagado com sucesso");
    setPostSelecinado({ id: null });
    setTxtPost("");
    setTxtBtn("Go");
  }

  async function msgInfo(txt) {
    setTxtInfo(txt);
    await sleep(1500);
    setTxtInfo("");
  }

  return (
    <>
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
    </>
  );
}

export default App;
