import React, { Component } from 'react';
import './contact.css';
import mail from './mail.png';
import phone from './phone.png';

export default class Contact extends Component{
    render(){
        return(
            <div className='footerContact'  id='Contact'>
                <div className='Heading'>Contact</div>
                <hr className='line'/>
                <center>
                <div className='main'>
                    <h2 className='main1'>Let's Connect</h2>
                    
                    <div className='main11'>
                        <img src={mail} className='image' alt=""></img>
                        <div>manitripathi.023@gmail.com</div>
                    </div>
                    <div className='main12'>
                        <img src={phone} className='image' alt=""></img>
                        <div>8533974635</div>
                    </div>
                    
                </div>
                </center>
            </div>
        )
    }
}