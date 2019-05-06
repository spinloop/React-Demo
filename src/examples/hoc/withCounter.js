import React, { useState } from 'react'

const withCounter = (WrappedComponent, multiplier) => {
  const WithCounter = props => {
    const [count, setCount] = useState(0)

    return (
      <WrappedComponent
        count={count}
        increment={() => setCount(count + (1 * multiplier))}
        {...props}
      />
    )
  }

  return WithCounter
}

export default withCounter
