import React from "react";
import Publication from "./Publication";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Story from "./Story";
import Suggestions from "./Suggestions";
import MenuHaut from "./MenuHaut";
import ProfilePicture from "./PictureProfile";

function Mur() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/bd/data.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Menu></Menu>
        </div>
        <div className="d-flex col-md-6 flex-column justify-content-center">
          <div className="d-flex flex-row justify-content-between">
            <MenuHaut clas="bi bi-house-fill"></MenuHaut>
            <MenuHaut clas="bi bi-search "></MenuHaut>
            <MenuHaut clas="bi bi-compass"></MenuHaut>
            <MenuHaut clas="bi bi-film"></MenuHaut>
            <MenuHaut clas="bi bi-film"></MenuHaut>
            <MenuHaut clas="bi bi-chat"></MenuHaut>
          </div>
          <div
            className="d-flex col-md-12 justify-content-start"
            style={{ overflow: "hidden" }}
          >
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
            <Story></Story>
          </div>
          {items.map((item) => (
            <Publication obj={item}></Publication>
          ))}
        </div>
        <div className="col-md-3 pt-3">
          <Suggestions></Suggestions>
          <Suggestions></Suggestions>
          <Suggestions></Suggestions>
          <Suggestions></Suggestions>
        </div>
      </div>
    </div>
  );
}

export default Mur;
