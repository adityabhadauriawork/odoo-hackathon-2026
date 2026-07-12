import { createContext, useContext, useMemo, useState } from "react";
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
} from "@mui/material";

const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    const theme = useMemo(() =>

        createTheme({

            palette: {
                mode: darkMode ? "dark" : "light",

                primary: {
                    main: "#22D3EE",
                },

                background: {
                    default: darkMode ? "#0F172A" : "#F4F7FB",
                    paper: darkMode ? "#1E293B" : "#FFFFFF",
                },

            },

            shape: {
                borderRadius: 16,
            },

        }),

        [darkMode]

    );

    return (

        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme,
            }}
        >

            <ThemeProvider theme={theme}>

                <CssBaseline />

                {children}

            </ThemeProvider>

        </ThemeContext.Provider>

    );

};

export const useThemeContext = () => useContext(ThemeContext);