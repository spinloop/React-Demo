import React from 'react'
import { componentForKey } from './componentMap'

const DefaultComponent = props => (
  <div {...props}>{props.text}</div>
)

const OtherComponent = props => (
  <div {...props}>themed {props.text}</div>
)

const themeMap = {
  'default': DefaultComponent,
  'other': OtherComponent
}

const componentForTheme = themeMap => props => {
  const Component = componentForKey(themeMap, "theme")(props)

  return <Component {...props} />
}

export default function render(props) {
  return componentForTheme(themeMap)(props)
}
