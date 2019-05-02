import React from 'react'

class ClickCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <button onClick={this.increment}>{`${this.state.count} button clicks`}</button>
    )
  }
}

export default ClickCounter
