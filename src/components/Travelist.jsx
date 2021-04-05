import React from 'react'
import Header from './Header'
import travelist from '../assets/travelist_full.png'

const Travelist = () => {

    return (
        <div>
            <Header />
            <h1 className="text-center py-4">Travelist: A Travel Bucket List App</h1>
            <div className="container">
                <div className="row">
                <div className="col project-screenshot">
                    <img src={travelist}/>
                </div>

                <div className="col">
                <a href="https://mollycarroll.github.io/Travelist-app/"><button className="project-button">Site Link</button></a>

                <a href="https://github.com/mollycarroll/mollycarroll.github.io/tree/main/Travelist-app"><button className="project-button">GitHub Repository</button></a>

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

                <p className="font-weight-bold">Features:</p>
                <ul>
                    <li>Cloud hosted database via MongoDB Atlas and Heroku</li>
                    <li>Dynamically populated pages via EJS</li>
                    <li>User creation, login and authentication</li>
                    <li>UI enhancements via Bootstrap and jQuery</li>
                </ul>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Travelist