import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function ArticleView(): ReactElement {
  return (
    <div>
      single article<Link to="/">button</Link>
    </div>
  );
}
