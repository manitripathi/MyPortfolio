import React from "react";
import './navbar.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <div className='Name'>Mani Tripathi</div>
                    <div class='navOptions'>
                        <a href='#App' alt='home'>Home</a>
                        <a href='#about' alt='About'>About</a>
                        <a href='#portfolio' alt='Portfolio'>Portfolio</a>
                        <a href='#ResumeMain' alt='Resume'>Resume</a>
                        <a href='#Contact' alt='Contact'>Contact</a>
                    </div>
            </div>   
        )
    }
}