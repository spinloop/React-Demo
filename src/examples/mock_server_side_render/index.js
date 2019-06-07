import React from 'react'
import InnerHTML from 'dangerously-set-inner-html'
import createMarkup from './createMarkup'

export default function() {
  console.log('html: ', createMarkup())

  return (
    <div className="Example">
      <header className="Example-header">Mock Server Side Render</header>
      <InnerHTML html={createMarkup()} />
    </div>
  )
}
