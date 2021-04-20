import React from 'react'
import PeopleContainer from './PeopleContainer';
import '../styles/People.css';
const People = () => {
    
    const peoples = [
        { 
            "fname": "Jane",
            "lname": "Doe",
            "pos": "President",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio."
        }, 
        { 
            "fname": "John",
            "lname": "Apple",
            "pos": "Vice President",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio."
        },
        { 
            "fname": "Eric",
            "lname": "Adams",
            "pos": "Secretary",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio."
        },
        { 
            "fname": "Jamie",
            "lname": "Anderson",
            "pos": "Treasurer",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio."
        },
        { 
            "fname": "Nicole",
            "lname": "Jones",
            "pos": "Director of Social Engagement",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio."
        },
        { 
            "fname": "Mary",
            "lname": "Smith",
            "pos": "Director of Outreach",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio."
        },
        { 
            "fname": "Catherine",
            "lname": "Jenkins",
            "pos": "Director of Marketing",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio."
        },
        { 
            "fname": "Meredith",
            "lname": "Reynolds",
            "pos": "Director of Membership",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu consequat ac felis donec et odio."
        }
    ]

    return (
        <>
            <h1 className="text-center">Meet the Board</h1>
            <PeopleContainer peoples={peoples} />
        </>
    )
}

export default People; 