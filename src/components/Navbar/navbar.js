import React from "react";
import './navbar.css';
import { Link } from "react-scroll";

export default class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <div className='Name'>Mani Tripathi</div>
                    <div class='navOptions'>
                        <Link to='App' className='links' spy={true} smooth={true}>Home</Link>
                        <Link to='about' className='links' spy={true} smooth={true}>About</Link>
                        <Link to='portfolio' className='links' spy={true} smooth={true}>Portfolio</Link>
                        <Link to='ResumeMain' className='links' spy={true} smooth={true}>Resume</Link>
                        <Link to='Contact' className='links' spy={true} smooth={true}>Contact</Link>
                    </div>
            </div>   
        )
    }
}