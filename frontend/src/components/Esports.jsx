import React from 'react';
import "../Styles/Esports.css";
import {FaSearch} from "react-icons/fa";

const Esports = () => {
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

      <div class="product" id='p1'>
          {/* <h4>CYAN T-SHIRT</h4>
          <h5>$100</h5> */}
      </div>

      <div class="product" id='p2'>
          {/* <img src="/images/5.webp"> */}
          {/* <h4>CYAN T-SHIRT</h4>
          <h5>$100</h5> */}
      </div>

      <div class="product" id='p3'>
          {/* <img src="/images/7.webp"> */}
          {/* <h4>CYAN T-SHIRT</h4>
          <h5>$100</h5> */}
      </div>

      <div class="product" id='p4'>
          {/* <img src="/images/8.webp"> */}
          {/* <h4>CYAN T-SHIRT</h4>
          <h5>$100</h5> */}
      </div>
  </div>

  </div>
  )
}

export default Esports