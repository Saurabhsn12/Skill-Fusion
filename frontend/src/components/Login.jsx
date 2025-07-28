import React, { useState } from 'react';
import "../Styles/Login.css";
import photo11 from "../Data/hackathon/Coderimage/coder-3462385-2896007.webp";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err) {
            alert(err.response?.data || 'Login failed');
        }
    };

    return (
        <section className='section'>
            <div className='wrapper'>
                <h1 className='find'>Find jobs through your community</h1>
                <form onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input 
                        id='input1' 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <p>Password</p>
                    <input 
                        id='input1' 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <p className='forgot'>Forgot Password?</p>
                    <input 
                        id='input1'
                        type="submit" 
                        value="Sign in" 
                        className='submit'  
                        required
                    />
                </form>
            </div>
            <div className='photo'>
                <img src={photo11} alt="Coder illustration" />
            </div>
        </section>
    );
}

export default Login;

