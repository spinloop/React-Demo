import React, { useState, useEffect } from 'react'

const CounterHookExample = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count: ' + count)

    if (count >= 10) {
      // clean up example that keeps counter in single digits
      return setCount(0)
    }
  }, [count])

  return ([
    <header className="Example-header">Counter Hook Example</header>,
    <div>
      <button onClick={() => setCount(count + 1)}>the count is {count}</button>
    </div>
  ])
}

export default CounterHookExample
