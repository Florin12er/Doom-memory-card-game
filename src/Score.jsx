import PropTypes from "prop-types";

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
    score: PropTypes.number.isRequired,
    bestScore: PropTypes.number.isRequired,
};
export default Score
