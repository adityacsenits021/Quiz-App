import React from 'react';
import { useEffect, useState,useContext } from 'react';
import QuestionItem from './QuestionItem';
import './Questionitem.css'
import ScoreContext from '../context/ScoreContext';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react/cjs/react.production.min';

function Questions() {
  const navigate=useNavigate();
  const context = useContext(ScoreContext);
  const {score,scoreDispatch} =context
  const {page,timecounter} = score 
    const [questions, setquestions] = useState([]);
  useEffect(async () => {
  const data=await fetch("https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple&page=${page}")
  const parseddata=await data.json()
  setquestions(parseddata.results)
    scoreDispatch({type:"set"})
  const over = setTimeout(()=>{
    navigate('over',{replace:true})
    scoreDispatch({type:'setnull'})
  }, 30000);
  
  },[page]);
  useEffect(() => {
    const interval=setInterval(()=>{
      scoreDispatch({type:"decrease"})
    },1000)
    return () => {
      clearInterval(interval)
    };
  },[timecounter]);
  
  return <div className='questionfull'>
    <h5>score is - {score.score}</h5>
    {
      questions.map((question,index)=>{
      return <div className="set" key={index}>
        <QuestionItem question={question}/>
      </div>
    })}
    
    {/* <QuestionItem question={[question]}/> */}
    
   
    <span className='submit'>Submit</span>
  </div>;
}

export default Questions;
