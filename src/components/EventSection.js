import React from 'react'
import EventSlideShow from './EventSlideShow'
import './EventSection.css'
const EventSection =() => {
    return <section>
        <h1 className="title"><span id ="our">OUR</span> EVENTS</h1>
        <div style={{width : "100%" , height:"30em" ,margin:"auto"}}>
            <EventSlideShow></EventSlideShow>
        </div>
    </section>
}

export default EventSection