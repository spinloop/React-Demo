import React from 'react'

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
  const Component = themeMap[props.theme]

  return <Component {...props} />
}

export default function render(props) {
  return componentForTheme(themeMap)(props)
}
