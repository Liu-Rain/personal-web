import React, { useEffect } from 'react';
import "../styles/Topbar.css";
import L from "../img/initial-L.jpeg";


export default function Topbar() {


    function homeButtonClick() { window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function aboutButtonClick() {
        window.scrollTo({
            top:600,
            behavior: 'smooth'
        })
    }

    function educationButtonClick() {
        
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        })
    }

    function experienceButtonClick() {
        const target = document.getElementById('experience');
        target.scrollIntoView({
            behavior: 'smooth'
        })
    }


    



    return(
        <div className='topbar-main-container'>
            <div className='topbar-left-section' >
                <img src={L}/>
            </div>
            <div className='topbar-right-section' >
                <button className='home-button' onClick={homeButtonClick}>Home</button>
                <button className='about-button' onClick={aboutButtonClick}>About</button>
                <button className='education-button' onClick={educationButtonClick}>Education</button>
                <button className='experience-button' onClick={experienceButtonClick}>Experience</button>
                <button className='talkToMe-button'>Talk To Me</button>
            </div>
        </div>
    )
}