import React from 'react';

const SongList = ({ songs }) => {
  
  const handleSong = (song) => {

    console.log("insideOfSongList",song[0].url);
  };
  const newSongs =[...songs]
  return (
    <ul className="list-group">
      {newSongs.length === 0 && (
        <li className="list-group-item">Loading songs...</li>
      )}

      {newSongs.map((song) => (
        <li
          key={song.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {song.name}
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleSong(newSongs) }
            // onClick={() => onPlay(song)}
          >
            Play
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SongList;



