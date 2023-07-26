import React from "react";

function Post(props) {
  return (
    <img src={props.post} className="rounded img-fluid" alt="profil picture" />
  );
}

export default Post;
