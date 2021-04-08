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
                    <p>I'm a full stack software engineer with a focus on solid software craftsmanship and continuous learning. I have a passion for solving problems and tackling challenges like climate change through software engineering. Find me on <a class="home-link" href="https://www.linkedin.com/in/mollyacarroll/">LinkedIn</a>.</p>
                </div>
                <div className="col">
                    <h2>Skills</h2>
                    <p>
                    <i title="Python" class="devicon-python-plain colored"></i>
                    <i title="Django" class="devicon-django-plain colored"></i>
                    <i title="Flask" class="devicon-flask-original-wordmark colored"></i>
                    <i title="JavaScript" class="devicon-javascript-plain colored"></i>
                    <i title="Express.js" class="devicon-express-original colored"></i>
                    <i title="Node.js" class="devicon-nodejs-plain colored"></i>
                    <i title="React.js" class="devicon-react-original colored"></i>
                    <i title="Git" class="devicon-git-plain colored"></i>
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