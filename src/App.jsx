import "./App.css";

import Title from "./Title";
import Score from "./Score";
import CarpComponent from "./CardComponent";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";

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
  const [classes, setClasses] = useState({});
  const [imageOrder, setImageOrder] = useState([]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  function handleCardClick(id) {
    shuffleImages();
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, id]);
    }
  }
  function shuffleImages() {
    const shuffledImages = images.sort(() => Math.random() - 0.5);
    setImageOrder(shuffledImages);
  }

  useEffect(() => {
    shuffleImages();
  }, []);

  return (
    <>
      <Score score={score} bestScore={bestScore} />
      <div className="Position">
        <CarpComponent
          id="Image"
          image={imageOrder[0]}
          onClick={() => handleCardClick("IconOfSin")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[1]}
          onClick={() => handleCardClick("Cacodemon")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[2]}
          onClick={() => handleCardClick("Doom-slayer")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[3]}
          onClick={() => handleCardClick("Marauder")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[4]}
          onClick={() => handleCardClick("Arachnotron")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[5]}
          onClick={() => handleCardClick("Archville")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[6]}
          onClick={() => handleCardClick("BaronOfHell")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[7]}
          onClick={() => handleCardClick("Revenant")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[8]}
          onClick={() => handleCardClick("Gorgile")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[9]}
          onClick={() => handleCardClick("HellKnight")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[10]}
          onClick={() => handleCardClick("Imp")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[11]}
          onClick={() => handleCardClick("KhanMaykr")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[12]}
          onClick={() => handleCardClick("LostSoul")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[13]}
          onClick={() => handleCardClick("Mancubus")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[14]}
          onClick={() => handleCardClick("Pinky")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[15]}
          onClick={() => handleCardClick("Prowler")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[16]}
          onClick={() => handleCardClick("WipBlash")}
        />
        <CarpComponent
          id="Image"
          image={imageOrder[17]}
          onClick={() => handleCardClick("Gladiator")}
        />
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
