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

                <p>Travelist is a travel bucket list app where users can view, add and create travel destinations.</p>
                
                <p>When a user enters the destination country, the flag image populates their entry from a country flag API at Flagpedia.net.

                </p>

                <p className="font-weight-bold">Technologies used:</p>
                <ul>
                    <li>Express.js</li>
                    <li>EJS</li>
                    <li>MongoDB + Mongoose</li>
                    <li>JavaScript</li>
                </ul>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Gather;