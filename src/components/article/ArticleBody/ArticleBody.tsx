import React, { ReactElement } from "react";
import GlobalLoader from "../../global/GlobalLoader/GlobalLoader";

interface Props {
  loading?: boolean;
  data?: any;
}

export default function ArticleBody({ loading, data }: Props): ReactElement {
  const { newsItem } = data;
  return (
    <div className="single-article">
      {loading ? (
        <GlobalLoader />
      ) : (
        <>
          <h1 className="single-article__title">{newsItem.title}</h1>
          <div className="single-article__img">
            <img src={newsItem.img} alt={newsItem.title} />
          </div>
          <div className="single-article__content">{newsItem.content}</div>
        </>
      )}
    </div>
  );
}

ArticleBody.defaultProps = {
  loading: false,
  data: {
    newsItem: {},
  },
};
