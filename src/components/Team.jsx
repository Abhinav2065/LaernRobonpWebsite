import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Team.css"


const Team = () => {
  return (
    <div>
        <div className="team">
            <h2>Meet the Team!</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="abhinav.jpg" alt="Abhinav" />
                        <div className="container">
                            <h2>Abhinav Siluwal</h2>
                            <p className="title">Executive Director &amp; Founder</p>
                            <p>abhinavsl511@gmail.com</p>
                            <p><a href="mailto:abhinavsl511@gmail.com" className="button">Contact</a></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="zenith.png" alt="Zenith" />
                        <div className="container">
                            <h2>Zenith Acharya</h2>
                            <p className="title">Deputy Director</p>
                            <p>zenithacharya000@gmail.com</p>
                            <p><a href="mailto:zenithacharya000@gmail.com" className="button">Contact</a></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="ojas.jpg" alt="Ojas" />
                        <div className="container">
                            <h2>Ojas Khatiwada</h2>
                            <p className="title">Financial Manager</p>
                            <p>ojaskhatiwada09@gmail.com</p>
                            <p><a href="mailto:ojaskhatiwada09@gmail.com" className="button">Contact</a></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Saiman" />
                        <div className="container">
                            <h2>Saiman Ghimire</h2>
                            <p className="title">Technical Manager</p>
                            <p>ghimiresaiman1@gmail.com</p>
                            <p><a href="mailto:ghimiresaiman1@gmail.com" className="button">Contact</a></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="prajwal.jpg" alt="Prajwal" />
                        <div className="container">
                            <h2>Prajwal Chaulaigain</h2>
                            <p className="title">Social Media and Marketing Manager</p>
                            <p>official.prajwolpc@gmail.com</p>
                            <p><a href="mailto:official.prajwolpc@gmail.com" className="button">Contact</a></p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className="join">
            <h3><Link className='btn' to="mailto:abhinavsl511@gmail.com"> Join us</Link></h3>
            <p>Are you intrested in joining the team and help for our cause?<br /> We are actively looking for volunteers!</p>
        </div>
    </div>
  )
}

export default Team