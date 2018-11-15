import React from 'react';
import PropTypes from 'prop-types';

const InputRange = ({ onChange, value, ...rest}) => (
  <div>
    <label htmlFor="animation-duration">Animation duration: {value}sec</label>
    <br />
    <input
      id="animation-duration"
      type="range"
      min="0.2"
      max="20"
      step="0.1"
      value={value}
      onChange={onChange}
      {...rest}
    />
  </div>
);

InputRange.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

InputRange.defaultProps = {
  value: 0,
  onChange: () => {},
};

export default InputRange;
