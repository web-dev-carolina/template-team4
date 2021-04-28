import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

const AnnouncementCard = (props) => {
    const myStyle = {
        color: "#F4E8DD", 
        backgroundColor: "#4F758B"
    }
    return(
        <>
         <div style={{marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20}}>
         <CardDeck style = {{width: '18rem'}}>
            <Card border = "dark"> 
                <Card.Body style = {myStyle}>
                    <Card.Title style ={{color: "#C4D600", textAlign: "center"}}>{props.announcement.title}</Card.Title>
                    <Card.Subtitle style ={{textAlign: "center"}}>{props.announcement.date}</Card.Subtitle>
                    <Card.Text>
                        {props.announcement.description}
                    </Card.Text>
                </Card.Body>
            </Card>
         </CardDeck>
         </div>
        </>
    )

}

export default AnnouncementCard; 