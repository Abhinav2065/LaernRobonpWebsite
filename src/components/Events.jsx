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
                <Link to="https://www.ironbyte.dev/" className='btn'>More</Link>
            </div>
        </div>
    </div>
  )
}

export default Events