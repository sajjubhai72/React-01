import React from 'react'

function Navbar() {
  return (
    <div>
            <nav className="container">
        <img src="./images/logo.png" alt="logo" />
        <ul>
          <li href="">Home</li>
          <li href="">About</li>
          <li href="">Shoses</li>
          <li href="">Contact</li>
        </ul>
        <button href=""> Login </button>
      </nav>
    </div>
  )
}

export default Navbar;
