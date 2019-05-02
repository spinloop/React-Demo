import React from 'react'

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  return WithCounter
}

export default withCounter
