import React from "react";
import audio from "../Imgs/Audio/audio.mp3";
import { IoMdMusicalNote } from "react-icons/io";
import "./ButtonPlayer.css";

const ButtonPlayer = () => {
  return (
    <>
      <audio src={audio} id="audio" className="paused" loop></audio>
      <button id="btnplayer" onClick={playFunction} className="paused">
        <IoMdMusicalNote />
      </button>
    </>
  );

  function playFunction() {
    let Audio = document.getElementById("audio");

    if (Audio.classList.contains("paused")) {
      Audio.classList.remove("paused");
      Audio.classList.add("playing");
      Audio.play();
    } else {
      Audio.classList.remove("playing");
      Audio.classList.add("paused");
      Audio.pause();
    }
  }
};

export default ButtonPlayer;
