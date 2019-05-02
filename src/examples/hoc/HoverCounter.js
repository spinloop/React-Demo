import React from 'react'
import withCounter from './withCounter'

class HoverCounter extends React.Component {
  render() {
    const { count, increment } = this.props

    return (
      <button onMouseOver={increment}>{`${count} button hovers`}</button>
    )
  }
}

export default withCounter(HoverCounter)
