import "./App.css";

import IconOfSin from "./assets/iconOfSin.jpg";
import Title from "./Title";
import Score from "./Score";
import CarpComponent from "./CardComponent";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Card(props) {
  const [score, SetScore] = useState(0);
  const [bestScore, SetBestScore] = useState(0);
  const [classes, setClasses] = useState({});
  useEffect(() => {
    if (score > bestScore) {
      SetBestScore(score);
    }
  }, [score, bestScore, classes]);

  function PressCharacter(name) {
    SetScore(score + 1);
    setClasses({ ...classes, IconOfSin: "IconOfSin", Test: "test" });
    /* const test = document.getElementById("test"); */
        const IconOfSin = document.getElementsByClassName("IconOfSin")
        if(classes.contains === IconOfSin) {
            SetScore(0)
        }
        console.log(classes)
    // if (test && test.classList.contains(classes.Test)) {
    //   console.log("hello");
    // } else {
    //   console.log("no");
    // }
  }
  return (
    <>
      <Score score={score} bestScore={bestScore} />
      <CarpComponent
        icon={classes.IconOfSin}
        content={classes.IconOfSin}
        image={IconOfSin}
        onClick={() => {
          PressCharacter("IconOfSin");
        }}
      />
      <CarpComponent
        icon={classes.Test}
        content={classes.Test}
        image={IconOfSin}
        id="test"
        onClick={() => {
          PressCharacter("test");
        }}
      />
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
