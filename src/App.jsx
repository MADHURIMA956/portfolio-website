// import { Contact } from "../components/Contact.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import About from "./components/about/About.jsx";
import Skill from "./components/skills/Skill.jsx";
import Work from "./components/works/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import Menu from "./components/menu/Menu.jsx";

import './app.scss'
import { useState } from "react";


function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skill />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
