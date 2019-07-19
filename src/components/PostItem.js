import React from "react";

import PostHeader from "./PostHeader";
import PostComments from "./PostComments";
import NewComment from "./NewComment";

import "./PostItem.css";

function PostItem({
  author,
  date,
  content,
  comments,
  newCommentInputChage,
  newCommentSubmit,
  newCommentValueState
}) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
      {comments.length > 0 && <div className="dividerComments" />}
      <NewComment
        newCommentInputChage={newCommentInputChage}
        newCommentSubmit={newCommentSubmit}
        newCommentValueState={newCommentValueState}
      />
    </div>
  );
}

export default PostItem;
