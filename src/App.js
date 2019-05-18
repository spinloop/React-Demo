import React from 'react';
import HOC from './examples/hoc'
import Hooks from './examples/hooks'
import ComponentMapping from './examples/component_mapping'
import MockServerSideRender from './examples/mock_server_side_render'

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
      <MockServerSideRender />
    </div>
  );
}

export default App;
