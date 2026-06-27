import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
