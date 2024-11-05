import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme)
  };

  return (    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};