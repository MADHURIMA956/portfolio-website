import './menu.scss'

export default function Menu({menuOpen , setMenuOpen}) {
    return (
        <div className={'menu '+ (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skill">Skill</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Project</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
