# Starter-Pack-Resact-Hooks

## Development

You can start the dev server with this command:

```bash
npm start
```

## Production

You can build the project with this command:

```bash
npm run build
```

## Home - With Hooks

**src/components/Home/index.js**

```jsx
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

```

## Home - Without Hooks

**src/components/Home/index_without_hooks.js**

```jsx
import React from 'react';

import ReactIcon from '../ReactIcon';
import InputRange from '../InputRange';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationDuration: 4,
    };
    this.handleSetAnimationDuration = this.handleSetAnimationDuration.bind(this);
  }

  handleSetAnimationDuration(e) {
    this.setState({ animationDuration: parseFloat(e.target.value) });
  }

  render() {
    return (
      <div>
        <h1>
          Starter-Pack-React-Hooks
        </h1>
        <InputRange
          value={this.state.animationDuration}
          onChange={this.handleSetAnimationDuration}
        />
        <div>
          <ReactIcon
            animationDuration={this.state.animationDuration}
          />
        </div>
      </div>
    );
  }
}

export default Home;

```
