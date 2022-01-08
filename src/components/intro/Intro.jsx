import './intro.scss'
import { init } from 'ityped';
import { useEffect ,useRef } from "react";
import Particles from "react-tsparticles";

export default function Intro() {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay:  1500, 
            backSpeed:60,
            strings: ['Full Stack Web Developer','Front-End Developer' , 'Back-End Developer'] })
    }, [])
    return (
        <div className='intro' id='intro'>

<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
       
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#2a2e92",
          },
          links: {
            color: "#2a2e92",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

         <div className="left">
             <div className="imageCont">
                 <img src="images/profilePic.jpg" alt="" />
             </div>
         </div>
         <div className="right">
             <div className="wrapper">
                 <h2>Hi There , I'm</h2>
                 <h1>Madhurima Banerjee</h1>
                 <h3><span ref={textRef}></span></h3>
             </div>
             <a href="#about">
                <img src="images/downArrow.png" alt="" />
             </a>
         </div>
        </div>
    )
}
