import './App.css';
import Questions from './components/Questions';
import ScoreState from './context/ScoreState'

function App() {
  return(
    <>
    <ScoreState>
      <Questions/>
    </ScoreState>
    </>
  );
}

export default App;
