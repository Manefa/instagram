import React from "react";
import Menu from "./Menu.js";
import Suggestions from "./Suggestions";
import Comment from "./Comment";

function Message(props) {
  return (
    <div className="container d-flex">
      <div className="col-md-2 me-5">
        <Menu></Menu>
      </div>
      <div className="d-flex justify-content-between col-md-9 border mt-5 mb-5 ms-2">
        <div className="col-md-5 d-flex flex-column border-end">
          <div className="d-flex justify-content-between ">
            <div className="d-flex">
              <p className="ms-5">H jeune crack</p>
              <i class="bi bi-chevron-down ms-3"></i>
            </div>
            <i class="bi bi-pencil-square"></i>
          </div>

          <h6 className="mb-3 mt-2 ms-3 border-top">Message</h6>
          {props.obj.commentaires.map((item) => (
            <div className="ms-3 mt-2">
              <Comment obj={item}></Comment>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column align-items-center mb-4 me-3">
          <i class="bi bi-send-fill" style={{ fontSize: "6em" }}></i>
          <h4>Vos messages</h4>
          <p>Envoyez des photos et des messages privés a des ami(e)s</p>
          <button type="button" class="btn btn-primary">
            Envoyez un message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
