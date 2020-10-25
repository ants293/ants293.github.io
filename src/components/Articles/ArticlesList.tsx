import React, { ReactElement, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";
import { IArticle } from "../../interfaces/articles/article";
import {
  INewsList,
  IRequestMoreResults,
} from "../../interfaces/apolloResponses/newsList";

interface Props {
  loading?: boolean;
  data?: any;
  fetchMore?: any;
}

export default function ArticlesList({
  loading,
  data,
  fetchMore,
}: Props): ReactElement {
  const { newsList } = data;

  function requestMoreRows() {
    fetchMore({
      variables: {
        skip: newsList.rows.length + 5,
      },
      updateQuery: (
        prev: INewsList,
        { fetchMoreResult }: IRequestMoreResults
      ) => {
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
      {!loading ? (
        <InfiniteScroll
          loadMore={requestMoreRows}
          hasMore={!(newsList.rows.length === newsList.totalRows)}
          loader={<h4>Loading...</h4>}
        >
          <div className="f-grid">
            {newsList.rows.map(
              (article: IArticle, index: number): ReactElement => (
                <div
                  key={article.id}
                  className={
                    index === 0
                      ? "f-grid-col-12 f-grid-col-lg-12"
                      : "f-grid-col-6 f-grid-col-lg-4"
                  }
                >
                  <Link
                    className="article-list__item"
                    to={{
                      pathname: `/article/${encodeURI(article.id)}`,
                    }}
                  >
                    <div className="article-list__img">
                      <img src={article.img} alt={article.title} />
                    </div>
                    <h2 className="article-list__title">{article.title}</h2>
                  </Link>
                </div>
              )
            )}
          </div>
        </InfiniteScroll>
      ) : (
        <div>load</div>
      )}
    </div>
  );
}

ArticlesList.defaultProps = {
  loading: false,
  data: {
    newsList: {
      totalRows: 999,
      rows: [],
    },
  },
  fetchMore: () => {},
};
