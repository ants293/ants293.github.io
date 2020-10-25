import React, { ReactElement, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ARTICLES_LIST } from "../../../apollo/articles/articles.requests";
import { IArticle } from "../../../interfaces/articles/article";

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

  console.log(articlesList);

  return (
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
        {articlesList?.newsList?.rows.map(
          (article: IArticle): ReactElement => (
            <div className="article-list__item">
              <img src={article.img} alt={article.title} />
              <h2>{article.title}</h2>
            </div>
          )
        )}
      </div>
    </div>
  );
}
