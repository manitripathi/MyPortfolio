import React from "react";
import './cover.css';
import ManiResume from './Mani_Tripathi-Resume.pdf';
import {Link} from "react-scroll";

function Cover(){
        return(
            <div className='headBackImg'>
               <div className='t1'>Hi, I am Mani Tripathi</div>
               <div className='t2'>A Front-end Developer</div>
               <br/>
               <p className='t3'>Get ready to turn ideas into reality</p>
               <div className='flexBtn'>
                   <button className='btn btn1' id='btn1'>
                   {/* <a href='#Contact' className='btn11'>Hire Me</a> */}
                   <Link to='Contact' className='btn11' spy={true} smooth={true}>Hire Me</Link>
                   </button>
                   <button className='btn btn2' id='btn2'>
                   <a href={ManiResume} className='btn11'><span className='pdf'>Get Resume</span></a>
                   
                   </button>
            </div>
            </div>
        );
}
export default Cover;