import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='notfound'>
      <p>404, Page Not Found!!!!</p>
      <button onClick={() => navigate('/')} className='button'>Back To Home</button>
    </div>
  )
}

export default NotFound;