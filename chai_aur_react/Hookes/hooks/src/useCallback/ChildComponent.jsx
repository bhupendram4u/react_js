// import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = ({ onClick }) => {
    console.log("Child Rendered")
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

ChildComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ChildComponent;