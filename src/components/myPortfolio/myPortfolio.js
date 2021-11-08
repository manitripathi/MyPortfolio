import React, { Component } from 'react';
import './myPortfolio.css';
import ToDoList from './ToDoList.webp';
import LoveCalculator from './LoveCalculator.jpg';
import clock from './clock.jpg';
import car from './car.jpg';

export default class MyPortfolio extends Component{
    render(){
        return(
            <div id='portfolio'>
                <div className='Heading'>My Portfolio</div>
                <hr className='line'/>
                <div className='portfolio'>
                    <a href='https://manitripathi.github.io/ToDoAppJS/'><img src={ToDoList} className='links' alt='img'></img></a>
                    <a href='https://manitripathi.github.io/loveCalculator/'><img src={LoveCalculator} className='links' alt='img'></img></a>
                    <a href='https://manitripathi.github.io/ReminderClockApp/'><img src={clock} className='links' alt='img'></img></a>
                    <a href='https://manitripathi.github.io/css5-animation/'><img src={car} className='links' alt='img'></img></a>
                </div>
            </div>
        )
    }
}