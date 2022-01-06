import "./work.scss"

export default function Work() {
    return (
        <div className="works" id="works">
           <div className="slider">
               <div className="container">
                   <div className="item">
                       <div className="left">
                           <div className="leftpart">
                               <h2>Title</h2>
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ducimus aspernatur nisi corporis optio iusto pariatur perspiciatis consectetur. Omnis labore dolor asperiores modi aperiam quos, necessitatibus ut illo a. Sit?</p>
                            <div className="project-btn">
                                <button>Code</button>
                                <button>Website</button>
                            </div>
                           </div>
                       </div>
                       <div className="right">
                           <img src="http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/web-development-projects.png" alt="" />
                       </div>
                   </div>
               </div>
           </div>
           <img src="images/arrow.png" className="arrow right" alt="" />
           <img src="images/arrow.png" className="arrow left" alt="" />
        </div>
    )
}
