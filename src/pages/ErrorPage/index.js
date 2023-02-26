import React from 'react';
import { useParams } from 'react-router-dom';
import './ErrorPage.css';
import { Header, Error } from '../../components';

function ErrorPage() {
  const { errorCode } = useParams();
  return (
    <div className='errorPage'>
      <Header />
      <Error errorCode={errorCode}/>
    </div>
  )
}

export default ErrorPage;