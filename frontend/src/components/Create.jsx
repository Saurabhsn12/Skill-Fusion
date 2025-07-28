import React from 'react';
import "../Styles/Create.css"

const Create = () => {
  return (
    <div className='setup'>
    <div className='rope'>
        <h1 className='creat'>Create Your Own Tournament</h1>
        <h4>Name of the Tournament</h4>
        <input id='as' type="text" />
        <h4>Description of the Tournament</h4>
        <textarea name="" id="as" cols="20" rows="05"></textarea>
        <select name="Event type" id="">
            <option value="">Choose one</option>
            <option value="">Coding</option>
            <option value="">Graphic Designing</option>
            <option value="">Others</option></select>
            <h5>For :</h5>
            College level <input type="Checkbox" className='chec' />
            District level <input type="Checkbox" className='chec' />
            <div className='upse'> <h4>Upload the poster: </h4>
            <button type='submit' className='upload-button'>
                 Upload
                </button></div>
            
            



                </div>

    </div>
  )
}

export default Create;