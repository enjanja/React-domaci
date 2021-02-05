//all the cards
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {/* here we pass the card components */}
                        <CardItem 
                            src="image/img-8.jpg"
                            text="Picture size changes based on the amount of text displayed here... fuck"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="image/img-1.jpg"
                            text="Does this change? Nope, it depends on the first picture"
                            label="Adventure"
                            path="/services"
                        />
                    
                    </ul>
                    {/* if there are 2 uls, when its big those 2 uls will act as rows */}
                    {/* when its smal they will still be rows but look like columns
                    becaus their contet goes to column or rather splits */}
                    <ul className="cards__items">
                        {/* here we pass the card components */}
                        <CardItem 
                            src="image/img-8.jpg"
                            text="Picture size changes based on the amount of text displayed here... fuck"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="image/img-1.jpg"
                            text="Does this change? Nope, it depends on the first picture"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="image/img-1.jpg"
                            text="Does this change? Nope, it depends on the first picture"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
