import React from 'react';
import { Header, GenreCardContainer } from '../../components';
import './AllGenrePage.css';

function AllGenrePage() {
  return (
    <div className='allgenrepage'>
      <Header />
      <GenreCardContainer />
    </div>
  )
}

export default AllGenrePage;