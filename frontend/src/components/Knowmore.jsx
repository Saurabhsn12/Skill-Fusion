import React from 'react';
import "../Styles/Knowmore.css";

import Know from "../Data/videoss/SKTS.mp4";

const Knowmore = () => {
  return (
    <div className='cvd'>
    <div className='center'>
      <video autoPlay controls
      playbackRate={1.5} src={Know} />
    </div>
    </div>
  );
}

export default Knowmore;
