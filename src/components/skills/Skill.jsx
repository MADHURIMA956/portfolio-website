import SkillList from '../skillList/SkillList'
import './skill.scss'
import { useState ,useEffect } from "react";
import { frontEndData,
    backEndData,
    programmingLangData,
    hostingPlatformData,
    dataBaseData,
    versonControlData } from "../../skilldata.jsx";

export default function Skill() {
   const [select, setSelect] = useState("front-end");
   const [ skilldata , setSkilldata] = useState([])
    const List = [
        {
            id:"front-end",
            title:"Front-end"
        },
        {
            id:"back-end",
            title:"Back-end"
        },
        {
            id:"programming Languages",
            title:"Programming Languages"
        },
        {
            id:"database",
            title:"Database"
        },
        {
            id:"hosting Platform",
            title:"Hosting Platform"
        },
        {
            id:"version Control",
            title:"Version Control"
        }
    ];

    useEffect(() => {
      switch(select){
          case "front-end" :
              setSkilldata(frontEndData);
              break;
              case "back-end" :
              setSkilldata(backEndData);
              break;
              case "programming Languages" :
              setSkilldata(programmingLangData);
              break;
              case "database" :
              setSkilldata(dataBaseData);
              break;
              case "hosting Platform" :
              setSkilldata(hostingPlatformData);
              break;
              case "version Control" :
              setSkilldata(versonControlData);
              break;
              default:
                  setSkilldata(frontEndData);
      }
    }, [select])
    return (
        <div className='skill' id='skill'>
            <h1>Technical Skill</h1>
            <ul>
               {List.map((item) => (
                   <SkillList title={item.title}
                    active={select === item.id}
                     setSelect={setSelect}
                     id={item.id}
                     />
               ))}
            </ul>
           <div className="container">
               {skilldata.map((d)=>(
                <div className="items">
                <img src={d.image} alt="" />
                <h3>{d.title}</h3>
                </div> 
               ))}
          
           </div>
        </div>
    )
}
