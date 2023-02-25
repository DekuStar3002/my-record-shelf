import React from 'react';
import './AllMusicPage.css';
import { Header, MusicCardContainer } from '../../components';

function AllMusicPage() {
  return (
    <div className='allmusicpage'>
      <Header />
      <MusicCardContainer />
    </div>
  )
}

export default AllMusicPage;