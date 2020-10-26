import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../../shared/Header/Header";
import HeaderInnerContent from "../../shared/Header/HeaderInnerContent/HeaderInnerContent";

interface Props {
  loading?: boolean;
  data?: any;
}

export default function ArticleHeader({ loading, data }: Props): ReactElement {
  const { newsItem } = data;

  return (
    <>
      {!loading ? (
        <Header>
          <HeaderInnerContent>
            <div className="header__inner">
              <Link to="/">
                <FontAwesomeIcon icon={faChevronLeft} />
              </Link>
              <div className="header__title">News reader</div>
              <a href={newsItem.url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </HeaderInnerContent>
        </Header>
      ) : null}
    </>
  );
}

ArticleHeader.defaultProps = {
  loading: false,
  data: {
    newsItem: {},
  },
};
