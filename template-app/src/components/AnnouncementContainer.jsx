import React from 'react';
import AnnouncementCard from './AnnouncementCard';
import {Container, Row, Col} from 'react-bootstrap'

const AnnouncementContainer = (props) => {
    return(
        <>
        <Container>
            <Row> 
                {props.announcements.map(announcement => <Col md={4}><AnnouncementCard announcement={announcement}/></Col>)}
            </Row>
        </Container>
        </>
    )
}

export default AnnouncementContainer; 