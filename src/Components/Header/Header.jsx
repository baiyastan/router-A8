import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">Service</Link>
    </div>
  )
}

export default Header