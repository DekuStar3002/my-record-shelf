import React from 'react'
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header-text'>
        <p>My <span className='record'>Record</span> Shelf</p>
      </div>
    </header>
  )
}

export default Header;
