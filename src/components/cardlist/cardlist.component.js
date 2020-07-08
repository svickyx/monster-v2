import React from 'react';
import {Card} from '../card/card';
import './cardlist.css';

export const CardList = (props)=> {
    return (
    <div className= 'cardlist' >
        {props.monsters.map(monster => {
            return <Card key={monster.id} monster = {monster}/>
        }
        )}
    </div>
    )
}