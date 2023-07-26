import React from "react";

function MenuCompo(props) {
  return (
    <div className="d-flex align-items-center mt-3">
      <i class={props.obj.icon} style={{ fontSize: "26px" }}></i>
      <p className="fw-bold ms-3 mb-0">{props.obj.nom}</p>
    </div>
  );
}

export default MenuCompo;
