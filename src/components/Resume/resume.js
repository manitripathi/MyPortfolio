import React, { Component } from 'react';
import './resume.css';
import mail from './mail.png';
import phone from './phone.png';
import location from './location.png';
import github from './github.png';

export default class Resume extends Component{
    render(){
        return(
            <center>
            <div id='ResumeMain'>
                <div className='ResumeHeading' id='Resume'>Resume</div>
                <hr className='line1'/>
                <div className='resumeStart'>
                    <div className='ResumeHeader'>
                        <div className='Name'>Mani Tripathi</div>
                        <div className='subName'>Web Developer</div>
                        <hr className='line2'/>
                        <p className='ResumeObjctive'>Motivated individual who demonstrates strong work ethic & creative ability. I could offer my contribution positively for my personal
                           growth as well as for the growth of organisation.</p>
                    </div>
                </div>
                <div className='mainBlock'>
                  <div className='mainBlock1'>
                    <div>
                            <div className='Logo'><img src={mail}></img></div>
                            <div className='info'>manitripathi.023@gmail.com</div>
                            <div className='Logo'><img src={phone}></img></div>
                            <div className='info'>8533974635</div>
                            <div className='Logo'><img src={location} className='Logo'></img></div>
                            <div className='info'>Gorakhpur, Uttar Pradesh,India</div>
                            <div className='Logo'><img src={github} className='Logo'></img></div>
                            <div className='info'><a href='https://github.com/manitripathi' className='link'>github.com/manitripathi</a></div>
                    </div>
                    <div>
                        <h2>SKILLS</h2>
                        <hr className='stLine'/>
                        <div className='sideDetails'>
                            <span className='skillSet'>HTML5</span>
                            <span className='skillSet'>CSS</span>
                            <span className='skillSet'>JAVASCRIPT</span>
                            <span className='skillSet'>GIT</span>
                            <span className='skillSet'>REACT</span>
                            <span className='skillSet'>C/C++</span>
                            <span className='skillSet'>VERILOG HDL</span>
                            <span className='skillSet'>MS-OFFICE</span>
                        </div>
                    </div>
                    <div>
                        <h2>LANGUAGES</h2>
                        <hr className='stLine'/>
                        <div className='sideDetails'>
                            <span className='skillSet'>ENGLISH</span>
                            <span className='skillSet'>HINDI</span>
                        </div>
                    </div>
                    <div>
                        <h2>INTERESTS</h2>
                        <hr className='stLine'/>
                        <div className='sideDetails'>
                            <span className='skillSet'>SKETCHING</span>
                            <span className='skillSet'>TRAVELLING</span>
                            <span className='skillSet'>YOGA</span>
                        </div>
                    </div>
                </div>
                <div className='mainBlock2'>
                    <div className='subBlock1'>
                        <h2>EDUCATION</h2>
                        <hr className='stLine1'/>
                        <div className='L1'>B.Tech (Electronics & Communication Engineering)</div>
                        <div className='details'>IET MJP Rohilkhand University</div>
                        <div className='L2'>06/2016 - 09/2020</div>
                        <div>-8.10 cpga</div>  
                        <br/>
                     <div>
                        <div className='L1'>Passed 10+2</div>
                        <div className='details'>RPM Academy (CBSE Board)</div>
                        <div className='L21'>06/2016</div>
                        <div>-72%</div>  
                    </div> 
                    <br/>
                    <div>
                        <div className='L1'>Passed 10</div>
                        <div className='details'>RPM Academy (CBSE Board)</div>
                        <div className='L21'>06/2014</div>
                        <div>-8.8 cpga</div>  
                    </div>
                    <div><br/>
                    <h2>WORK EXPERIENCE</h2>
                        <hr className='stLine1'/>
                        <div className='L1'>Graduate Engineer Trainee</div>
                        <div className='details'>Huawei Technologies India PVT LTD</div>
                        <div className='L2'>05/2021 - Present</div>
                        <div className='L3'>-Working as an RF Engineer, monitoring and analysing the data according to standards of telecommunications.</div>  
                        <br/>
                    </div>  
                    <div>
                    <h2>CERTIFICATES</h2>
                        <hr className='stLine1'/>
                        <div className='details'>VLSI DESIGN Using Verilog HDL and FPGA</div>
                        <div className='L2'>06/2019 - 07/2019</div>
                        <div className='L3'>-Completed 6 Weeks Industrial training in VLSI Design using Verilog HDL & FPGA from DKOP LABS PVT LTD, NOIDA, U.P</div>
                        <br/>
                        <div className='details'>C++ Programming Language</div>
                        <div className='L2'>06/2017</div>
                        <div className='L3'>-Completed 4 Weeks training on C++ Programming Language from NIIT</div>  
                        <br/>
                    </div>   
                    <h2>PROJECTS</h2>
                        <hr className='stLine1'/>
                        <div className='details'>Major Project: Pipelined 16-bit RISC Processor using Verilog HDL</div>
                        <div className='L2'>10/2019 - 02/2020</div>
                        <div className='L3'>-Final year Project Implemented & simulated on Modelsim using Verilog HDL in which multiple instructions</div>
                        <br/>
                        <div className='details'><a href='https://manitripathi.github.io/ToDoAppJS/'>TODO LIST APP (CLICK HERE)</a></div>
                        <div className='L3'>-This project contains the capabilties of JS connecting the HTML pages with functionality written in JS files, will be using multiple DOM functions. </div>  
                        <br/>
                        <div className='details'><a href='https://manitripathi.github.io/ReminderClockApp/'>DIGITAL CLOCK (CLICK HERE)</a></div>
                        <div className='L3'>-Responsive web design of Digital Clock using HTML, CSS & Javascript. </div>  
                        <br/>
                        <div className='details'><a href='https://manitripathi.github.io/css5-animation/'>CAR ANIMATION (CLICK HERE)</a></div>
                        <div className='L3'>-Web page with CSS Animation effects, where car looks like moving/running on the road. </div>  
                        <br/>
                    </div> 
                    </div>
                </div>
                </div>
            </center>
        )
    }
}