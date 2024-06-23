import React, { useEffect, useRef, useState } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { MdOutlineSkipNext } from "react-icons/md";

const Music = (props) => {
  const size = props.size;

  // Sample list of songs
  const songs = [
    { name: "Night Changes", src: "https://download.samplelib.com/mp3/sample-15s.mp3" },
    { name: "Song Two", src: "https://download.samplelib.com/mp3/sample-12s.mp3" },
    { name: "Song Three", src: "https://download.samplelib.com/mp3/sample-6s.mp3" }
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentMusicTime, setCurrentMusicTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateDuration);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
      }
    };
  }, [currentSongIndex]);

  const updateTime = () => {
    setCurrentMusicTime(audioRef.current.currentTime);
  };

  const updateDuration = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    setCurrentMusicTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setCurrentMusicTime(0);
    setIsPlaying(true);
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().padStart(2, "0");
    return `${hours}:${minutes} ${ampm}`;
  };

  const formatMusicTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <audio ref={audioRef} src={songs[currentSongIndex].src} preload="metadata" />

      <div
        style={{
          borderRadius: "30px",
          border: "1% black solid",
          display: "flex",
          flexDirection: "column",
          width: "90%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#868686",
        }}
      >
        <div
          style={{
            margin: "5%",
            marginBottom: "0%",
            borderRadius: "15px",
            border: "5px black solid",
            height: "100%",
            width: "90%",
            display: "flex",
            backgroundColor: "white",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.50)",
              height: "5%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            <div>{formatTime(currentTime)}</div>
            <div
              style={{
                borderRadius: "7px",
                width: "10%",
                height: "70%",
                border: "2px solid black",
                display: "flex",
                flexDirection: "row-reverse",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "20%",
                  backgroundColor: "#E53838",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            height: "15%",
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "50%",
              height: "40%",
              alignItems: "center",
            }}
          >
            <MdOutlineSkipNext
              style={{ transform: "rotate(180deg)" }}
              size={50}
              onClick={handleNextSong}
            />
            {isPlaying ? (
              <IoMdPause size={35} onClick={handlePlayPause} />
            ) : (
              <IoMdPlay size={35} onClick={handlePlayPause} />
            )}
            <MdOutlineSkipNext size={50} onClick={handleNextSong} />
          </div>

          <div
            style={{
              height: "20%",
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {songs[currentSongIndex].name}
          </div>

          <div
            style={{
              height: "20%",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {formatMusicTime(currentMusicTime)} 
            <input
              type="range"
              min="0"
              max={duration}
              value={currentMusicTime}
              onChange={handleSliderChange}
              style={{ width: "100%", margin: "0 10px" }}
            />
            {formatMusicTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;