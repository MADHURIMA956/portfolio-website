import "./topbar.scss";
import { useState } from "react";

export default function Topbar({menuOpen , setMenuOpen}) {
    const [show,setShow] =useState(false)
    const handleClick=(val)=>{
        show === val 
        ?setShow(null)
        :setShow(<span>madhurimabanerjee97@gmail.com</span>)
        }
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <img className="imgLogo" src="images/logo.jpg" alt="logo" /> <span >Madhurima</span>
                    </div>

                    <div className="itemContainer">
                       <a href="https://github.com/MADHURIMA956"><img src="images/GitHub-icon.png" alt="github" /></a>
                    </div>
                    <div className="itemContainer">
                       <a href="https://www.linkedin.com/in/madhurima-banerjee-65415a191/"> <img src="images/linkedin.jpg" alt="linkedin" /></a>
                    </div>
                    <div className="itemContainer">
                        <img onClick={()=>handleClick(false)} src="images/email.jpg" alt="email" />
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
