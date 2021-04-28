import React from 'react';
import About from '../components/About';
import People from '../components/People';
import Announcements from '../components/Announcements';
const Olivia = () => {

    return (
        <>
            <h1>Olivia's workspace</h1>
            <p>Components linked below</p>
            <Announcements></Announcements>
            <About></About>
            <People></People>
        </>
    )
}

export default Olivia; 