/** @format */

import React from "react";
import CardPosts from "./CardPosts";
import CardPostsVazio from "./CardPostsVazio";
import CardLoading from "./CardLoading";

export default function ListaPosts({ posts, loading }) {
  const lista = posts.map((p) => {
    return <CardPosts key={p.id} p={p} />;
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
            ) : posts.length < 0 ? (
              <CardPostsVazio />
            ) : (
              <CardLoading />
            )}
          </>
        )}
      </div>
    </section>
  );
}
