import React, { ReactElement } from "react";
import Header from "../../shared/Header/Header";
import HeaderInnerContent from "../../shared/Header/HeaderInnerContent/HeaderInnerContent";

interface Props {
  loading?: boolean;
  data?: any;
}

export default function ArticleHeader({ loading, data }: Props): ReactElement {
  return (
    <>
      {!loading ? (
        <Header>
          <HeaderInnerContent>
            <div className="header__title">The title</div>
          </HeaderInnerContent>
        </Header>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

ArticleHeader.defaultProps = {
  loading: false,
  data: {
    newsItem: {},
  },
};
