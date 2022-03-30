import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/workouts'>Workouts</Link>
        <Link to='/lowerbodyworkouts' >Lower Body Workouts</Link>
        <Link to='/upperbodyworkouts' >Upper Body Workouts</Link>
        <Link to='/submission' >Submit Workout</Link>
      </nav>
    </header>
  )
}

export default Nav