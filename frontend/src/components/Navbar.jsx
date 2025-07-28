import React from 'react'
import "../Styles/nav.css"
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
// import skill from "../Data/logos/skillss.png";


const Navbar = () => {
    return (
        <div className="nav">
          <div className='fob'>
          Skill Fusion.
                </div>
            
             <div className='logo2'>
                <h2>Ask Your Query!</h2>
                <p className='lg1'>Hello! How can i help you?</p>
                <p className='lg2'>Hii! I Like Skill Fusion</p>
                <p className='lg3'>Thank You Sir,.. Any other quary</p>
                <p className='lg4'>Typing....</p>
                <div>
                <input className='lg5' type="text" name="search"  placeholder="No...nothing else....."/>
                <button className='sends'>Send</button>
                </div>
             </div>
      <div className='n-link'>
             <Link  className="navlinks"  to="/knowmore">Know more</Link>
           <Link  className="navlinks"  to="/winprize">Win prizes</Link>
           <Link  className="navlinks"  to="/create">Create Tournament</Link>
           <Link  className="navlinks"  to="/jobs">Technical & Support</Link></div>
           <div className="searchbox">
            <FaSearch className='svg'/>
              <input type="text" className='input1' name="search"  placeholder="Search Products"/>
          </div>
          
          <div className='prof'><div className='dps'></div>


          <div className='usern'>
            <p>Pritam Bijarniya</p>
            <p>pritambj@gmail.com</p>
            <p className='inline'><b>Ratings</b></p><p className='inline'>3.5</p>
            <p className='inline'><b>Followings</b></p><p className='inline'>10</p>
          </div>
          <hr />
          <div className='buttons'>
          <button>Change</button>
            <button>Update</button>
          </div>
          <div>
            <h4>Complete the profile</h4>
            <p>Skills you know<input type='text' required></input></p>
            <p>Mobile number<input type='number' required></input>
            <input className='sub' type="Submit" /></p>
            </div>









          </div>
           </div>
    )
}

export default Navbar;
