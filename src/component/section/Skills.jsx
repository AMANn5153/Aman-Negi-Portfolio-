import React from 'react';
import {skills} from '../Darray.js';
import Skilldiv from './Skilldiv.jsx';

export default function Skills() {
  return (
    <>
      <div className='skills'>

      {skills.map((item)=>(
        <Skilldiv head = {item.head}
          icons= {item.icons}
          key = {item.key}
          />
      ))}
      </div>
    </>
  );
}

