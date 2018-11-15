import React, { useState } from 'react';

import ReactIcon from '../ReactIcon';
import InputRange from '../InputRange';

const Home = () => {
  const [ animationDuration, setAnimationDuration] = useState(4);

  function handleSetAnimationDuration(e) {
    setAnimationDuration(parseFloat(e.target.value));
  }

  return (
    <div>
      <h1>
        Starter-Pack-React-Hooks
      </h1>
      <InputRange
        value={animationDuration}
        onChange={handleSetAnimationDuration}
      />
      <div>
        <ReactIcon
          animationDuration={animationDuration}
        />
      </div>
    </div>
  );
};

export default Home;
