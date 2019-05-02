import React from 'react'
import withCounter from './withCounter'

class ClickCounter extends React.Component {
  render() {
    const { count, increment } = this.props

    return (
      <button onClick={increment}>{`${count} button clicks`}</button>
    )
  }
}

export default withCounter(ClickCounter)
