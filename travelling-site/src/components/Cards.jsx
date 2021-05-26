import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Image1 from '../images/1.jpg';
import Image2 from '../images/2.jpg';
import Image4 from '../images/4.jpg';
import Image5 from '../images/5.jpg';
import Image6 from '../images/6.jpg';
// import Image7 from '../images/7.jpg';

function Cards() {
    return (
        <div className="cards"> 
            <h1>Check Out these Splendid Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={Image1}
                            text='Explore the Hidden Palces'
                            label='Hills'
                            path='/services'
                        />

                        <CardItem 
                            src={Image4}
                            text='Something new to Explore'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                            src={Image2}
                            text='Try something new in Pink City'
                            label='Pink City'
                            path='/services'
                        />

                        <CardItem 
                            src={Image5}
                            text='Love'
                            label='City of Love'
                            path='/services'
                        />

                        <CardItem 
                            src={Image6}
                            text='Something new to Explore'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
;