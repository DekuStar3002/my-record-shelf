import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './MusicCardContainer.css';
import { MusicCard } from '..';
import genreIcon from '../../assets/icon-genre.svg';
import { makeRequest, getUniqueGenre, likeMapperToMusic } from '../../utils';
import { GET_ALL_MUSIC, UPDATE_LIKE_BY_ID } from '../../constants/apiEndPoints';
import { MusicRecordContext } from '../../contexts/MusicRecordContext';

function MusicCardContainer() {
  const { musicData, setMusicData, setGenres } = useContext(MusicRecordContext);
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(GET_ALL_MUSIC(), navigate)
    .then((response) => { 
      const uniqueGenre = getUniqueGenre(response.data);
      setGenres(uniqueGenre);
      return likeMapperToMusic(response.data, navigate);
    })
    .then((response) => setMusicData(response))
    .catch((error) => {
      navigate(`/error`);
    });
  }, []);

  const handleLike = async (index, id) => {
    const updateLikes = await makeRequest(UPDATE_LIKE_BY_ID(id, !musicData[index].likes.like), navigate);
    const newMusicArray = [ ...musicData ];
    newMusicArray[index] = { ...newMusicArray[index], likes: updateLikes.data };
    setMusicData(newMusicArray);
  };

  return (
    <div className='musicCardContainer'>
      <div className='tasks'>
        <h1 className='equiMargin'>all songs</h1>
        <img src={genreIcon} alt='grid' className='equiMargin' onClick={() => navigate('/genre')}/>
      </div>
      <div className='musicCards'>
        {
          musicData.length === 0 ? <div>Loading....</div> : musicData.map((singleMusic, index) => <MusicCard key={singleMusic.id} index={index} { ...singleMusic } handleLike={handleLike} />)
        }
      </div>
    </div>
  )
}

export default MusicCardContainer;