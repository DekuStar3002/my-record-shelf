import React from 'react';
import './NotFoundPage.css';
import { Header, NotFound } from '../../components';

function NotFoundPage() {
  return (
    <div className='notfoundpage'>
      <Header />
      <NotFound />
    </div>
  )
}

export default NotFoundPage;