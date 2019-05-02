import React from 'react'
import withCounter from './withCounter'

const HoverCounter = ({ count, increment, type }) => (
  <button onMouseOver={increment}>{`${count} button ${type}s`}</button>
)

export default withCounter(HoverCounter, 10)
