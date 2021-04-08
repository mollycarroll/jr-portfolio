import React from 'react'
import Header from './Header'
import serapis from '../assets/serapis_full.png'

const Serapis = () => {
    return (
        <div>
            <Header />
            <h1 className="text-center py-4">Serapis: Site for Local Rock Band</h1>
            <div className="container">
                <div className="row">
                <div className="col project-screenshot">
                    <img src={serapis}/>
                </div>

                <div className="col">
                <a href="https://www.serapisstl.com/"><button className="project-button">Site Link</button></a>

                <a href="https://github.com/mollycarroll/serapis-rocks"><button className="project-button">GitHub Repository</button></a>

                <p>The Serapis site is a Python + Django web app that dynamically displays content the band members can edit via the Django admin interface.</p>
                    
                <p>There are six database models for various site sections of content, one of the most important being show dates. In addition, the site is mobile-friendly and includes links to services where visitors can listen to the band online. 
                </p>

                <p className="font-weight-bold">Technologies used:</p>
                <ul>
                    <li>Python</li>
                    <li>Django</li>
                    <li>SQLite</li>
                    <li>Bulma CSS</li>
                    <li>JavaScript</li>
                </ul>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Serapis