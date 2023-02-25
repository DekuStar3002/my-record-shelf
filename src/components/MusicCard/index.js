import React from 'react';
import './MusicCard.css';
import heartRedSrc from '../../assets/heart-red.svg';

function MusicCard() {
  return (
    <div className='musicCard'>
      <div className='musicCard-image'>
        <img src='https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631' alt='music-card-picture' />
      </div>
      <div className='musicCard-details'>
        <div className='musicCard-text'>
          <p className='musicCard-text-title'>in the end</p>
          <p className='musicCard-text-artist'>linkin park</p>
        </div>
        <div className='musicCard-like'>
          <img src={heartRedSrc} alt='heart-red' />
          <p>2</p>
        </div>
      </div>
    </div>
  )
};

export default MusicCard;