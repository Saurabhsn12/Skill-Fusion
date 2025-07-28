import React from 'react';
import "../Styles/Programmer.css";
import {FaSearch} from "react-icons/fa";

const Programmer = () => {
  return (
    <div className='sports1'>
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
<div class="productcontainer1">

      <div class="product" id='p11'>

      </div>

      <div class="product" id='p12'>


      </div>

      <div class="product1" id='p13'>

      </div>

      <div class="product" id='p14'>

      </div>
  </div>

  </div>
  )
}

export default Programmer;






