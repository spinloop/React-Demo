import React, { useState, useEffect } from 'react'

export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    return () => {
      console.log('clean up')
    }
  })

  return (
    <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
  )
}
