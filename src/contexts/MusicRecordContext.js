import React, { createContext, useState } from "react";

const MusicRecordContext = createContext({});

const MusicRecordProvider = ({ childred }) => {
  const [ musicData, setMusicData ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  return <MusicRecordContext.Provider value={{ musicData, genres, setMusicData, setGenres }}>
    { childred }
  </MusicRecordContext.Provider>
}

export { MusicRecordContext, MusicRecordProvider };