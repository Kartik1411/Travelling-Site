import React from 'react'
import { Button } from './Button';
import './Main-Section.css';
import '../App.css';

function mainSection() {
    return (
        <div className='main-container'> 
            <h1>
                Let's Plan a Trip
            </h1>

            <p>What are you waiting for?</p>

            <div className="main-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> GET STARTED </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> WATCH TRAILER <i className='fas fa-play-circle' /> </Button>
            </div>


        </div>
    )
}

export default mainSection;
