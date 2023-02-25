import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoMusic.css';

function NoMusic() {
  const navigate = useNavigate();
  return (
    <div className='noMusicCardContainer'>
      <p>:((</p>
      <p>seems a bit empty in here...</p>
      <button onClick={() => navigate('/music')}>sync</button>
    </div>
  )
}

export default NoMusic;