import React from 'react';
import "../Styles/Project.css"; 
import envp from "../Data/hackathon/Coderimage/coder-3462385-2896007.webp";

const Project = () => {
  return (
   <div className='project'>
        <div className='anv'>
        <img
                    src={envp}
                    // alt="First slide"
                />

        </div>

        <div>
           <div className='upp'> <h1>Upload Your Project Here</h1></div>
          
        <div>

            <p>Project Name</p>
            <input id='input1' type="Username" required />
            <p>Project Description</p>
            <textarea
            id='product-description'
            name='product-description'
            rows='4'
            required
          ></textarea>
        </div>
          <div>  <form className='project-form'>
                 <input type='file' id='file-input' accept='.zip' />
                <label htmlFor='file-input' className='file-label'>
          Choose a .zip file
                     </label>
                <button type='submit' className='upload-button'>
                 Upload
                </button>
                </form>
      </div>

        </div>
   </div>
  );
}

export default Project;

