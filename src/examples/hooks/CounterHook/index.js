import React, { useState, useEffect } from 'react'

const CounterHookExample = () => ([
  <header className="Example-header">Counter Hook Example (custom hook)</header>,
  <div>
    <Clicking />
    <Hovering />
  </div>
])

const Clicking = () => {
  // objecty destructuring
  const { count, increment } = useCounter()

  return (
    <button onClick={increment}>the count is {count}</button>
  )
}

const Hovering = () => {
  const { count, increment } = useCounter()

  return (
    <div onMouseOver={increment}>the hover count is {count}</div>
  )
}

function useCounter() {
  // array destructuring
  const [count, setCount] = useState(0)

  function handleIncrement(e) {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('count: ' + count)

    if (count >= 10) {
      // clean up example that keeps counter in single digits
      return setCount(0)
    }
  }, [count])

  // note the custom hook can return an object that can be destructed when its consumed
  return { count, increment: handleIncrement }
}

export default CounterHookExample
