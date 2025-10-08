import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Events.css"


const Events = () => {
  return (
    <div>
        <div className="events">
            <h3>Upcoming Events:</h3>
            <div className="event">
                <h4>IronByte</h4>
                <p>First hardware hackathon for teens in Nepal.</p>
                <div className="date"><p>Coming Soon</p></div>
                <div className="btn"><Link to="https://www.ironbyte.dev/">More</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Events