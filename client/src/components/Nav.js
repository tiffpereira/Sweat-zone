import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <header>
      <nav id='nav-bar'>
        <Link to='/'>Home</Link>
        <Link to='/lowerbodyworkouts' >Lower Body Workouts</Link>
        <Link to='/upperbodyworkouts' >Upper Body Workouts</Link>
        <Link to='/schedule' >Schedule</Link>
      </nav>
    </header>
  )
}

export default Nav