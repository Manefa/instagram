import React from "react";

function Suggestions() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-3 me-2">
          <img
            src="https://lesnuitssecretes.com/wp-content/uploads/2023/02/photo-h-jeunecrack-3-c-sknkii.jpg"
            className="rounded-circle"
            width="45px"
            height="45px"
          ></img>
        </div>
        <div className="col-md-5 d-flex flex-column justify-content-end px-0">
          <h6 className="mb-0">Kevin Hart</h6>
          <p className="mb-0 fst-italic" style={{ fontSize: "12px" }}>
            suggestions
          </p>
        </div>
        <div className="col-md-3 d-flex align-items-end">
          <p
            className="text-primary mb-0 px-0"
            style={{ display: "inline-block", fontSize: "12px" }}
          >
            suivre
          </p>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
