import React from 'react'
import EventImage from './EventImage'
import './EventSlide.css'
const EventSlide= ({image,title,description,link}) => {

    return <div className="eventSlide">
        <div className="eventImage">
            <EventImage image={image} width="350" height="350"></EventImage>
        </div>
        <div className="eventContent">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
}

export default EventSlide