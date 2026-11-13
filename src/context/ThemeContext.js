import { createContext, useContext } from 'react'

export const ThemeContext = createContext({ darkMode: true, setDarkMode: () => {} })
export const useTheme = () => useContext(ThemeContext)
