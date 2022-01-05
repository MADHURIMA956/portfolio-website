import "./topbar.scss";

export default function Topbar({menuOpen , setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">logo</a>
                    <div className="itemContainer">
                        <span>Ph no</span>
                    </div>
                    <div className="itemContainer">
                        <span>mail</span>
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
