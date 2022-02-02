import './App.css';
import Questions from './components/Questions';
import Home from './components/Home';
import ScoreState from './context/ScoreState'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import GameOver from './components/GameOver';

function App() {
  return(
    <>
    <ScoreState>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/question' element={<Questions/>}/>
            <Route path='/question/over' element={<GameOver/>}/>
        
      </Routes>
    </ScoreState>
    </>
  );
}

export default App;
