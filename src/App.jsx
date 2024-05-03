import "./App.css";

import Image from "./assets/iconOfSin.jpg";
import Title from "./Title";
import Score from "./Score";
import CarpComponent from "./CardComponent";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Card(props) {
  const [score, SetScore] = useState(0);
  const [bestScore, SetBestScore] = useState(0);
  useEffect(() => {
    if (score > bestScore) {
      SetBestScore(score);
    }
  }, [score, bestScore]);

  function PressCharacter() {
    /just an test/;
    SetScore(score + 1);
    if (score === 9) {
      SetScore(0);
    }
  }
  return (
    <>
      <Score score={score} bestScore={bestScore} />
      <CarpComponent icon="hello" image={Image} onClick={PressCharacter} />
    </>
  );
}
Card.propTypes = {
  icon: PropTypes.string,
};

function App() {
  return (
    <>
      <Title />
      <Card />
    </>
  );
}

export default App;
