import React from 'react'
import './style.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';
const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    // console.log(theme, setTheme)
    return (

        < button style={theme ? { backgroundColor: '#12443b' } : {}}
            onClick={() => setTheme(!theme)} className='themeButton' >
            Change Theme
        </ button>
    )
}

export default ThemeButton