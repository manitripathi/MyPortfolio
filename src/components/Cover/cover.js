import React from "react";
import './cover.css';
import ManiResume from './Mani_Resume.pdf';

class Cover extends React.Component{
    render(){
        return(
            <div className='headBackImg'>
               <div className='t1'>Hi, I am Mani Tripathi</div>
               <div className='t2'>A Front-end Developer</div>
               <br/>
               <p className='t3'>Get ready to turn ideas into reality</p>
               <div className='flexBtn'>
                   <button className='btn btn1' id='btn1'>
                   <a href='#Contact' className='btn11'>Hire Me</a>
                   </button>
                   <button className='btn btn2' id='btn2'>
                   <a href={ManiResume} className='btn11'>Get Resume</a>
                   </button>
            </div>
            </div>
        );
    }
}
export default Cover;