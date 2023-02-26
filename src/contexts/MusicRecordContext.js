import React, { createContext, useState } from 'react';

const MusicRecordContext = createContext({});

const MusicRecordProvider = ({ children }) => {
  const [ musicData, setMusicData ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  return (
    <MusicRecordContext.Provider value={{musicData, setMusicData, genres, setGenres}}>
      {children}
    </MusicRecordContext.Provider>
  )
};

export { MusicRecordContext, MusicRecordProvider };