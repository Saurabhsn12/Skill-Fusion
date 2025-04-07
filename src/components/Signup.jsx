import React from 'react'
import "../Styles/Signup.css";
import photo12 from "../Data/hackathon/Hackathon/vect1.png";



const Signup = () => {
    return (
        <section className='section'>
        <div className='wrapper'>
        <h1 className='find'>Find jobs through your community</h1>
        <p>Username</p>
        <input id='input1' type="Username" required />
        <p>Email</p>
        <input id='input1' type="Username" required />
        <p>Password</p>
        <input id='input1' type="Password" required />

        <input id='input1' type="Submit" value={"Sign Up"} className='submit'  required/>
        </div>
        <div className='photo12'><img
                    src={photo12}
                    width={"75%"}
                    // alt="First slide"
                /></div>
        </section>
          

 )
}

export default Signup;

