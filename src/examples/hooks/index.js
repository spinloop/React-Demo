import React, { useState } from 'react'
import '../../App.css';

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div className="Example">
      <header className="Example-header">Hook Demo</header>
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  )
}
