import React from 'react';
import './about.css';
import html5 from './html.png';
import css from './css.png';
import js from './js.png';
import react from './react.png';
import github from './github.png';

export default class About extends React.Component{
    render(){
        return(
          <div className='about' id="about">
              <span className='AboutMe'>About Me</span>
              <hr className='hrLine'/>
              <p>I'm a web designer & front-end developer specializes in creating dynamic and beautiful web pages. I had a experience in Huawei Technologies India PVT LTD as an RF Engineer in Telecommunication field. I found myself into web development in 2021, and have been loving every minute of it.</p>
              <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me sketching, travelling, cooking or working out in the park.</p>
              <br/>
              <div className='skills'>
                  <h4>Languages/Library/Technology</h4>
                  <div>
                      <img src={html5} className='logo' alt=""/>
                      <img src={css} className='logo' alt=""/>
                      <img src={js} className='logo' alt=""/>
                      <img src={react} className='logo' alt=""/>
                      <img src={github} className='logo' alt=""/>
                      
                  </div>
              </div>
          </div>
        )
    }
}
