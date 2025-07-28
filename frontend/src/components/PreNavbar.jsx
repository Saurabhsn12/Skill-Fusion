import React from 'react';
import "../Styles/PreNavbar.css";
import {Link} from "react-router-dom";

const PreNavbar = () => {
  return (
    <div className="preNav">
      <div>
        <Link to={"/home"} className='a'>Home</Link> <span>|</span>
        <Link to={"/"} className='a'>About</Link>  <span>|</span>
        <Link to={"/"} className='a'>Contact</Link>  <span>|</span>
        <Link to={"/knowmore"} className='a'>More ﹀</Link> 
      </div>
      <div>
        <Link to={"/login"} className='a'>SIGN IN</Link> <span>|</span>
        <Link to={"/signup"} className='a'>SIGN UP</Link> <span>|</span>
        <Link to={"/project"} className='a'>UPLOAD PROJECT</Link>
      </div>
    </div>
  )
}

export default PreNavbar;
