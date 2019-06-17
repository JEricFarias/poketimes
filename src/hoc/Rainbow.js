import React from 'react';

const Rainbow = WrappedComponent => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const ramdomColor = colors[Math.floor(Math.random() * 6)];
  const className = ramdomColor.concat('-text');

  // return a new stateless component
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
