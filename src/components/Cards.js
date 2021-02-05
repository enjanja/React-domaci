//all the cards
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Get familiar with the world of digital art</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {/* here we pass the card components */}
                        <CardItem 
                            src="image/img-18.jpg"
                            text="Satan, also known as the Devil, is an entity in the Abrahamic religions that seduces humans into sin or falsehood. "
                            label="Pinterest"
                            path="/etymology"
                        />
                        <CardItem 
                            src="image/img-17.jpg"
                            text="Satanism is a group of ideological and philosophical beliefs based on Satan."
                            label="Tumblr"
                            path="/etymology"
                        />
                    
                    </ul>
                    {/* if there are 2 uls, when its big those 2 uls will act as rows */}
                    {/* when its smal they will still be rows but look like columns
                    becaus their contet goes to column or rather splits */}
                    <ul className="cards__items">
                        {/* here we pass the card components */}
                        <CardItem 
                            src="image/img-29.jpg"
                            text="The word Satan was not originally a proper name but rather an ordinary noun meaning the adversary; in this context, it appears at several points in the Old Testament."
                            label="Instagram"
                            path="/satanism"
                        />
                        <CardItem 
                            src="image/img-19.jpg"
                            text="Historical and anthropological research suggests that nearly all societies have developed the idea of a sinister and anti-human force that can hide itself within society"
                            label="Drawio"
                            path="/satanism"
                        />
                        <CardItem 
                            src="image/img-28.jpg"
                            text="As the late medieval gave way to the early modern period, European Christendom experienced a schism between the established Roman Catholic Church and the breakaway Protestant movement.
                            "
                            label="Clip"
                            path="/satanism"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
