(function() {
  console.log('called mock server-side render script for react component')

  // set theme colors
  const lightColor = 'lightgray'
  const darkColor = 'darkgray'
  const defaultColor = 'white'
  const COLOR_KEY = 'COLOR_KEY'

  // create dom references
  const background = document.getElementById("background")
  const controlSection = document.querySelector(".controls-section")
  const lightThemeButton = document.getElementById("light-theme-button")
  const darkThemeButton = document.getElementById("dark-theme-button")
  const closeButton = document.querySelector('.close-button')
  const previewSection = document.getElementById("preview-section")
  const displayArea = document.getElementById("display-name")

  // grab name to display from browser's window object
  if (displayArea) {
    const name = window.mockServerSideRenderObject.name
    const displayName = `${name.first} ${name.middle} ${name.last}`
    displayArea.innerHTML = `<div>${displayName}</div>`
  }

  // use saved theme preference otherwise use default
  const currentColor = localStorage.getItem(COLOR_KEY)
  if (currentColor) {
    previewSection && (previewSection.style.backgroundColor = currentColor)
  } else {
    previewSection && (previewSection.style.backgroundColor = defaultColor)
  }

  controlSection && controlSection.addEventListener("click", function(event) {
    // log event
    console.log('clicked controls section')

    // remove section from dom
    controlSection && controlSection.remove()
  })

  lightThemeButton && lightThemeButton.addEventListener("click", function(event) {
    // log event
    console.log('clicked light theme')

    // stops bubbling click event to parent (control section)
    // otherwise, its click events are triggered too
    event.stopPropagation()

    // set background color
    previewSection && (previewSection.style.backgroundColor = lightColor)

    localStorage.setItem(COLOR_KEY, lightColor)
  });

  darkThemeButton && darkThemeButton.addEventListener("click", function (event) {
    // log action
    console.log('clicked dark theme')

    // stops bubbling click event to parent (control section)
    // otherwise, its click events are triggered too
    event.stopPropagation()

    // set background color
    previewSection && (previewSection.style.backgroundColor = darkColor)

    localStorage.setItem(COLOR_KEY, darkColor)
  });

  closeButton && closeButton.addEventListener("click", function(event) {
    // log action
    console.log('clicked close button')

    // stops bubbling click event to parent (control section)
    // otherwise, its click events are triggered too
    event.stopPropagation()

    // remove section from dom
    controlSection && controlSection.remove()
  })

  previewSection && previewSection.addEventListener("click", function(event) {
    // log action
    console.log('clicked preview section')

    // add controls section back to dom
    background && background.prepend(controlSection)
  })
})()
