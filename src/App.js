/** @format */

import React, { useEffect, useState } from "react";

import Header from "./Header.js";
import Separator from "./Separator.js";
import ListaPosts from "./ListaPosts";

import "./App.css";
import { sleep } from "./service/api.js";

function App() {
  const [txtPost, setTxtPost] = useState();
  const [posts, setPosts] = useState([]);
  /*
  {
      id: 0,
      post:
        "Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo? quase foi, mas, agora vai, perfeito Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo? quase foi, mas, agora vai, perfeito Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo? quase foi, mas, agora vai, perfeito Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo?",
      hrDt: "22:05 • 04/09/2020",
    },
    {
      id: 0,
      post: "Aqui seria um post 1 se fosse",
      hrDt: "22:05 • 04/09/2020",
    },
     */
  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [txtBtn, setTxtBtn] = useState("Go");

  const [txtInfo, setTxtInfo] = useState("");
  const [corTxtInfo, setCorTxtInfo] = useState("");

  useEffect(async () => {
    setLoading(true);
    await sleep(5000);
    getPosts();
    setLoading(false);
  }, []);

  async function getPosts() {
    await fetch("https://alex-api-cobranca.herokuapp.com/usuarioss")
      .then((response) => {
        setTxtInfo(response.status);
        setPosts([
          {
            id: 0,
            post:
              "Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo? quase foi, mas, agora vai, perfeito Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo? quase foi, mas, agora vai, perfeito Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo? quase foi, mas, agora vai, perfeito Aqui seria um post 1 se fosse um texto grande ficaria assim ó ta vendo?",
            hrDt: "22:05 • 04/09/2020",
          },
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function salvarPost(ev) {
    ev.preventDefault();
    setLoadingBtn(true);
    if (txtPost) {
      posts.unshift({ id: 0, post: txtPost, hrDt: "22:05 • 04/09/2020" });
      setTxtPost("");
    }
    setLoadingBtn(false);
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
      <ListaPosts posts={posts} loading={loading} />
    </>
  );
}

export default App;
