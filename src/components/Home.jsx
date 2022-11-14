import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import jeopardy from '../assets/jeopardy.png'
import travelist from '../assets/travelist.png'
import gather from '../assets/gather.png'
import mummy from '../assets/mummyedit.png'

const Home = () => {

    return ( 
        <div>
            <Header />
            <div className="container">

            <div className="about row align-items-center">
                <div className="col">
                    <h2>About Me 👩‍💻</h2>
                    <p>I'm a full stack software engineer with a focus on solid software craftsmanship and continuous learning, with 1+ years of professional experience. My passion for developing technology to solve crucial problems fuels my growth in areas including web application development, deployment configuration and microservices. Find me on <a class="home-link" href="https://www.linkedin.com/in/mollyacarroll/">LinkedIn</a>.</p>
                </div>
                <div className="col">
                    <h2>Select Skills</h2>
                    <p>
                    <i title="Python" class="devicon-python-plain-wordmark colored"></i>
                    <i title="Java" class="devicon-java-plain-wordmark colored"></i>
                    <i title="Git" class="devicon-git-plain-wordmark colored"></i>
                    <i title="Docker" class="devicon-docker-plain-wordmark colored"></i>
                    <i title="Kubernetes" class="devicon-kubernetes-plain-wordmark colored"></i>
                    <i title="JavaScript" class="devicon-javascript-plain colored"></i>
                    <i title="Typescript" class="devicon-typescript-plain colored"></i>
                    <i title="React.js" class="devicon-react-original-wordmark colored"></i>
                    <i title="Express.js" class="devicon-express-original-wordmark colored"></i>
                    <i title="Node.js" class="devicon-nodejs-plain-wordmark colored"></i>
                    </p>
                </div>            
            </div>
            <br/>
            <div id="projects" className="container-fluid mb-4">
                    <h2 className="text-center">Projects</h2>

            <div className="row justify-content-center row-cols-sm-1 row-cols-md-4 row-cols-lg-6">

            <div className="card m-4 border-0">
                <Link to="/serapis"><img className="card-img-top project-img" src={mummy} alt="Serapis"/></Link>
                <div className="card-body">
                <Link to="/serapis" className="card-link">Serapis</Link>
                </div>
                </div>

                <div className="card m-4 border-0">
                <Link to="/travelist"><img className="card-img-top project-img" src={travelist} alt="Travelist"/></Link>
                <div className="card-body">
                <Link to="/travelist" className="card-link">Travelist</Link>
                </div>
                </div>

                <div className="card m-4 border-0">
                <Link to="/gather"><img className="card-img-top project-img" src={gather} alt="Gather"/></Link>
                <div className="card-body">
                <Link to="/gather" className="card-link">Gather</Link>
                </div>
                </div>

                <div className="card m-4 border-0">
                <Link to="/jeopardy"><img className="card-img-top project-img" src={jeopardy} alt="Jeopardy"/></Link>
                <div className="card-body">
                <Link to="/jeopardy" className="card-link">Jeopardy</Link>
                </div>
                </div>

                </div>
            </div>

            </div>

        </div>
    )
}

export default Home;