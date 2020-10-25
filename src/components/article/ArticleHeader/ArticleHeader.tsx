import React, { ReactElement } from "react";
import Header from "../../shared/Header/Header";
import HeaderInnerContent from "../../shared/Header/HeaderInnerContent/HeaderInnerContent";

export default function ArticleHeader(): ReactElement {
  return (
    <Header>
      <HeaderInnerContent>
        <div className="header__title">The title</div>
      </HeaderInnerContent>
    </Header>
  );
}
