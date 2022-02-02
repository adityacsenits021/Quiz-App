import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
function Home() {
  const navigate=useNavigate()
  return <div className="homecontent">
  <div className='homediv'>
      <div className="content">
        <h5 style={{'textAlign':'center','fontWeight':'bold','fontSize':'16px',"marginBottom":"20px"}}>Coding quiz Contest</h5>
        <p style={{"marginBottom":"10px"}}>You are awarded 4 marks for each correct answers.</p>
        <p style={{"marginBottom":"10px"}}>Try to answer to following code-related questions within the time limit.</p>
      </div>
      <button className='btn' onClick={()=>navigate('question')}>Start Quiz</button>
  </div>
  </div>
}

export default Home;
