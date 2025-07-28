import React from 'react';
import "../Styles/Float.css";
import {FaInstagram,FaFacebook,FaTwitter,FaPinterest } from 'react-icons/fa';

const Float = () => {
  return (
    
    <div className='floating'>
    <div className='fb-logo'><a href="https://www.facebook.com/"><FaFacebook/></a></div>
    <div className='insta-logo'><a href="https://www.instagram.com/"><FaInstagram /></a></div>
    <div className='print-logo'><a href="https://www.facebook.com/"><FaPinterest/></a></div>
    <div className='twit-logo'><a href="https://about.twitter.com/en"><FaTwitter/></a></div>
    </div>
  )
}

export default Float;