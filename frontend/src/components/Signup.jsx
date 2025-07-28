import React, { useState } from 'react';
import "../Styles/Signup.css";
import photo12 from "../Data/hackathon/Hackathon/vect1.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                email,
                password
            });
            alert('Registration successful! Please login.');
            navigate('/login');
        } catch (err) {
            alert(err.response?.data?.message || 'Registration failed');
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
                    <input 
                        id='input1' 
                        type="submit" 
                        value="Sign Up" 
                        className='submit'  
                        required
                    />
                </form>
            </div>
            <div className='photo12'>
                <img 
                    src={photo12} 
                    width="75%" 
                    alt="Illustration" 
                />
            </div>
        </section>
    );
}

export default Signup;

