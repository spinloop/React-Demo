import React from 'react'
import withCounter from './withCounter'

const ClickCounter = ({ count, increment, type }) => (
  <button onClick={increment}>{`${count} button ${type}s`}</button>
)

export default withCounter(ClickCounter, 1)
