import React from 'react'
import EventSlide from './EventSlide'
import next from '../images/Icons/next.svg'
import previous from '../images/Icons/precedent.svg'

import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import './SlideShow.css'
import { useState } from 'react';
const EventSlideShow = ()=> {
    const eventData =[
        {
            title:"IWD'20",
            image:require("../images/gatsby-astronaut.png"),
            description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis.Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Risus nec feugiat in fermentum…."
            
        },
        {
            title:"IWD'21",
            image:require("../images/gatsby-astronaut.png"),
            description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis.Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Risus nec feugiat in fermentum…."
            
        },
        {
            title:"IWD'22",
            image:require("../images/gatsby-astronaut.png"),
            description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis.Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Risus nec feugiat in fermentum…."
            
        }

    ]

    const events = eventData.map(event => {
        return <EventSlide image={event.image} title={event.title} description={event.description}></EventSlide>
    })
      return <Slider
      classNames ={{
          slider :'slider',
          track :'track',
      }}
        nextButton={<img className="slideButton" src={next} title="next event"></img>}
        
        previousButton={<img className="slideButton" src={previous} title="previous event"></img>}
      >
        {events.map((slide, index) => <div key={index}>
            {slide}
        </div>)}
      </Slider>
}

const SlideButton = ({onSlide,icon,tooltip})=>{
    return <div className="slideButtonContainer">
        <button className="slideButton" title={tooltip}  onClick={e => onSlide(e)}><img src={icon} alt={tooltip}></img></button>
    </div>
}

export default EventSlideShow