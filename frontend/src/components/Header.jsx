import React from 'react'
import logoImg from '../assets/logo.jpg'

function Header() {
  return (
    <header id="main-header"> 
        <div id='title'>
            <img src={logoImg} alt='Restaurant logo'  />
            <h1>Food Order</h1>
        </div>
        <nav>
            <button>Cart</button>
        </nav>
    </header>
  )
}

export default Header