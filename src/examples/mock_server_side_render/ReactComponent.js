import React from 'react'

export default () => (
  <div id='background' style={{ color: 'black', backgroundColor: 'white', width: 300 }}>
    <section className='controls-section'>
      <header>pick a theme</header>
      <button id='light-theme-button'>light</button>
      <button id='dark-theme-button'>dark</button>
      <button className='close-button'>close</button>
    </section>
    <section id='preview-section' style={{ backgroundColor: 'gray', width: 300, height: 50 }}>
      <div style={{ textAlign: 'center' }}>
        <div> theme preview:</div>
        <div id='display-name' />
      </div>
    </section>
  </div>
)
