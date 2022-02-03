import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Highscore.css'

function HighScore() {
    const navigate=useNavigate();
    const [twoscore, settwoscore] = useState([]);

    useEffect(() => {
        const highscores=JSON.parse(localStorage.getItem("highscore")) || [];
        highscores.sort((a,b)=>{
            return b.score-a.score
        })
        const  newhighscores=highscores.splice(2)
        if(highscores.length>2){
             settwoscore(newhighscores)
        }else{
            settwoscore(highscores)
        }
    },[]);
    
    
    
    
    
  return <div className='highscorecontainer'>
      <div className="overbox">
          <h5>Highscores</h5>
    {
        twoscore.map((user,index)=>{
            return <div className="useritem" key={index}>
                <div className="info">
                <h6>{user.name} </h6>
                <h6>{user.score}</h6>
                </div>
                </div>
        })
    }
    </div>
    <div className="buttoncontainer">
    <button className='btn'onClick={()=>{
        navigate('/',{replace:true})
    }}>Back</button>
    <button className='btn' onClick={()=>{
        localStorage.setItem("highscore",JSON.stringify([]));
        window.location.reload()
    }}>Clear highscore</button>
    </div>
  </div>;
}

export default HighScore;
