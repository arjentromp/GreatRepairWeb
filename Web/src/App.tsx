import React, { useEffect, useState } from 'react';
import { HomePage } from './Pages/HomePage/HomePage';
import { WelcomePage } from './Pages/WelcomePage/WelcomePage';

export const Home: React.FC = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (!name) {
      setName(localStorage.getItem('CachedUserName') || '');
    }
  }, []);

  useEffect(() => {
    if (name) localStorage.setItem('CachedUserName', name);
    // hieronder is dependency array, deze functie hierboven triggerd wanneer iets hier in wijzigd;
    // een lege dependency array triggert 1 x aan het begin
  }, [name]);

  if (name === '') return <WelcomePage setName={setName} />;
  return <HomePage name={name} />;
};
