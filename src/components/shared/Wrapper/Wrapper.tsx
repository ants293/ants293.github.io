import React, { FunctionComponent, ReactElement } from "react";
import GlobalHeader from "../../global/GlobalHeader/GlobalHeader";

interface Props {
  children: ReactElement;
  headerComponent?: FunctionComponent;
}

export default function Wrapper({
  children,
  headerComponent,
}: Props): ReactElement {
  return (
    <div className="wrapper">
      {headerComponent && headerComponent({})}
      <div className="container">{children}</div>
    </div>
  );
}

Wrapper.defaultProps = {
  headerComponent: GlobalHeader,
};
