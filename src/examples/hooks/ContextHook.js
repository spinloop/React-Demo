import React from 'react'

const themes = {
  light: {
    button: {
      color: 'black',
      background: 'white',
      broder: 'none',
    },
  },
  dark: {
    button: {
      color: 'white',
      background: 'black',
      border: 'none',
    },
  },
}

const ThemeContext = React.createContext(
  themes.light
)

export default function(props) {
  const theme = React.useContext(ThemeContext)

  return (
    <div>
      <header className="Example-header">Context Hook</header>
      <div>
        <button style={theme.button}>theme style</button>
      </div>
    </div>
  )
}
