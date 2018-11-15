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
