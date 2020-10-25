import React, { ReactElement, useEffect } from "react";
import Header from "../../shared/Header/Header";
import HeaderInnerContent from "../../shared/Header/HeaderInnerContent/HeaderInnerContent";

export default function GlobalHeader(): ReactElement {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <Header>
      <HeaderInnerContent>
        <div className="header__title">Global header</div>
      </HeaderInnerContent>
    </Header>
  );
}
