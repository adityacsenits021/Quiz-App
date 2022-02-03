import './App.css';
import Questions from './components/Questions';
import Home from './components/Home';
import ScoreState from './context/ScoreState'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import GameOver from './components/GameOver';
import HighScore from './components/HighScore';

function App() {
  return(
    <>
    <ScoreState>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/question' element={<Questions/>}/>
            <Route path='/question/over' element={<GameOver/>}/>
        <Route path='highscore' element={<HighScore/>}/>
        
      </Routes>
    </ScoreState>
    </>
  );
}

export default App;
