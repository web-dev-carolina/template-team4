import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import profilePic from '../assets/profile_pic.png'

const PeopleCard = (props) => {
    const myStyle = {
        color: "#F4E8DD", 
        backgroundColor: "#4F758B"
    }
    return(
        <>
         <div style={{marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20}}>
         <CardDeck style = {{width: '18rem'}}>
            <Card border = "dark"> 
                <Card.Img variant = "top" src = {profilePic}></Card.Img>
                <Card.Body style = {myStyle}>
                    <Card.Title style ={{color: "#C4D600"}}>{props.people.fname} {props.people.lname}</Card.Title>
                    <Card.Subtitle>{props.people.pos}</Card.Subtitle>
                    <Card.Text>
                        {props.people.bio}
                    </Card.Text>
                </Card.Body>
            </Card>
         </CardDeck>
         </div>
        </>
    )

}

export default PeopleCard; 