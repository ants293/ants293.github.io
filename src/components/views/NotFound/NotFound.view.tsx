import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../shared/Wrapper/Wrapper";

export default function NotFoundView(): ReactElement {
  return (
    <Wrapper>
      <div className="mistake">
        <div className="mistake__error">404</div>
        <Link className="mistake__link" to="/">
          Go home
        </Link>
      </div>
    </Wrapper>
  );
}
