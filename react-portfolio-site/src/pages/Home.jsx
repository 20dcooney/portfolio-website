//import { useState } from 'react'
import React from 'react';
import '../css/Home.css'
import Navbar from '../components/Navbar'
import Typewriter from "typewriter-effect"

function Home() {

    return (


        <><Navbar></Navbar>
        <div className="hero">
            <div className="hero-text">
            <div className="consolas">Hi, my name is</div>
            <div>David Cooney</div>
            <div className="hero-offset movable">
                <Typewriter options={{ strings: ['Java', 'Python', 'PyTorch', 'React', 'Vue.js' ],
                            autoStart: true,
                            loop: true, 
                            pauseFor: 2000}} />
                Software Engineer</div>
            </div>
            </div></>

    )
}


export default Home