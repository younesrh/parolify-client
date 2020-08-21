import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('auth-token')) || null
  );

  useEffect(() => {
    Axios.get('http://localhost:3001/api/songs', {
      headers: {
        'auth-token': token,
      },
    }).then((res) => {
      console.log(res.data);
      setSongs(
        res.data.map((song) => ({
          id: song._id,
          artistName: song.artist_name,
          coverImage: song.cover_image,
          videoUrl: song.video_url,
          songName: song.song_name,
          ratingsNumber: song.ratings_number,
          rating: song.rating,
          lyrics: song.lyrics,
          views: song.views,
        }))
      );
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        songs,
        setSongs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
