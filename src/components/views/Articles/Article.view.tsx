import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../shared/Wrapper/Wrapper";

interface Props {
  location?: any;
}

export default function ArticleView({ location }: Props): ReactElement {
  console.log("location", location);
  return (
    <Wrapper>
      <div>single article</div>
    </Wrapper>
  );
}

ArticleView.defaultProps = {
  location: {},
};
