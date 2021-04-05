import React from 'react'
import Header from './Header'
import jeopardy from '../assets/jeopardy_full.png'

const Jeopardy = () => {

    return (
        <div>
            <Header />
            <h1 className="text-center py-4">Jeopardy Browser Game</h1>
            <div className="container">
                <div className="row">
                <div className="col project-screenshot">
                    <img src={jeopardy}/>
                </div>

                <div className="col">


                <p>This is an interactive browser Jeopardy game with two players.</p>
                
                <p>Click the box for the desired category + point value, then answer the given statement with a question chosen from four.

                After four rounds, the game will go to the Final Round, giving each player a final question worth 50 points</p>

                <p className="font-weight-bold">Technologies used:</p>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>

                <p className="font-weight-bold">Features:</p>
                <ul>
                    <li>Two players</li>
                    <li>Score, turn and round display</li>
                    <li>Mobile-friendly</li>
                </ul>


                <a href="https://mollycarroll.github.io/jeopardy-app/"><button className="project-button">Site Link</button></a>

                <a href="https://github.com/mollycarroll/mollycarroll.github.io/tree/main/jeopardy-app"><button className="project-button">GitHub Repository</button></a>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Jeopardy