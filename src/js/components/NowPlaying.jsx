import React, { useRef, useEffect, useState } from 'react';

const NowPlaying = ({ currentSong }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current && currentSong?.url) {
      audioRef.current.load();
      audioRef.current.play().catch((err) =>
        console.error("Auto-play failed:", err)
      );
      setIsPlaying(true);
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) =>
        console.error("Play failed:", err)
      );
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="card p-3 mb-4">
      <h4>Now Playing:</h4>
      <p>{currentSong ? currentSong.name : 'Pick a song'}</p>

      {currentSong?.url && (
        <>
          <audio ref={audioRef}>
            <source
              src={`https://assets.breatheco.de/apis/sound/${currentSong.url}`}
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>

          <button
            className="btn btn-primary mt-3"
            onClick={togglePlayPause}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </>
      )}
    </div>
  );
};

export default NowPlaying;



