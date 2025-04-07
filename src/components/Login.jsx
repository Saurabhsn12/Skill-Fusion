import React from 'react'
import "../Styles/Login.css";
import photo11 from "../Data/hackathon/Coderimage/coder-3462385-2896007.webp";



const Login = ({Login}) => {
    return (
           <section className='section'>
            <div className='wrapper'>
            <h1 className='find'>Find jobs through your community</h1>
            <p>Email</p>
            <input id='input1' type="Username" required />
            <p>Password</p>
            <input id='input1' type="Password" required />
            <p className='forgot'>Forgot Password?</p>
            <input  id='input1'type="Submit" value={"Sign in"} className='submit'  required/>
            </div>
            <div className='photo'><img
                    src={photo11}
                    // alt="First slide"
                /></div>
            </section>
          

 )
}

export default Login;

