import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggler = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      margin: '10px',
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#000'
    }}>
      <h2>useContext Theme Example</h2>
      <p>Current theme: {isDarkMode ? 'Dark' : 'Light'}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggler;