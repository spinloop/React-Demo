import React from 'react'
import withCounter from './withCounter'

class HoverCounter extends React.Component {
  render() {
    const { count, increment, type } = this.props

    return (
      <button onMouseOver={increment}>{`${count} button ${type}s`}</button>
    )
  }
}

export default withCounter(HoverCounter, 10)
