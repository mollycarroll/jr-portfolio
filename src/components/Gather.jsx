import React from 'react'
import Header from './Header'
import gather from '../assets/gather_full.png'

const Gather = () => {
    return (
        <div>
            <Header />
            <h1 className="text-center py-4">Gather: An Event Planning App</h1>
            <div className="container">
                <div className="row">
                <div className="col project-screenshot">
                    <img src={gather}/>
                </div>

                <div className="col">
                <a href="https://mighty-savannah-40031.herokuapp.com/"><button className="project-button">Site Link</button></a>

                <a href="https://github.com/mollycarroll/gather-front-end"><button className="project-button">GitHub Repository</button></a>

                <p>Gather is an event planning app that allows users to create and track different types of events. The home page displays a list of events, and each event has its own page with further details.</p>
                    
                <p>Users can create, edit and delete events. On an individual event's page, there is a suggested city and additional activity for further planning inspiration.
                </p>

                <p className="font-weight-bold">Technologies used:</p>
                <ul>
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>MongoDB + Mongoose</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                </ul>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Gather;