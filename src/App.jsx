import "./App.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
function Title() {
    return (
        <>
            <div className="Title">
                <h1>Doom Memory Game</h1>
                <p>
                    Get points by clicking on an image but don't click on any more than
                    once!
                </p>
            </div>
        </>
    );
}
function Score(props) {
    return (
        <>
            <div className="ScoreClass">
                <p className="Score">Score:{props.score}</p>
                <p className="BestScore">Best score:{props.bestScore}</p>
            </div>
        </>
    );
}
Score.propTypes = {
    score: PropTypes.number,
    bestScore: PropTypes.number,
};
function Card() {
    function PressCharacter() { }
    return (
        <>
            <div className="Cards">
                <button onClick={PressCharacter}>hello</button>
            </div>
        </>
    );
}

function App() {
    return (
        <>
            <Title />
            <Score />
        </>
    );
}

export default App;
