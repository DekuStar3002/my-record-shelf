import React from 'react';
import './HomePage.css';
import { Header, NoMusic } from '../../components';

function HomePage() {
  return (
    <div className='homepage'>
      <Header />
      <NoMusic />
    </div>
  )
}

export default HomePage;