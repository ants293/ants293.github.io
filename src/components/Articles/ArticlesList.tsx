import React, { ReactElement } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";
import { IArticle } from "../../interfaces/articles/article";
import LoadingIcon from "../shared/utility/LoadingIcon/LoadingIcon";
import GlobalLoader from "../global/GlobalLoader/GlobalLoader";
import {
  INewsList,
  IRequestMoreResults,
} from "../../interfaces/articles/articles";

interface Props {
  loading?: boolean;
  data?: INewsList;
  fetchMore?: any;
}

export default function ArticlesList({
  loading = false,
  data = {
    newsList: {
      totalRows: 999,
      rows: [],
    },
  },
  fetchMore = () => {},
}: Props): ReactElement<Props> {
  const { newsList } = data;

  function requestMoreRows() {
    fetchMore({
      variables: {
        skip: newsList.rows.length,
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
          loader={<div className="text-align-center">{LoadingIcon()}</div>}
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
        <GlobalLoader />
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
