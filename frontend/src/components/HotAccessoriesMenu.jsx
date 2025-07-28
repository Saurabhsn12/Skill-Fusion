import React from 'react'
import {Link} from "react-router-dom"
import "../Styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
    return (
         <div className="HotAccessoriesMenu">
             <Link className="HotAccessoriesLink" to="/programmer">Programmers</Link>
             <Link className="HotAccessoriesLink" to="/esports">E-Sports</Link>
             <Link className="HotAccessoriesLink" to="/sports">Sports</Link>
             <Link className="HotAccessoriesLink" to="/artists">Artists</Link>
             <Link className="HotAccessoriesLink" to="/">Indoor Games</Link>

            
        </div>
    )
}

export default HotAccessoriesMenu