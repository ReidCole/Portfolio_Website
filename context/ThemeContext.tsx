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
    if (typeof localStorage !== "undefined") {
      const initial: string | null = localStorage.getItem("darkmode");
      const intialAsBool: boolean = initial === "true" ? true : false;
      console.log("initial:", initial);
      setDarkMode(intialAsBool);
    }
  }, []);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    const scrollbarTracks = document.querySelectorAll("*::-webkit-scrollbar-track");
    const scrollbarThumbs = document.querySelectorAll("*::-webkit-scrollbar-thumb");
    if (darkMode) {
      html.className = "dark";
      scrollbarTracks.forEach((el) => (el.className = "dark"));
      scrollbarThumbs.forEach((el) => (el.className = "dark"));
    } else {
      html.className = "";
      scrollbarTracks.forEach((el) => (el.className = ""));
      scrollbarThumbs.forEach((el) => (el.className = ""));
    }
  }, [darkMode]);

  function setDarkModeAndLocalStorage(value: boolean) {
    setDarkMode(value);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("darkmode", value ? "true" : "false");
      console.log("set local storage darkmode to", value);
    }
  }

  const value: Value = {
    setDarkMode: setDarkModeAndLocalStorage,
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
