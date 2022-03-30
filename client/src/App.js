import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Workouts from './components/Workouts'
import LowerWorkouts from './components/LowerWorkouts'
import UpperWorkouts from './components/UpperWorkouts'
import Submission from './components/Submission'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Nav /> 
      </header>
      <main>
        <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/workouts' element={ <Workouts/> } />
        <Route path='/lowerbodyworkouts' element={ <LowerWorkouts/> } />
        <Route path='/upperbodyworkouts' element={ <UpperWorkouts/> } />
        <Route path='/submit' element={ <Submission/> } />
        </Routes>
      </main>
    </div>
  );
}

//Keep in mind no routes in DB for workouts and submit yet

export default App;
