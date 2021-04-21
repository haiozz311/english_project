import React, { useState } from 'react'

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <ul className={toggle ? 'toggle' : ''}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Login</a></li>
        <li className="close" onClick={() => {
          handleToggle()
        }}>X</li>
      </ul>
      <div className="menu" onClick={() => {
        handleToggle()
      }}>Menu</div>
    </>
  )
}
