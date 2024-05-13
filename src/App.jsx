import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./Title";
import Score from "./Score";
import CarpComponent from "./CardComponent";
import PropTypes from "prop-types";
import Death from "./assets/music/dspdiehi(2).wav";
import Kill from "./assets/music/dsshotgn.wav";
import Win from "./assets/music/win.mp4";

// Import images
import IconOfSin from "./assets/iconOfSin.jpg";
import Cacodemon from "./assets/cacodemon.jpg";
import DoomSlayer from "./assets/doom-icon.png";
import Marauder from "./assets/marauder.png";
import Arachnotron from "./assets/Arachnotron_DE.webp";
import Archville from "./assets/archville.webp";
import BaronOfHell from "./assets/Baron-hell.jpg";
import Revenant from "./assets/DETRevenant.webp";
import Gladiator from "./assets/gladiator.jpg";
import Gorgile from "./assets/gorgile.jpg";
import HellKnight from "./assets/hell-knight.webp";
import Imp from "./assets/imp.jpg";
import KhanMaykr from "./assets/KhanMaykrRender.webp";
import LostSoul from "./assets/Lost_Soul_Eternal.webp";
import Mancubus from "./assets/Mancubus_DE.webp";
import Pinky from "./assets/pinky.jpg";
import Prowler from "./assets/The_Prowler.webp";
import WipBlash from "./assets/wipblash.webp";

const images = [
  IconOfSin,
  Cacodemon,
  DoomSlayer,
  Marauder,
  Arachnotron,
  Archville,
  BaronOfHell,
  Revenant,
  Gladiator,
  Gorgile,
  HellKnight,
  Imp,
  KhanMaykr,
  LostSoul,
  Mancubus,
  Pinky,
  Prowler,
  WipBlash,
];
function Card() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [imageOrder, setImageOrder] = useState([]);
  const [death, setDeath] = useState(false);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  useEffect(() => {
    shuffleImages();
  }, []);

  useEffect(() => {
    if (death) {
      const death = new Audio(Death);
      death.play();
    }
  }, [death]);

  useEffect(() => {
    if (score > 0) {
      const killSound = new Audio(Kill);
      killSound.play();
    }
    if (score > 19) {
      const winSound = new Audio(Win);
      winSound.play();
    }
  }, [score]);

  function handleCardClick(id) {
    shuffleImages();
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
      setDeath(true);
    } else {
      setScore(score + 1);
      setDeath(false);
      setClickedCards([...clickedCards, id]);
    }
  }

  function shuffleImages() {
    const shuffledImages = images.sort(() => Math.random() - 0.5);
    setImageOrder(shuffledImages);
  }

  return (
    <>
      <Score score={score} bestScore={bestScore} />
      <div className="Position">
        {imageOrder.map((image, index) => (
          <CarpComponent
            key={index}
            id="Image"
            image={image}
            onClick={() => handleCardClick(image)}
          />
        ))}
      </div>
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
