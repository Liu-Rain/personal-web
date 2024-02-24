import React, {useState, useEffect} from 'react';
import "../styles/AboutMe.css";
import me from "../img/me.png"
import bigMe from '../img/me.JPG'


export default function AboutMe(propt) {

    var windowHeight = window.innerHeight;
    

    const [showBigMe, setShowBigMe] = useState(true);



    React.useEffect(()=>{
        if (propt.scrollingY > 500){
            setShowBigMe(false)
        }else if (propt.scrollingY <= 500){
            setShowBigMe(true)
        }

        

    },[propt.scrollingY])


    

    return(
        <div id='aboutme'>
            {showBigMe && <div className='aboutme-img-container' style={{height: windowHeight}}>
                <img src={me} className='bigme'/>
            </div>}
            <div className='aboutme-detail'>
                <div className='aboutme-left-section'>
                    <img src={me}/>
                </div>
                <div className='aboutme-right-section'>
                    <h1>Hi!</h1>
                    <h1>I am <span className='myName'>Jen-Hao Liu</span></h1>
                    <p>I am writing to express my interest in the Computer Science Internship listed on The University of Adelaide CareerHub. As a postgraduate pursuing a degree in Master of Computing and Innovation at The University of Adelaide, I am enthusiastic about applying the concepts I have learned in a practical setting. I am particularly drawn to Outhire due to the valuable opportunity to work with profession teams and learning from them.</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}