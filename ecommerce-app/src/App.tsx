import React from "react";
import { Nav } from "./components/nav/Nav";
import { Gallery } from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Nav />
      <Gallery />
    </div>
  );
}

export default App;
