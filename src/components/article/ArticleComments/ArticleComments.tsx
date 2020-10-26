import React, { ReactElement } from "react";
import * as moment from "moment";
import { IComment } from "../../../interfaces/articles/article";

interface Props {
  comments: [];
}

export default function ArticleComments({ comments }: Props): ReactElement {
  return (
    <div className="comments">
      <div className="comments__title">Comments</div>
      <div className="comments__list">
        {comments.map((comment: IComment) => (
          <div key={comment.id} className="comment__item">
            <div className="comment__author mar-bottom-5">{comment.email}</div>
            <div className="comment__content mar-bottom-5">
              {comment.content}
            </div>
            <div className="comment__date">
              {moment.unix(comment.createdDate / 1000).format("DD.MM.YYYY")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
