import React from 'react'
import "../Styles/Heading.css";
import introVideo from "../Data/videoss/upcoming_events.mp4";

const Heading = ({text}) => {
    return (
       <div>
         <div className="heading" >
            <div className='divs'></div>
            <p>{text}</p>
            <div className='divs'></div>

            
        </div>
         {/* <div className='sorts'><div className='band'>
 <video  autoPlay controls src={introVideo}></video>
        </div></div> */}
       </div>
    )
}

export default Heading;
           