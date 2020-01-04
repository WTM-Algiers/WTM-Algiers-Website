import React from 'react'
import EventSlide from './EventSlide'
import next from '../images/Icons/next.svg'
import previous from '../images/Icons/precedent.svg'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import loadgif from '../images/loading.gif'
import './SlideShow.css'
import { useEffect, useState } from 'react';


const EventSlideShow = ({ eventData }) => {
    const [loading, setLoading] = useState(true);
    /// Loading data
    const [data, setData] = useState([]);

    useEffect(() => {
        // load events data from markdown instead of eventData object 
        setTimeout(() => {
            setData(eventData)
            setLoading(false)
        }, 4000)

    }, [])
    const events = data.map(event => {
        return <EventSlide
            image={event.image}
            title={event.title}
            description={event.description} />
    })
    return (
        <div className="SlideShowContent">
            <Slider
                duration={500}
                classNames={{
                    slider: 'slider',
                    track: 'track',
                }}
                nextButton={<img className="slideButton" src={next} title="next event" alt="next" />}
                previousButton={<img className="slideButton" src={previous} title="previous event" alt="previous" />}
            >

                {(!loading) ? events.map((slide, index) => <div key={index}>{slide}</div>) : <div key={0}>
                    <img className="loading" src={loadgif} alt="loading" width={100} height={100} />
                </div>}
            </Slider>
        </div>
    )
}

export default EventSlideShow