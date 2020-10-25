import React, { ReactElement } from "react";

export default function Wrapper(children: ReactElement): ReactElement {
  return (
    <div className="wrapper">
      <div className="container">{children}</div>
    </div>
  );
}
