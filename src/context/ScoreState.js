import React, { useState } from 'react';
import { useReducer } from 'react';
import ScoreContext from './ScoreContext';
const initial={score:0,page:0,timecounter:null}

const reducer=(state,action)=>{
    switch(action.type){
        case 'correct':
            return {...state,score:state.score+4}
        case 'incorrect':
            return {...state,score:state.score-1}
        case 'yes':
            return {...state,page:state.page+1} 
        case 'set':
            return {...state,timecounter:50} 
        case 'decrease':
            return {...state,timecounter:state.timecounter-1} 
        case 'setnull':
            return {...state,timecounter:null} 
        default:
            return state
    }
}

function ScoreState(props) {
    // const [name, setname] = useState("aditya")
    const [count, dispatch] = useReducer(reducer, initial)
    // const [page, dispatchpage] = useReducer(reducer1, page)
    return (
        <div>
            <ScoreContext.Provider value={{score:count,scoreDispatch:dispatch}}>
            {props.children}
            </ScoreContext.Provider>
        </div>
    )
}

export default ScoreState;
