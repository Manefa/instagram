import React from "react";

function Comment(props) {
  return (
    <div className="row">
      <div className="d-flex mt-0">
        <div>
          <p className="fw-bold mb-0">{props.obj.nom} </p>
        </div>
        <div className="ms-2">
          <p className="mb-0">{props.obj.commentaire}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
