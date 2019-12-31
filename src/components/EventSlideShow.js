import React from 'react'
import EventSlide from './EventSlide'
import next from '../images/Icons/next.svg'
import previous from '../images/Icons/precedent.svg'
import img_bg from '../images/gatsby-astronaut.png'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import loadgif from '../images/loading.gif'
import './SlideShow.css'
import { useEffect, useState } from 'react';

const eventData = [
    {
        title: "IWD'20",
        image: img_bg,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis.Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Risus nec feugiat in fermentum…."

    },
    {
        title: "IWD'21",
        image: img_bg,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis.Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Risus nec feugiat in fermentum…."

    },
    {
        title: "IWD'22",
        image: img_bg,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis.Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Risus nec feugiat in fermentum…."

    },


]


const EventSlideShow = () => {
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
        return <EventSlide image={event.image} title={event.title} description={event.description} />
    })
    return (
        <div className="SlideShowContent">
            <Slider
                duration={500}
                classNames={{
                    slider: 'slider',
                    track: 'track',
                }}
                nextButton={<img className="slideButton" src={next} title="next event" />}
                previousButton={<img className="slideButton" src={previous} title="previous event" />}
            >

                {(!loading) ? events.map((slide, index) => <div key={index}>{slide}</div>) : <div key={0}>
                    <img className="loading" src={loadgif} width={100} height={100} />
                </div>}
            </Slider>
        </div>
    )
}

export default EventSlideShow