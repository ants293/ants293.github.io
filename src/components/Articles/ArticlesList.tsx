import React, { ReactElement, useState } from "react";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { IArticle } from "../../interfaces/articles/article";
import { GET_ARTICLES_LIST } from "../../apollo/articles/articles.requests";

export default function ArticlesList(): ReactElement {
  const { loading, error, data: articlesList, fetchMore } = useQuery(
    GET_ARTICLES_LIST,
    {
      variables: {
        limit: 10,
        skip: 0,
      },
    }
  );

  function addStuff() {
    fetchMore({
      variables: {
        skip: articlesList.newsList.rows.length + 5,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          newsList: {
            ...prev.newsList,
            rows: [...prev.newsList.rows, ...fetchMoreResult.newsList.rows],
          },
        };
      },
    });
  }

  return (
    <div className="article-list">
      <InfiniteScroll
        dataLength={articlesList ? articlesList.newsList?.rows.length : 0}
        next={addStuff}
        hasMore={articlesList?.totalRows === articlesList.newsList?.rows.length}
        loader={<h4>Loading...</h4>}
      >
        <div className="f-grid">
          {articlesList?.newsList?.rows.map(
            (article: IArticle): ReactElement => (
              <div key={article.id} className="f-grid-col-4">
                <div className="article-list__item">
                  <div className="article-list__img">
                    <img src={article.img} alt={article.title} />
                  </div>
                  <h2 className="article-list__title">{article.title}</h2>
                </div>
              </div>
            )
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}
