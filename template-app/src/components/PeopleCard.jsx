import React from 'react';
import Card from 'react-bootstrap/Card';

const PeopleCard = (props) => {
    const myStyle = {
        color: "blue",
        backgroundColor: "white"
    }
    return(
        <>
        <Card>
            <Card.Body style = {myStyle}>
                <Card.Title>{props.people.fname} {props.people.lname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.people.pos}</Card.Subtitle>
                <Card.Text>
                    {props.people.bio}
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )

}

export default PeopleCard; 