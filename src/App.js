import React from "react";
import Mur from "./components/Mur.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Message from "./components/Message.js";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Profil from "./components/Profil.js";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/bd/data.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mur></Mur>}></Route>
          <Route
            path="/message"
            element={<Message obj={items[0]}></Message>}
          ></Route>
          <Route path="/profil" element={<Profil></Profil>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
