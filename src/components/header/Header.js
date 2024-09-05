import React, { useCallback, useState } from 'react';
import './Header.css';

const HeaderText = ['One', 'Two', 'Three'];

const Header = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClick = useCallback(
    (text) => {
      setActivePage(text);
      setIsOpen(false);
    },
    [setActivePage]
  );

  return (
    <header>
      <nav className='navbar'>
        <div className='logo'>Navigation App</div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {HeaderText?.map((item) => (
            <li
              key={item}
              onClick={() => {
                handleOnClick(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className='hamburger' onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
