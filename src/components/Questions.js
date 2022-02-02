import React from 'react';
import { useEffect, useState,useContext } from 'react';
import QuestionItem from './QuestionItem';
import './Questionitem.css'
import ScoreContext from '../context/ScoreContext';
import { useNavigate } from 'react-router-dom';

function Questions() {
  const navigate=useNavigate();
  const context = useContext(ScoreContext);
  const {score} =context
  const {page} = score 
    const [questions, setquestions] = useState([]);
  useEffect(async () => {
  const data=await fetch("https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=multiple&page=${page}")
  const parseddata=await data.json()
  setquestions(parseddata.results)
  const over = setTimeout(()=>{
    navigate('over')
  }, 10000);
  }, [page]);
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
