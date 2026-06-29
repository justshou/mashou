import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 font-sans-sora">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
