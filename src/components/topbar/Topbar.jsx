import "./topbar.scss";
import "../popupmail/popupMail.scss";
import { useState } from "react";
import { PopupMail } from "../popupmail/PopupMail.jsx";

export default function Topbar({menuOpen , setMenuOpen}) {
    const [showpopup,setShowpopup] =useState(false)
    const [showpopupphone,setShowpopupphone] =useState(false)

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <a href="#intro"><img className="imgLogo" src="images/logo.png" alt="logo" /></a> <span >Madhurima</span>
                    </div>

                    <div className="itemContainer">
                       <a href="https://github.com/MADHURIMA956" target="_blank" rel="noopener noreferrer"><img src="images/GitHub-icon.png" alt="github" /></a>
                    </div>
                    <div className="itemContainer">
                       <a href="https://www.linkedin.com/in/madhurima-banerjee-65415a191/" target="_blank" rel="noopener noreferrer"> <img src="images/linkedin.jpg" alt="linkedin" /></a>
                    </div>
                    <div className="itemContainer">
                        <img onClick={()=>setShowpopup(true)} src="images/email.jpg" alt="email" />
                        <PopupMail trigger={showpopup} setTrigger={setShowpopup}>
                        <span>madhurimabanerjee97@gmail.com</span>
                        </PopupMail>
                    </div>
                    <div className="itemContainer">
                        <img onClick={()=>setShowpopupphone(true)} src="images/phone.png" alt="phone-no" />
                        <PopupMail trigger={showpopupphone} setTrigger={setShowpopupphone}>
                        <span>+91-8240425891</span>
                        </PopupMail>
                    </div>
                </div>
                <div className="right">
                    <div className="resume">
                        <a href="https://drive.google.com/file/d/1DoXt6lpa65UsooK-NCclgMFpXUhwTaQt/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                    <div className="itemContainer">
                       <a href="https://drive.google.com/file/d/1zqmzEQiPQ2DgSd9WPnmrDNyIBZt5D6zM/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <img src="images/wr-resumes-logo.png" alt="resume" /></a>
                    </div>
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
