import "./work.scss"
import { useState } from "react";

export default function Work() {
    const [currSlider , setCurrSlider] = useState(0)

    const projectData = [
        {
            id:"1",
            title:'Walmart-Clone',
            des:"Using HTML, CSS and Javascript, I have built with group of 4, a clone of Walmart which is an E-commerce website where you can buy products from anywhere.",
            imageicon:"https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png",
            btnCode: "Code",
            btnWebsite:"Website",
            image:"images/walmart-website.png",
            code:"https://github.com/pabloescobar4/Walmart",
            website:"https://madhurima956.github.io/walmart-clone.github.io/walmart/index001.html",
        },
        {
            id:"2",
            title:'Intern-Theroy-Clone',
            des:"Using Node Js, Express Js and Javascript, EJS I have built with group of 5, a clone of Intern Theory where you can apply for internships and jobs.",
            imageicon:
            "https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png",
            btnCode: "Code",
            btnWebsite:"Website",
            image:"images/intern-website.png",
            code:"https://github.com/RoushanFW196/intern-theoryclone-unit3-project",
            website:"https://intern-theory-clone.herokuapp.com/InternTheory"
        },
       
    ];
    const handleClick=(way)=>{
        way === "left" 
        ? setCurrSlider(currSlider > 0 ? currSlider -1 : 1) 
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
                            <button><a href={d.code}>{d.btnCode}</a></button>
                                <button><a href={d.website}>{d.btnWebsite}</a></button>
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
