import React from 'react';
import './MusicCardContainer.css';
import { MusicCard } from '..';
import genreIcon from '../../assets/icon-genre.svg';

function MusicCardContainer() {
  return (
    <div className='musicCardContainer'>
      <div className='tasks'>
        <h1>all songs</h1>
        <img src={genreIcon} alt='grid'/>
      </div>
      <div className='musicCards'>
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  )
}

export default MusicCardContainer;