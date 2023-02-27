import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GenreCardContainer.css';
import { MusicRecordContext } from '../../contexts/MusicRecordContext';
import { MusicCard } from '..';
import gridIcon from '../../assets/icon-grid.svg';
import { makeRequest } from '../../utils';
import { UPDATE_LIKE_BY_ID } from '../../constants/apiEndPoints';

function GenreCardContainer() {
  const navigate = useNavigate();

  const { musicData, genres, setMusicData } = useContext(MusicRecordContext);

  useEffect(() => {
    if(!musicData.length || !genres.length)
      navigate('/error');
  }, [musicData, genres]);

  const handleLike = async (index, id) => {
    const updateLikes = await makeRequest(UPDATE_LIKE_BY_ID(id, !musicData[index].likes.like));
    const newMusicArray = [ ...musicData ];
    newMusicArray[index] = { ...newMusicArray[index], likes: updateLikes.data };
    setMusicData(newMusicArray);
  };

  return (
    <div className='genreCardContainer'>
      <div className='tasks'>
        <h1 className='equiMargin'>genres</h1>
        <img src={gridIcon} alt='grid' className='equiMargin' onClick={() => navigate('/music')}/>
      </div>
      {
        genres.map((genre) => {
          const genreImageSrc = require(`../../assets/genre-${genre.toLowerCase()}.png`);
          return (
            <div className='genre'>
              <div className='genreHeading'>
                <img src={genreImageSrc} alt='pop' className='equiMargin'/>
                <p className='equiMargin'>{genre}</p>
              </div>
              <div className='musicCards'>
                {
                  musicData.map((singleMusic, index) => singleMusic.genre.name === genre ? <MusicCard key={singleMusic.id} index={index} { ...singleMusic } handleLike={handleLike} /> : <></>)
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default GenreCardContainer;