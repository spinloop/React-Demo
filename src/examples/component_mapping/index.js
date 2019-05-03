import React from 'react'
import '../../App.css';
import map from 'lodash/map'

export default () => {
  // mock api response
  const data = [
    {
      __typename: 'a',
      text: 'goat',
      style: {
        color: '#DCDCDC'
      }
    },
    {
      __typename: 'b',
      text: 'chicken',
      style: {
        color: 'black'
      }
    },
    {
      __typename: 'c',
      text: 'llama',
      style: {
        color: '#808080',
        display: 'block'
      },
      href: 'http://localhost:3001/'
    }
  ]

  // components
  const A = (props) => <div {...props}>{props.text}</div>
  const B = (props) => <button {...props}>{props.text}</button>
  const C = (props) => <a {...props}>{props.text}</a>

  // componentMap
  const componentMap = {
    'a': A,
    'b': B,
    'c': C
  }

  const elements = map(data, (item, index) => {
    const component = componentMap[item.__typename]
    const props = { ...item, ...{ key: index }}
    console.log(props)

    return React.createElement(component, props)
  })

  return (
    <div className="Example">
      <header className="Example-header">Component Mapping Demo</header>
      <React.Fragment>{elements}</React.Fragment>
    </div>
  )
}
