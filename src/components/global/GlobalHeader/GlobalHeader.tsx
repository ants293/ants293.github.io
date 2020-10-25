import React, { ReactElement } from "react";
import Header from "../../shared/Header/Header";
import HeaderInnerContent from "../../shared/Header/HeaderInnerContent/HeaderInnerContent";

export default function GlobalHeader(): ReactElement {
  return (
    <Header>
      <HeaderInnerContent>
        <div className="header__inner flex-justify-content-center">
          <div className="header__title">Global header</div>
        </div>
      </HeaderInnerContent>
    </Header>
  );
}
