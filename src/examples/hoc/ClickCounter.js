import React from 'react'
import withCounter from './withCounter'

class ClickCounter extends React.Component {
  render() {
    const { count, increment, type } = this.props

    return (
      <button onClick={increment}>{`${count} button ${type}s`}</button>
    )
  }
}

export default withCounter(ClickCounter, 1)
