import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import LowerWorkouts from './components/LowerWorkouts'
import UpperWorkouts from './components/UpperWorkouts'
import Submission from './components/Submission'
import Home from './components/Home'

const App = () => {
  
  const [newWorkout, setNewWorkout] = useState({
    title: '',
    description: '',
    time_frame: '',
    full_name: '',
    url: '',
  })


  /// add workout 
  const addNewWorkout = (e) => {
    e.preventDefault()
    
}
const handleChange = (e) => {
    setNewWorkout({...newWorkout, [e.target.name]: e.target.value})
}
//

    return (
    <div className="App">
      <header className="App-header">
        <Nav /> 
      </header>
      <main>
        <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/lowerbodyworkouts' element={ <LowerWorkouts /> } />
        <Route path='/upperbodyworkouts' element={ <UpperWorkouts/> } />
        <Route path='/submission' element={ <Submission
        NewWorkout={newWorkout}
        handleChange={handleChange}
        addNewWorkout={addNewWorkout}
        /> } />
        </Routes>
      </main>
    </div>
  );
}


export default App;
