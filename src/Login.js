import React from 'react';
import './Login.css';
import { loginurl } from './spotify';

function Login() {
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" /> 
            <a href={loginurl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
