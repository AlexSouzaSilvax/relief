/** @format */

import React from "react";
import CardPosts from "./CardPosts";
import CardPostsVazio from "./CardPostsVazio";
import CardLoading from "./CardLoading";

export default function ListaPosts({
  posts,
  loading,
  onClickEditar,
  onClickApagar,
}) {
  const lista = posts.map((p) => {
    return (
      <CardPosts
        key={p._id}
        p={p}
        onClickEditar={() => onClickEditar(p)}
        onClickApagar={() => onClickApagar(p)}
      />
    );
  });

  return (
    <section>
      <div className='container'>
        {loading ? (
          <CardLoading />
        ) : (
          <>
            {posts.length > 0 ? (
              <ul className='posts'>{lista}</ul>
            ) : loading === false && posts.length === 0 ? (
              <CardPostsVazio />
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
