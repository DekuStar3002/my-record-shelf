import React from 'react';
import './MusicCard.css';
import PropTypes from 'prop-types';
import heartRedSrc from '../../assets/heart-red.svg';
import heartGreySrc from '../../assets/heart-gray.svg';

function MusicCard({ id, index, artist, imageUrl, likes, name, handleLike }) {
  return (
    <div className='musicCard' style={{'backgroundColor': index % 2 ? '#ABABAB' : '#DFDFDF'}}>
      <div className='musicCard-image'>
        <img src={`${imageUrl}`} alt='music-image'/>
      </div>
      <div className='musicCard-details'>
        <div className='musicCard-text'>
          <p className='musicCard-text-title'>{name}</p>
          <p className='musicCard-text-artist'>{artist.name}</p>
        </div>
        <div className='musicCard-like' onClick={() => handleLike(index, id)}>
          <img src={likes.like ? heartRedSrc : heartGreySrc} alt='heart-red'/>
          <p>{likes.count}</p>
        </div>
      </div>
    </div>
  )
};

MusicCard.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired, 
  artist: PropTypes.string.isRequired, 
  imageUrl: PropTypes.string.isRequired, 
  likes: PropTypes.object.isRequired, 
  name: PropTypes.string, 
  handleLike: PropTypes.func.isRequired,
}

export default MusicCard;