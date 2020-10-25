import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function HeaderInnerContent({ children }: Props): ReactElement {
  return <div className="header__inner">{children}</div>;
}
