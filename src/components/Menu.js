import React from "react";
import MenuCompo from "./MenuCompo";
import ProfilePicture from "./PictureProfile";
import "../components_css/menu.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Menu(props) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleMediaChange(event) {
      setIsSidebarVisible(!event.matches);
    }

    handleMediaChange(mediaQuery); // Appeler la fonction pour la première fois
    mediaQuery.addEventListener("change", handleMediaChange);

    // Nettoyer l'event listener après le démontage du composant
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const menuUn = {
    icon: "bi bi-house-fill ",
    nom: "Acceuil",
  };

  const menuDeux = {
    icon: "bi bi-search ",
    nom: "Recherche",
  };

  const menuTrois = {
    icon: "bi bi-compass ",
    nom: "Decouvrir",
  };

  const menuQuatre = {
    icon: "bi bi-film ",
    nom: "Reels",
  };

  const menuCinq = {
    icon: "bi bi-chat ",
    nom: "Messages",
  };

  const menuSix = {
    icon: "bi bi-heart ",
    nom: "Notifications",
  };

  const menuSept = {
    icon: "bi bi-plus-square ",
    nom: "Creer",
  };

  const menuNeuf = {
    icon: "bi bi-list",
    nom: "Plus",
  };

  return (
    <div className={`sidebar ${isSidebarVisible ? "" : "hidden"}`}>
      <div className="d-flex justify-content-center border-end" id="menu">
        <div className="d-flex flex-column">
          <p className=" fs-3 text fst-italic fw-bold mt-3">Instagram</p>

          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <MenuCompo obj={menuUn}></MenuCompo>
          </Link>
          <MenuCompo obj={menuDeux}></MenuCompo>
          <MenuCompo obj={menuTrois}></MenuCompo>
          <MenuCompo obj={menuQuatre}></MenuCompo>
          <Link
            to="/message"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuCompo obj={menuCinq}></MenuCompo>
          </Link>

          <MenuCompo obj={menuSix}></MenuCompo>
          <MenuCompo obj={menuSept}></MenuCompo>
          <Link to="/profil" style={{ color: "black", textDecoration: "none" }}>
            <div className="d-flex align-items-center mt-3">
              <ProfilePicture img="https://lesnuitssecretes.com/wp-content/uploads/2023/02/photo-h-jeunecrack-3-c-sknkii.jpg"></ProfilePicture>
              <p className="fw-bold ms-3 mb-0">Profil</p>
            </div>
          </Link>

          <MenuCompo obj={menuNeuf}></MenuCompo>
        </div>
      </div>
    </div>
  );
}

export default Menu;
