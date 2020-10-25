import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function Header({ children }: Props): ReactElement {
  return <div className="header">{children}</div>;
}
