import './intro.scss'
import { init } from 'ityped';
import { useEffect ,useRef } from "react";

export default function Intro() {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay:  1500, 
            backSpeed:60,
            strings: ['Developer'] })
    }, [])
    return (
        <div className='intro' id='intro'>
         <div className="left">
             <div className="imageCont">
                 <img src="images/profilePic.jpg" alt="" />
             </div>
             <h3>I am an aspiring Full-Stack Web Developer, looking for a role in an
enthusiastic work environment, to enhance the knowledge and
skills learned and apply technical skills to accomplish
organizational goals.</h3>
             <button>Get Resume</button>
         </div>
         <div className="right">
             <div className="wrapper">
                 <h2>Hi There , I'm</h2>
                 <h1>Madhurima Banerjee</h1>
                 <h3>Web <span ref={textRef}></span></h3>
             </div>
             <a href="#skill">
                <img src="images/downArrow.png" alt="" />
             </a>
         </div>
        </div>
    )
}
