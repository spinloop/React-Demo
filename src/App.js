import React from 'react';
import HOC from './examples/hoc'
import Hooks from './examples/hooks'
import ComponentMapping from './examples/component_mapping'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Demo
      </header>
      <HOC />
      <Hooks />
      <ComponentMapping />
    </div>
  );
}

export default App;
