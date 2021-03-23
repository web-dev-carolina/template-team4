import React from 'react'
import PeopleContainer from './PeopleContainer';
import '../styles/People.css';
const People = () => {
    
    const peoples = [
        { 
            "fname": "person first name",
            "lname": "person last name",
            "pos": "person's position",
            "bio": "meet-the-team bio"
        }, 
        { 
            "fname": "person first name",
            "lname": "person last name",
            "pos": "person's position",
            "bio": "meet-the-team bio"
        },
        { 
            "fname": "person first name",
            "lname": "person last name",
            "pos": "person's position",
            "bio": "meet-the-team bio"
        }
    ]

    return (
        <>
            <h1>Meet the Board</h1>
            <PeopleContainer peoples={peoples} />
        </>
    )
}

export default People; 