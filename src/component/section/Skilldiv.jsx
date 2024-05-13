import React from 'react';
import './section.css';
// import Tooltip from '@mui/material/Tooltip';


export default function Skilldiv(props) {
  return (
    <>
      <div className="skills-topic">
        <div className = "head">
          <h5 className='fw-bold' >{props.head}</h5>
        </div>
        <div className='skills-icons'>
          {props.icons.map((icon) =>(
            icon
          ))}
        </div>
        </div>
    </>
  );
}

