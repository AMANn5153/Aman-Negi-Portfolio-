import React from 'react';
import './Card.css'; // Import CSS file for styling

const Card = ({ imageSrc, heading, description, link }) => {
  const handleClick=()=>{
    window.open(link, '_blank');
  }
  return (
    <div  className="card-sec image-h" onClick={handleClick}>
      <div className="image-container">
        <img src={imageSrc} alt="Card" className="card-image" />
      </div>
      <div className="content-container">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
