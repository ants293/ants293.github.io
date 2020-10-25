import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../shared/Wrapper/Wrapper";

export default function ArticleView(): ReactElement {
  return (
    <Wrapper>
      <div>
        single article<Link to="/">button</Link>
      </div>
    </Wrapper>
  );
}
