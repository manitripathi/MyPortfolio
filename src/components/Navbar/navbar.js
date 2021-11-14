import React from "react";
import './navbar.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <div className='Name'>Mani Tripathi</div>
                    <div class='navOptions'>
                        <a href='#App'>Home</a>
                        <a href='#about'>About</a>
                        <a href='#portfolio'>Portfolio</a>
                        <a href='#ResumeMain'>Resume</a>
                        <a href='#Contact'>Contact</a>
                    </div>
            </div>   
        )
    }
}