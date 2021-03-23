import React from 'react';
import PeopleCard from './PeopleCard';

const PeopleContainer = (props) => {
    return(
        <>
        {props.peoples.map(people => <PeopleCard people={people}/>)}
        </>
    )
}

export default PeopleContainer; 