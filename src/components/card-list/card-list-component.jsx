import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';



export const CardList = props => (
    <div className='card-list'>
        {
          props.paintings.map(painting => (
          <Card key={painting.id} painting={painting} />
          ))
        }
    </div>
);