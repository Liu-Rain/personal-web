import React from 'react';
import "../styles/Education.css";
import amazonPic from '../img/amazon.png'





export default function Education(propt) {
    
    

    return(
        <div id='education'>
            <div>
                <div><b>June 2023 - Present</b>The University of Adelaide</div>
                <div>
                    <div>Web Practice-Amazon</div>
                    <div className='amazon-pic-div' ><img src={amazonPic} /></div>
                    <div>JavaScript HTML CSS</div>
                </div>
            </div>

            <div>Chongqing University</div>
        </div>
    )
}
