import React, { Component } from 'react';
import SliderWrapper from './src/SliderWrapper';

class App extends Component {
  render() {
    return (
      < SliderWrapper {...this.props}  />
    )
  }
}

export default App;