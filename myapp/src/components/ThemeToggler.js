import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggler = () =>{
    const{isDarkMode, toogleTheme} = useTheme();

    return(
        <div style={
            {
                padding: '20px',
                border: '1px solid #ccc',
                margin: '10px',
                backgroundColor: isDarkMode ? '#333' : '#fff',
                color: isDarkMode ? '#fff' :'#000'
            }
        }>
            <h2>useContext Theme example</h2>
            <p>Current Theme: {isDarkMode ? 'Dark' : 'Light'}</p>
            <button onClick={toogleTheme}>Toogle Theme</button>
        </div>
    );
};

export default ThemeToggler;