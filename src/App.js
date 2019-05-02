import React from 'react';
import HOC from './examples/hoc'
import Hooks from './examples/hooks'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Demo
      </header>
      <HOC />
      <Hooks />
    </div>
  );
}

export default App;
