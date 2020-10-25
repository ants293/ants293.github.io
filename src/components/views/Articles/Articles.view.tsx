import React, { ReactElement, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ARTICLES_LIST } from "../../../apollo/articles/articles.requests";
import { IArticle } from "../../../interfaces/articles/article";
import Wrapper from "../../shared/Wrapper/Wrapper";

export default function ArticlesView(): ReactElement {
  const [articlesPagination, setArticlesPagination] = useState({
    skip: 0,
    limit: 10,
  });

  const { loading, error, data: articlesList } = useQuery(GET_ARTICLES_LIST, {
    variables: {
      skip: articlesPagination.skip,
      limit: articlesPagination.limit,
    },
  });

  return (
    <Wrapper>
      <div>
        is a list
        <Link to="/article">To article</Link>
        <button
          type="button"
          onClick={() => {
            setArticlesPagination({
              ...articlesPagination,
              skip: articlesPagination.skip + 10,
            });
          }}
        >
          update pls
        </button>
        <div className="article-list">
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
        </div>
      </div>
    </Wrapper>
  );
}
