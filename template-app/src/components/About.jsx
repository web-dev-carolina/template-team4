import React from 'react';
import '../styles/About.css';

const About = () => {
    const myStyle = {
        marginLeft: 50,
        marginRight: 50
    }

    return (
        <>
            <h1 class="text-center" style={myStyle}>About Us</h1>
            <h3 class="text-center" style={myStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            <text class="text-center">
                <p style={myStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </text>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    <h3 class="text-center">Main Idea 1</h3>
                    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="col-sm">
                    <h3 class="text-center">Main Idea 2</h3>
                    <p class="text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                    <h3 class="text-center">Main Idea 3</h3>
                    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="col-sm">
                    <h3 class="text-center">Main Idea 4</h3>
                    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About; 