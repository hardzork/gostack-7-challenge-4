import React from "react";

import "./NewPost.css";

function NewPost({ inputChange, formSubmit, valueState }) {
  return (
    <form onSubmit={formSubmit}>
      <div className="new-post">
        <div className="containerNewPost">
          <div className="containerAvatarPost">
            <img
              className="avatarNewPost"
              src="https://avatars1.githubusercontent.com/u/21206530"
              alt=""
            />
          </div>
          <div className="containerPost">
            <textarea
              id="newpost"
              rows="3"
              placeholder="No que você está pensando?"
              onChange={inputChange}
              value={valueState}
            />
          </div>
        </div>
        <div className="containerSubmit">
          <button className="btn facebook" type="submit">
            Compartilhar
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewPost;
