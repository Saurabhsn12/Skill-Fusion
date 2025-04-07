import React from 'react'
import "../Styles/Footer.css";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowRight,FaInstagram,FaFacebook,FaTwitter,FaPinterest } from 'react-icons/fa';

const Footer = ({footer}) => {
    return (

       <footer className='footer'>

        <div className='row'>


          <div className='col'>
            <h2 className='logs'>Skill Fusion.</h2>
            <p className='info'>Hola! This is the platform where you can gear up your skills and find people based on different skills to work together as a team to take your career to the next level </p>
          </div>
          <div className='col'>
            <h3 >Contact</h3>
            <p>+91 - 9394328448</p>
            <p className='email-id'>pritambj@gmail.com</p>
            <h6>Vidhani Jaipur,Rajasthan,302051</h6>
          </div>
          <div className='col'>
            <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/skill">Events</a></li>
              <li><a href="">Career</a></li>
              <li><a href="">About</a></li>
            </ul>
          </div>
          <div className='col'>
            <h3>Letter</h3>
            <form className='form1'>
              <h1><FaEnvelope/></h1>
            <input type="email" placeholder='Enter email id' required />
            <button type='submit'><h2><FaArrowRight/></h2></button>
            </form>
            <div className='social-icon'>
                <p ><FaInstagram/></p>
                <p><FaFacebook/></p>
                <p><FaTwitter/></p>
                <p><FaPinterest/></p>
            </div>
      
          </div>


        </div>
        <hr/>
        <p className='copy'>Copyright rights &copy; </p>

       </footer>

    )
}

export default Footer;

{/* <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div> */}