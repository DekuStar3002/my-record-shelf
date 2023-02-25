import React from 'react';
import './GenreCardContainer.css';
import { MusicCard } from '..';
import gridIcon from '../../assets/icon-grid.svg';

function GenreCardContainer() {
  const popSrc = require('../../assets/genre-pop.png'); 
  return (
    <div className='genreCardContainer'>
      <div className='tasks'>
        <h1 className='equiMargin'>genres</h1>
        <img src={gridIcon} alt='grid' className='equiMargin'/>
      </div>
      <div className='genreHeading'>
        <img src={popSrc} alt='pop' className='equiMargin'/>
        <p className='equiMargin'>pop</p>
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

export default GenreCardContainer;