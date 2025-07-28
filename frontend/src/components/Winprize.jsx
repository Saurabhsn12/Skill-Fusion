import React from 'react';
import "../Styles/Winrizes.css";
import Knows from "../Data/videoss/upcoming_events.mp4";

const Winprize = () => {
  return (
    <div className='cvd'>
    <div className='center'>
      <video autoPlay controls
       src={Knows} />
    </div>
    </div>
  )
}

export default Winprize