import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ScoreContext from '../context/ScoreContext';
import './Home.css'
function Navbar() {
    const navlinkstyles=({isActive})=>{
        return {
            textDecoration:'none',
            fontWeight:'medium',
            color:'white'
        }
    }
    const context = useContext(ScoreContext);
    const {score}=context
  return <div>
      <nav className='navbar'>
          <ul>
              <li>
                <NavLink to='highscore' style={navlinkstyles}>  View Highscore </NavLink>
                  </li>
              <li>Time : {score.timecounter}</li>
          </ul>
      </nav>
  </div>;
}

export default Navbar;
