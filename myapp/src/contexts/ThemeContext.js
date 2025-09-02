import React, {createContext, useContext, useState} from 'react';

const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({children}) => {
    const[isDarkMode, setIsDark] = useState(flase);

    const toogleTheme = () =>{
        setIsDarkMode(prvMode => !prevMode);
    };

    const value = {
        isDarkMode,
        toogleTheme
    };

    return(
        <ThemeContext.Provider value ={value}>
            {children}
        </ThemeContext.Provider>
    )
}