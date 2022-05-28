import React, { useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type Value = {
  darkMode: boolean;
  setDarkMode: (active: boolean) => void;
};

export const ThemeContext: React.Context<Value | null> = React.createContext<Value | null>(null);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    const scrollbarTracks = document.querySelectorAll("*::-webkit-scrollbar-track");
    const scrollbarThumbs = document.querySelectorAll("*::-webkit-scrollbar-thumb");
    if (darkMode) {
      html.className = "";
      scrollbarTracks.forEach((el) => (el.className = ""));
      scrollbarThumbs.forEach((el) => (el.className = ""));
    } else {
      html.className = "light";
      scrollbarTracks.forEach((el) => (el.className = "light"));
      scrollbarThumbs.forEach((el) => (el.className = "light"));
    }
  }, [darkMode]);

  function setDarkModeValue(value: boolean) {
    setDarkMode(value);
  }

  const value: Value = {
    setDarkMode: setDarkModeValue,
    darkMode: darkMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return (regularClassName: string, darkModeClassName: string): string => {
    return `${regularClassName} ${theme?.darkMode ? darkModeClassName : ""}`;
  };
};
