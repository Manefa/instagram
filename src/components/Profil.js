import React from "react";
import Menu from "./Menu";

function Profil(props) {
  return (
    <div className="container d-flex">
      <div className="col-md-2">
        <Menu></Menu>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex mt-4 ms-5">
          <div>
            <img
              src="https://www.livreshebdo.fr/sites/default/files/2022-12/one%20piece.jpg"
              width="150px"
              height="150px"
              className="rounded-circle"
            ></img>
          </div>
          <div>
            <div className="col-md-10 d-flex justify-content-between ms-3">
              <p className="fs-4">b.k.r.97</p>
              <button
                type="button"
                class="btn btn-dark"
                style={{ height: "50px" }}
              >
                Modifier Profil
              </button>
              <i class="bi bi-gear-fill" style={{ fontSize: "2em" }}></i>
            </div>
            <div className="col-md-12 d-flex justify-content-between ms-3 mt-3">
              <p>2 publications</p>

              <p className="ms-5">91 followers</p>

              <p className="ms-5">140 suivi(e)s</p>
            </div>
            <div className="ms-3">
              <p className="mb-0 fw-bold">H jeune crack</p>
              <p className="mb-0">jeune le crack</p>
            </div>
          </div>
        </div>
        <div className="border-bottom ms-5 mt-4"> </div>
      </div>
    </div>
  );
}

export default Profil;
