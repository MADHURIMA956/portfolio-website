
import './contact.scss'
// import { useState } from "react";

export default function Contact() {
    // const [message , setMessage] = useState(false)
    // const handleSubmit =(e) => {
    //     e.preventDefault();
    //     setMessage(true)
    // }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="images/contact.jpg" alt="" />
            </div>
            <div className='right'>
                <h2>Get In Touch</h2>
                {/* <form onSubmit={handleSubmit} action="">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks, I'll reply As soon as possible :)</span>}
                </form> */}
                 <div className='containerDiv'>
                 <div className="itemContainer">
                        <img  src="images/location.png" alt="logo" /> <span >3 No K.K. Pally, Birati, Kol:51, India</span>
                </div>
                <div className="itemContainer">
                        <img  src="images/phone.png" alt="logo" /> <span >+91 8240425891</span>
                </div>
                <div className="itemContainer">
                        <img  src="images/email.jpg" alt="logo" /> <span >madhurimabanerjee97@gmail.com</span>
                </div>
                <div className="itemContainer">
                <img className="imgLogo" src="images/GitHub-icon.png" alt="logo" />
                <a href="https://github.com/MADHURIMA956" target="_blank" rel="noopener noreferrer" ><span className='specialVal'>MADHURIMA956</span></a>
                </div>
                <div className="itemContainer">
                <img className="imgLogo" src="images/linkedin.jpg" alt="logo" />
                <a href="https://www.linkedin.com/in/madhurima-banerjee-65415a191/" target="_blank" rel="noopener noreferrer">  <span className='specialVal'>madhurima-banerjee-65415a191</span></a>
                </div>
                 </div>
            </div>
        </div>
    )
}
