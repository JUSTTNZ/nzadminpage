import { createContext, useState } from "react";
import PropTypes  from 'prop-types';
import { DARK_THEME, LIGHT_THEME } from '../constants/themeConstants';

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
    const [theme, setTheme ] = useState(LIGHT_THEME); //initially theme is set
    window.localStorage.setItem("themeMode", theme); // storing in the local storage

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
        window.localStorage.setItem("themeMode", theme);

    }

    return (
        <ThemeContext.Provider value = {{
            theme, toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}