import React from 'react';
import './LinkedButton.css';

const LinkedButton = (props) => {
  return (
    <a href={props.href} className='buttonstyle' target='_blank' rel='noopener noreferrer'>
      {props.title}
    </a>
  );
};

export default LinkedButton;
