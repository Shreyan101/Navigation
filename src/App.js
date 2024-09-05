import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  const [activePage, setActivePage] = useState('One');

  return (
    <div className='App'>
      <Header setActivePage={setActivePage} />
      <Content activePage={activePage} />
      <Footer />
    </div>
  );
}

export default App;
