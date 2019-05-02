import React from 'react'

class HoverCounter extends React.Component {
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
      <button onMouseOver={this.increment}>{`${this.state.count} button hovers`}</button>
    )
  }
}

export default HoverCounter
