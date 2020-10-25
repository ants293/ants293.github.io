import React, { ReactElement } from "react";
import clsx from "clsx";

interface Props {
  children: ReactElement;
  classes?: string;
}

export default function HeaderInnerContent({
  children,
  classes,
}: Props): ReactElement {
  return <div className={clsx(["header__content", classes])}>{children}</div>;
}

HeaderInnerContent.defaultProps = {
  classes: "",
};
