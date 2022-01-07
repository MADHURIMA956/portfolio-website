import "./work.scss"
import { useState } from "react";

export default function Work() {
    const [currSlider , setCurrSlider] = useState(0)

    const projectData = [
        {
            id:"1",
            title:'Walmart',
            des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ducimus aspernatur nisi corporis optio iusto pariatur perspiciatis consectetur. Omnis labore dolor asperiores modi aperiam quos, necessitatibus ut illo a. Sit?",
            imageicon:"https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png",
            btnCode: "Code",
            btnWebsite:"Website",
            image:"http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/web-development-projects.png"

        },
        {
            id:"2",
            title:'Intern Theroy Clone',
            des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ducimus aspernatur nisi corporis optio iusto pariatur perspiciatis consectetur. Omnis labore dolor asperiores modi aperiam quos, necessitatibus ut illo a. Sit?",
            imageicon:
            "https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png",
            btnCode: "Code",
            btnWebsite:"Website",
            image:"http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/web-development-projects.png"

        },
        {
            id:"3",
            title:'Intern ',
            des:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ducimus aspernatur nisi corporis optio iusto pariatur perspiciatis consectetur. Omnis labore dolor asperiores modi aperiam quos, necessitatibus ut illo a. Sit?",
            imageicon:"https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png",
            btnCode: "Code",
            btnWebsite:"Website",
            image:"http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/web-development-projects.png"
        }
       
    ];
    const handleClick=(way)=>{
        way === "left" 
        ? setCurrSlider(currSlider > 0 ? currSlider -1 : 2) 
        : setCurrSlider(currSlider<projectData.length -1? currSlider+1 : 0 ) 
    }
    return (
        <div className="works" id="works">
           <div className="slider" style={{transform:`translateX(-${currSlider *100}vw)`}}>
              {projectData.map(d=>(
              <div className="container">

                   <div className="item">
                       <div className="left">
                           <div className="leftpart">
                               <h2>{d.title}</h2>
                               <p>{d.des}</p>
                            <div className="project-icon">
                                <img src={d.imageicon} alt=""/>
                            </div>
                            <div className="project-btn">
                                <button>{d.btnCode}</button>
                                <button>{d.btnWebsite}</button>
                            </div>
                           </div>
                           
                       </div>
            
                       <div className="right">
                           <img src={d.image} alt="" />
                       </div>
                   </div>
               </div>
               ))} 
           </div>
           <img onClick={()=>handleClick("left")} src="images/arrow.png" className="arrow right" alt="" />
           <img onClick={()=>handleClick()} src="images/arrow.png" className="arrow left" alt="" />
        </div>
    )
}
