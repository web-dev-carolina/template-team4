import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {getEvents} from '../api'
import "react-big-calendar/lib/css/react-big-calendar.css";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const Jackson = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchItems = async () => {
        const e = await getEvents(); //
        setItems(e);
    }
   fetchItems();
}, []);


    return ( 
      <div style={{ height: '500pt', zIndex: -1 }}>
        <Calendar
            events={
              items.map(event   => (    
                   {
                  title: event.title,
                  start: new Date(event.startYear, event.startMonth, event.startDay, 
                                  event.startHour, event.startMin),
                  end: new Date(event.endYear, event.endMonth, event.endDay, 
                                event.endHour, event.endMin),
                })
                )}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            defaultView="month"
            localizer={localizer}
            style={{ height: "100vh" }}
          />
      </div>
    );
  
}

export default Jackson;