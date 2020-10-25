import React, { ReactElement } from "react";
import LoadingIcon from "../../shared/utility/LoadingIcon/LoadingIcon";

export default function GlobalLoader(): ReactElement {
  return (
    <div className="overlay">
      <div className="d-flex flex-align-items-center flex-justify-content-center h-100">
        <LoadingIcon />
      </div>
    </div>
  );
}
