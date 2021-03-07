import './App.css';
import { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import MainContent from './components/MainContent/MainContent';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => {
    setDarkMode(darkMode => !darkMode);
  };

  useEffect(() => {
    const color = darkMode ? 'var(--very-dark-blue)' : 'var(--very-light-gra)';
    document.body.style.backgroundColor = color;
  }, [darkMode]);

  const mode = {
    changeMode,
    darkMode
  };

  const className = `App ${darkMode ? 'dark' : 'light'}`;

  return (
    <div className={className}>
      <Hero {...mode} />
      <div className="container">
        <MainContent {...mode} />
      </div>
    </div>
  );
}

export default App;
