import React, { useContext, useReducer, useState } from 'react';
import './Questionitem.css'
import ScoreContext from '../context/ScoreContext';


function QuestionItem(props) {
    // const [index, setindex] = useState(0);
    const context = useContext(ScoreContext)
    const {score,scoreDispatch}=context
    const choices=['A','B','C','D']
    const {question,correct_answer,incorrect_answers}=props.question
    const index_correct=Math.floor(Math.random() * 3 )+1;
    const answerschoices=[...incorrect_answers]
    answerschoices.splice(index_correct-1,0,correct_answer)
  return <div>
      <div className="outerbody">
          <div className="question">{question}</div>
          <div className="optionbody">
          {answerschoices.map((element,index) => {
              return <div className="options" key={index} onClick={()=>{
                  if(index===index_correct-1){
                    scoreDispatch({type:"correct"})
                  }else{
                    scoreDispatch({type:'incorrect'})
                  }
                  if(score.page<5){
                    scoreDispatch({type:"yes"})
                  }
              }}>
                  <span>{choices[index]}</span>
                  
                  <div>{element}</div>
                  
              </div>
          })}
          </div>
      </div>
  </div>;
}

export default React.memo(QuestionItem) ;
