import React from 'react'
import AnnouncementContainer from './AnnouncementContainer';
import '../styles/People.css';
const Announcements = () => {
    
    const announcements = [
        { 
            "title": "augue eget arcu",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
            "date": "January 1, 3000"
        }, 
        { 
            "title": "augue eget arcu",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
            "date": "January 1, 3000"
        },
        { 
            "title": "augue eget arcu",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
            "date": "January 1, 3000"
        },
        { 
            "title": "augue eget arcu",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
            "date": "January 1, 3000"
        },
        { 
            "title": "augue eget arcu",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
            "date": "January 1, 3000"
        },
        { 
            "title": "augue eget arcu",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus at.",
            "date": "January 1, 3000"
        }
    ]

    return (
        <>
            <h1 className="text-center">Announcements</h1>
            <AnnouncementContainer announcements={announcements} />
        </>
    )
}

export default Announcements; 

// export default People; 

// import React from 'react';

// const Announcements = () => {

//     return (
//         <>
//             <h3>Announcements component</h3>
//         </>
//     )
// }

// export default Announcements; 

