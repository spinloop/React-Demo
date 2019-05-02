import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import '../../App.css';

export default () => (
  <div className="Example">
    <header className="Example-header">HOC Demo</header>
    <ClickCounter />
    <HoverCounter />
  </div>
)
