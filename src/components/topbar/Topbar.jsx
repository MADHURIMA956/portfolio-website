import "./topbar.scss";

export default function Topbar({menuOpen , setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img className="imgLogo" src="images/logo.jpg" alt="logo" />
                    <span className="logoname">Madhurima</span></a>
                    <div className="itemContainer">
                       <a href="https://github.com/MADHURIMA956"><img src="images/GitHub-icon.png" alt="github" /></a>
                    </div>
                    <div className="itemContainer">
                       <a href="https://www.linkedin.com/in/madhurima-banerjee-65415a191/"> <img src="images/linkedin.jpg" alt="linkedin" /></a>
                    </div>
                    <div className="itemContainer">
                        <img src="images/email.jpg" alt="email" /><span>madhurimabanerjee97@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                   <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
                </div>
            </div>
        </div>
    )
}
