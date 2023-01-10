import React, { createContext } from 'react';
import './App.css';
import { useState } from 'react';
import Homepage from './pages/homepage';
import ThemeButton from './theme_botton';

//create the context
//provide the context
//consume  the context

export const ThemeContext = createContext(null)
const App = () => {
  const [theme, setTheme] = useState(false)
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      <div className='App' style={theme ? { backgroundColor: "#feb300" } : {}}>
        <ThemeButton />
        <Homepage />
      </div>
    </ThemeContext.Provider>
  )
}
export default App;