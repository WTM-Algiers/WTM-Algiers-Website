import React,{useEffect} from 'react'
import { Link } from "gatsby";
import EventImage from './EventImage'
import './EventSlide.css'
const EventSlide = ({id, image, title, description, link }) => {
    useEffect(() => {
        console.log({
            image : image,
            title : title,
            link : link
        });
        
       
    }, [])
    return <div className="eventSlide">
        <div className="eventImage">
            <EventImage id={id} image={image} width="350" height="350" />
            <div className="b-container">
                <Link to={link}>
                    <button className="flat-butt">More Details...</button>
                </Link>
            </div>
        </div>
        <div className="eventContent">
            <h1>{title.replace('-',' ')}</h1>
            <p>{description}</p>
        </div>
    </div>
}

export default EventSlide