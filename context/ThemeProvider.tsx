'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { FC } from 'react';
import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}
interface ThemeProviderType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeProviderType | undefined>(undefined);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState('');
  const handleThemeChange = () => {
    if (mode === 'dark') {
      setMode('light');
      document.documentElement.classList.add('light');
    } else {
      setMode('dark');
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
