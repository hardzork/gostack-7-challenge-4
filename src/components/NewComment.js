import React from "react";

import "./NewComment.css";

function NewComment() {
  return (
    <form>
      <div className="containerNewComment">
        <div className="containerComment">
          <textarea
            id="newcomment"
            rows="3"
            placeholder="Escreva aqui seu comentário"
            // onChange={inputChange}
            // value={valueState}
          />
        </div>
      </div>
      <div className="containerCommentSubmit">
        <button className="btn btn-comment" type="submit">
          Comentar
        </button>
      </div>
    </form>
  );
}

export default NewComment;
