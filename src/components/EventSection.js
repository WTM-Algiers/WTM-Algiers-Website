import React from 'react'
import EventSlideShow from './EventSlideShow'
import greenShape from '../images/shapes/green-shape-1.svg'

import blueShape from '../images/shapes/blue-shape-1.svg'
import './EventSection.css'
const EventSection =() => {
    return <section className="eventSection">
        <h1 className="title"><span id ="our">OUR</span> EVENTS</h1>
        <div style={{width : "100%" , height:"30em" ,margin:"auto"}}>
        <div className="slideshow">
           <EventSlideShow></EventSlideShow>
           </div>
            <img src={greenShape} alt="greenshape" className="green-svg"></img>
           <img src={blueShape} alt="blueshape" className="blue-svg"></img>
         
           
        </div>
    </section>
}

export default EventSection