import React from 'react';
import Landing from '../components/Landing';
import Announcements from '../components/Announcements';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import About from '../components/About';
const Home = () => {

    return (
        <>
            <h1>Home</h1>
            <h3>USE REACT-BOOTSTRAP / BOOTSTRAP  AS MUCH AS POSSIBLE</h3>
            <Landing/>
            <Announcements/>
            <About/>
            <Gallery/>
            <Testimonials/>
            <Contact/>
            <h3>TODO: FOOTER</h3>
        </>
    )
}

export default Home;