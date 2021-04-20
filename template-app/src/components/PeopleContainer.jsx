import React from 'react';
import PeopleCard from './PeopleCard';
import {Container, Row, Col} from 'react-bootstrap'

const PeopleContainer = (props) => {
    return(
        <>
        <Container>
            <Row> 
                {props.peoples.map(people => <Col md={4}><PeopleCard people={people}/></Col>)}
            </Row>
        </Container>
        </>
    )
}

export default PeopleContainer; 