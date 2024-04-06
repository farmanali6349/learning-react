import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './context/ThemeContext'
import { Button, Card } from './components';
import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState('lgiht');
  function lightMode() {
    setThemeMode('light')
  }
  function darkMode() {
    setThemeMode('dark')
  }

  useEffect(()=> {
    const html = document.querySelector('html');
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
  }, [themeMode])

  return (
    
    <ThemeContextProvider value={{themeMode, lightMode, darkMode}}>
      <Button />
      <Card />
    </ThemeContextProvider>
    
  )
}

export default App
