import React, { useState, useEffect } from 'react';
import Easywork from '../../public/OkeasyworkLogo.svg';
import DarkmodeEasywork from '../../public/DarkmodeOkeasyworkLogo.svg';
import '../css/Navbar.css';
import '../css/DefineFont.css';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage first
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav>
      <div className="navbarcontent">
        <a href="/" className="nvtext">
          <img src={isDarkMode ? DarkmodeEasywork : Easywork} alt="EasyworkLogo" />
        </a>
        <ul className="nvlinks">
          <li><a href="">ราคา</a></li>
          <li><a href="https://www.instagram.com/ok.easywork/" id="HighlightTextcontent">ติดต่อ</a></li>
          {/* <li><button onClick={toggleTheme}>{isDarkMode ? 'Light' : 'Dark'}</button></li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
