import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ReactIcon = ({ animationDuration, ...rest }) => {
  const props = {
    style: {
      animation: `rotate ${animationDuration}s infinite linear`,
    },
    className: 'react-icon',
    ...rest,
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    alt: 'React Icon',
  };
  return (
    <img
      {...props}
    />
  );
}

ReactIcon.propTypes = {
  animationDuration: PropTypes.number,
};

ReactIcon.defaultProps = {
  animationDuration: 4,
};

export default ReactIcon;
