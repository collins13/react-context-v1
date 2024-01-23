import React, { Component, useCallback, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>toggle Theme</button>;
};

export default ThemeToggle;
