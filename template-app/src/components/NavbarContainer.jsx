import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Megan from '../pages/Megan';
import Jackson from '../pages/Jackson';
import Olivia from '../pages/Olivia';
import Nima from '../pages/Nima';

const NavbarContainer = () => {

    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" className="navbar">
                <Navbar.Brand className="mr-auto logo-nav">Template 4</Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/"> Home </Nav.Link>
                    <Nav.Link as={Link} to="/megan">Megan</Nav.Link>
                    <Nav.Link as={Link} to="/jackson">Jackson</Nav.Link>
                    <Nav.Link as={Link} to="/olivia">Olivia</Nav.Link>
                    <Nav.Link as={Link} to="/nima">Nima</Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/megan" component={Megan} />
                <Route exact path="/jackson" component={Jackson} />
                <Route exact path="/olivia" component={Olivia} />
                <Route exact path="/nima" component={Nima} />
            </Switch>
        </>
        
    )
}

export default NavbarContainer; 