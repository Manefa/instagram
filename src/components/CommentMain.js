import React from "react";

function CommentMain(props) {
  return (
    <div className="row">
      <div className="d-flex mt-0">
        <div className="">
          <p className="fw-bold mb-0">{props.nom}</p>
        </div>
        <div className="ms-2">
          <p className="mb-0">{props.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentMain;
