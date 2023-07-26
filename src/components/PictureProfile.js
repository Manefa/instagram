import React from "react";

function ProfilePicture(props) {
  return (
    <img
      src={props.img}
      className=" rounded-circle"
      height={35}
      width={35}
      alt="profil"
    />
  );
}

export default ProfilePicture;
