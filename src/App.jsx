import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import About from "./components/about/About.jsx";
import Skill from "./components/skills/Skill.jsx";
import Work from "./components/works/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import Menu from "./components/menu/Menu.jsx";
import Footer from "./components/footer/Footer.jsx";


import './app.scss'
import { useState } from "react";
import {Helmet} from "react-helmet";

function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="app">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Portfolio | Madhurima</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Portfolio application" />
      </Helmet>
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
