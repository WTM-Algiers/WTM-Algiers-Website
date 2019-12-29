import React from 'react'
import EventSlideShow from './EventSlideShow'
import greenShape from '../images/shapes/green-shape-1.svg'

import blueShape from '../images/shapes/blue-shape-1.svg'
import './EventSection.css'
const EventSection =() => {
    return <section className="eventSection">
        <h1 className="title-section"><span id ="our">OUR</span> EVENTS</h1>
        <div className ="section-container">
            <div className="slideshow">
                <EventSlideShow></EventSlideShow>
            </div>   
        </div>
        <img src={greenShape} alt="greenshape" className="green-svg"></img>
        <img src={blueShape} alt="blueshape" className="blue-svg"></img>
        
    </section>
}

export default EventSection