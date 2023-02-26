import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Error.css';

function Error({ errorCode }) {
  const navigate = useNavigate();
  return (
    <div className='error'>
      <p>Something went wrong!!</p>
      { errorCode && <p>Error Code: {errorCode}</p> }
      <button onClick={() => navigate('/')} className='button'>Back To Home</button>
    </div>
  )
}

Error.propTypes = {
  errorCode: PropTypes.string,
};

export default Error;