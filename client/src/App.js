import './App.css';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import Workouts from './components/Workouts'
import LowerWorkouts from './components/LowerWorkouts'
import UpperWorkouts from './components/UpperWorkouts'
import Submission from './components/Submission'

const App = () => {

  const [lower, setLower] = useState({})
  const [upper, setUpper] = useState({})
  const [newWorkout, setNewWorkout] = useState({
    title: '',
    description: '',
    time_frame: '',
    full_name: '',
    url: '',
  })

    const getLower = async () => {
        const lowerList = await axios.get('http://localhost:3005/lowerbodyworkouts')
        console.log(lowerList)
        setLower(lowerList.data)
    }

    const getUpper = async () => {
      const upperList = await axios.get('http://localhost:3005/upperbodyworkouts')
      console.log(upperList)
      setUpper(upperList.data)
  }

    useEffect(() => {
        getLower()
        getUpper()
    }, [])

  /// add workout 
  const addNewWorkout = (e) => {
    e.preventDefault()
    
}
const handleChange = (e) => {
    setNewWorkout({...newWorkout, [e.target.name]: e.target.value})
}
//

  if (lower && upper) {
    return (
    <div className="App">
      <header className="App-header">
        <Nav /> 
      </header>
      <main>
        <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/workouts' element={ <Workouts/> } />
        <Route path='/lowerbodyworkouts' element={ <LowerWorkouts lower={lower}/> } />
        <Route path='/upperbodyworkouts' element={ <UpperWorkouts upper={upper}/> } />
        <Route path='/submission' element={ <Submission
        newWorkout={newWorkout}
        handleChange={handleChange}
        addNewWorkout={addNewWorkout}/> } />
        </Routes>
      </main>
    </div>
  );
}
}

export default App;
