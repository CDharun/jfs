// src/MusicGenres.js
import React from 'react';

const genres = [
  'Pop',
  'Rock',
  'Hip Hop',
  'Electronic',
  'Jazz',
  'Classical',
  'Country',
  'R&B',
  'Reggae',
  'Metal',
  'Blues',
  'Folk',
];

const MusicGenres = () => {
  return (
    <div>
      <h1>Music Genres</h1>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicGenres;
