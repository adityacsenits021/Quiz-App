import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gameover.css'
import ScoreContext from '../context/ScoreContext';
function GameOver() {
  const userinfo=JSON.parse(localStorage.getItem("highscore")) || []
  const navigate=useNavigate()
  const context = useContext(ScoreContext);
  const {score,scoreDispatch}=context
  const marks=score.score
  const [name, setname] = useState("");
  const handleChange=(e)=>{
    setname(e.target.value)
  }
  return <div>
    <div className="container">
      <div className="overbox">
        <h6>Your score: {marks}</h6>
        <form className='form' action="">
          <input type="text" name="name" id="fname" value={name}  placeholder='enter your name' onChange={handleChange}/>
          <button type="submit" style={{backgroundColor:'#218380',border:'0',padding:"5px 10px",borderRadius:'2px',cursor:'pointer'}} onClick={()=>{
            // localStorage.setItem("highscore",JSON.stringify([...userinfo,{'name':{name},'score':{marks}}]))
            navigate('/',{replace:true})
            scoreDispatch({type:"setscorezero"})
            localStorage.setItem("highscore",JSON.stringify([...userinfo,{'name':name,'score':marks}]))
            
          }}>Enter</button>
        </form>
      </div>
    </div>
  </div>;
}

export default GameOver;
