import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img 
             alt='painting'
             src={`https://robohash.org/${props.painting.id}?set=set2&size=180x180`}
        />
        <h2> { props.painting.name } </h2>
        <p>{ props.painting.email }</p>
    </div>
);