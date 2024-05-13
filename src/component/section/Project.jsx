import React from 'react';
import Card from './Card.jsx'
import {project} from '../Darray.js';
import resume from '../files/resume.pdf'
import { MdArrowOutward } from "react-icons/md";


export default function Project() {
  return (
    <div className="project">
      {project.map((item)=>(
      <Card
        key = {item.key}
        imageSrc={item.pic}
        description={item.des}
        heading={item.head}
        link = {item.link}
        />
      ))}
      <div >
        <a className="resume" href="https://drive.google.com/file/d/1VXQdBFRq2IvX0K1kOp5X7YFuWaHoNgkb/view?usp=sharing" target='_blank' >View Full Resume
        &nbsp; <MdArrowOutward className= "zoom" size={20}/>
        </a>
      </div>
    </div>
  );
}