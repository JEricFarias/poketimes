import React from 'react';
import Rainbow from './../hoc/Rainbow';

const About = props => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <h6>{props.name}</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quas
        distinctio? Quos rem dignissimos minus neque non assumenda magni culpa
        magnam, rerum corrupti, doloribus voluptas sunt, itaque voluptatibus
        nisi aliquam!
      </p>
    </div>
  );
};

export default Rainbow(About);
