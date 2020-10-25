import React, { ReactElement } from "react";
import HeaderTitle from "./HeaderTitle/HeaderTitle";

export default function Header(): ReactElement {
  return (
    <div className="header">
      <HeaderTitle />
    </div>
  );
}
