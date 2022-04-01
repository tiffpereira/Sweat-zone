import './App.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import Nav from './components/Nav'
import LowerWorkouts from './components/LowerWorkouts'
import UpperWorkouts from './components/UpperWorkouts'
import Schedule from './components/Schedule'
import Home from './components/Home'

// const App = () => {
  
//   const [newWorkout, setNewWorkout] = useState({
//     title: '',
//     description: '',
//     time_frame: '',
//     full_name: '',
//     url: '',
//   })


//   /// add workout 
//   const addNewWorkout = (e) => {
//     e.preventDefault()
    
// }
// const handleChange = (e) => {
//     setNewWorkout({...newWorkout, [e.target.name]: e.target.value})
// }
// //

class App extends Component {

  constructor(props) {
      super(props);
  this.state = {
        show: false
      };
    }

  render() {
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
        <Route path='/schedule' element={<Schedule />} />
        </Routes>
      </main>
    
    </div>
  );
}
}


export default App;
