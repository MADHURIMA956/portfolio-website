import "./work.scss"
import { useState } from "react";

export default function Work() {
    const [currSlider , setCurrSlider] = useState(0)

    const projectData = [
        {
            id:"1",
            title:'Walmart-Clone',
            des:"Using HTML, CSS and Javascript, I have built with group of 4, a clone of Walmart which is an E-commerce website where you can buy products from anywhere.",
            imageicon:'TECH STACK : HTML, CSS, JS',
            btnCode: "Code",
            btnWebsite:"Website",
            image:"images/walmart-website.PNG",
            code:"https://github.com/pabloescobar4/Walmart",
            website:"https://madhurima956.github.io/walmart-clone.github.io/walmart/index001.html",
        },
        {
            id:"2",
            title:'Intern-Theroy-Clone',
            des:"Using Node Js, Express Js and Javascript, EJS I have built with group of 5, a clone of Intern Theory where you can apply for internships and jobs.",
            imageicon:'TECH STACK : EJS, JS, MongoDB, NodeJS',
            btnCode: "Code",
            btnWebsite:"Website",
            image:"images/intern-website.PNG",
            code:"https://github.com/RoushanFW196/intern-theoryclone-unit3-project",
            website:"https://intern-theory-clone.herokuapp.com/InternTheory"
        },
        {
            id:"3",
            title:'Quora-Clone',
            des:"Using Tech React Js, Redux, Express Js, MongoDb, Chakra UI, I have built with group of 5, a clone of Quora where people can answer and ask questions and get detailed responses or troll responses.",
            imageicon:'TECH STACK : React Js, Redux, Express Js, MongoDb',
            btnCode: "Code",
            btnWebsite:"Website",
            image:"https://miro.medium.com/max/700/1*KtkhFJ13Gqy3Pi-rllecBQ.png?raw=true",
            code:"https://github.com/Smrutiranjan-Patra/quora",
            website:"https://quora-roan.vercel.app/"
        },
       
    ];
    const handleClick=(way)=>{
        way === "left" 
        ? setCurrSlider(currSlider > 0 ? currSlider -1 : 2) 
        : setCurrSlider(currSlider < projectData.length -1 ? currSlider + 1 : 0 ) 
    }
    return (
        <div className="works" id="works">
           <h2 className="title">My Projects</h2>
           <div className="slider" style={{transform:`translateX(-${currSlider *100}vw)`}}>
              {projectData.map(d=>(
              <div className="container">

                   <div className="item">
                       <div className="left">
                           <div className="leftpart">
                               <h2>{d.title}</h2>
                               <p>{d.des}</p>
                            <div className="project-icon">
                                <h4>{d.imageicon}</h4>
                            </div>
                            <div className="project-btn">
                            <button><a href={d.code} target="_blank" rel="noopener noreferrer">{d.btnCode}</a></button>
                                <button><a href={d.website} target="_blank" rel="noopener noreferrer">{d.btnWebsite}</a></button>
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
