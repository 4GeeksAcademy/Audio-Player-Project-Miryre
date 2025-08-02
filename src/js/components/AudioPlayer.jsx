import React, { useEffect, useState } from 'react';
import NowPlaying from './NowPlaying';
import SongList from './SongList';

const AudioPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetch("https://playground.4geeks.com/sound/songs")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        // if (Array.isArray(data.songs)) {
          setSongs(data.songs);
        // } else {
        //   console.error("Unexpected data format:", data);
        // }
      })
      .catch((error) => console.error("Failed to fetch songs", error));
  }, []);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="container text-center mt-5 p-4">
      <h1 className="text-center mb-4">My Music Player</h1>
      <NowPlaying currentSong={currentSong} />
      <h5 className="mt-4 mb-2">Choose a Song:</h5>
      <SongList songs={songs} onPlay={handlePlay} />

    </div>
  );
};

export default AudioPlayer;



