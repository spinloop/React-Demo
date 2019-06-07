import React from 'react'
import { renderToString } from 'react-dom/server'
import ReactComponent from './ReactComponent'
import preval from 'babel-plugin-preval/dist/macro'

const script = preval`
  const fs = require('fs');
  const path = require('path');
  module.exports = fs.readFileSync(path.join(__dirname, './script.js'), 'utf8');
`

export default function() {
  const window = `
    <script>
      window.chicken = '"I want that chicken. Give me that chicken. -- Mara"';
      window.mockServerSideRenderObject = { name: { first: 'Birdle Doo', middle: 'Burdle Buck', last: 'Chicken' } };
    </script>
  `
  const logs = `
    <script>
      console.log('window.chicken: ', window.chicken);
      console.log('window.mockServerSideRenderObject: ', window.mockServerSideRenderObject);
    </script>
  `

  const reactComponent = renderToString(<ReactComponent />)

  const scriptForReactComponent = `<script>${script};</script>`

  return window + logs + reactComponent + scriptForReactComponent
}
