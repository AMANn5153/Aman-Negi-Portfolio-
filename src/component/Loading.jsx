import React from 'react';
import Logo  from './files/Logo.mp4'

const Loading = () => {
  return (
    <div className='Load'>
      <video autoPlay loop muted>
        <source src={Logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loading;
