import React from 'react';
import {certification} from '../Darray.js';
import Card from './Card.jsx'

export default function Addtionals() {
  return (
    <div className="Addtionals">
      {certification.map((item)=>(
      <Card
        key = {item.key}
        description={item.des}
        heading={item.head}
        link = {item.link}
        imageSrc = {item.pic}
        />
      ))}
    </div>
  );
}