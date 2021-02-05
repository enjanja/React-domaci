//individual card

import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    //props - donosi 
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    {/* props.path uzima sta god da smo mu dali kao props, i uzima path komponentu toga */}
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel Image" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
