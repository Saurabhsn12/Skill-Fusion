import React from 'react';
import "../Styles/Artists.css";
import {FaSearch} from "react-icons/fa";


const Artists = () => {
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

      <div class="product" id='p21'>
          {/* <h4>CYAN T-SHIRT</h4>
          <h5>$100</h5> */}
      </div>

      <div class="product" id='p22'>

          {/* <h4>CYAN T-SHIRT</h4>
          <h5>$100</h5> */}
      </div>

      <div class="product" id='p23'>

          {/* <h4>CYAN T-SHIRT</h4>
          <h5>$100</h5> */}
      </div>

      <div class="product" id='p24'>

          {/* <h4>CYAN T-SHIRT</h4>
          <h5>$100</h5> */}
      </div>
  </div>

  </div>
  )
}

export default Artists