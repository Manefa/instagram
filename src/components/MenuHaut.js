import React from "react";
import { useState, useEffect } from "react";
import "../components_css/menu.css";

function MenuHaut(props) {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleMediaChange(event) {
      setIsMenuVisible(!event.matches);
    }

    handleMediaChange(mediaQuery); // Appeler la fonction pour la première fois
    mediaQuery.addEventListener("change", handleMediaChange);

    // Nettoyer l'event listener après le démontage du composant
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div
      className={`sidebar ${isMenuVisible ? "hidden" : ""}`}
      style={{ fontSize: "2em" }}
    >
      <div className="col-md-12">
        <i class={props.clas}></i>
      </div>
    </div>
  );
}

export default MenuHaut;
