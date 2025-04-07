import React from 'react';
import "../Styles/Ingames.css";
import {FaSearch,FaInstagram} from "react-icons/fa";
import skill from "../Data/logos/skillss.png";

const Ingames = () => {
  return (
    <div className='sports'>
      <div className='hdr'>
        <div className='sdf'></div>
    
    <div className='insta'>
      <FaSearch/>
    <input type="text" name="search"  placeholder="Find People..."/>

    </div>
    
    <div className='btns'>
    <button>Location</button>
    </div>
</div >
  <div class="productcontainer">

        <div class="product" id='p41'>
            {/* <h4>CYAN T-SHIRT</h4>
            <h5>$100</h5> */}
        </div>

        <div class="product" id='p42'>
            {/* <img src="/images/5.webp"> */}
            {/* <h4>CYAN T-SHIRT</h4>
            <h5>$100</h5> */}
        </div>

        <div class="product" id='p43'>
            {/* <img src="/images/7.webp"> */}
            {/* <h4>CYAN T-SHIRT</h4>
            <h5>$100</h5> */}
        </div>

        <div class="product" id='p44'>
            {/* <img src="/images/8.webp"> */}
            {/* <h4>CYAN T-SHIRT</h4>
            <h5>$100</h5> */}
        </div>
    </div>

    </div>
  )
}

export default Ingames;