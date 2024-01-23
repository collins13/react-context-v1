import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContenxt } from "../context/AuthContenxt";

export default class Navbar extends Component {
  render() {
    return (
      <AuthContenxt.Consumer>
        {(authContenxt) => (
          <ThemeContext.Consumer>
            {(themeContenx) => {
              const { isLightTheme, light, dark } = themeContenx;
              const theme = isLightTheme ? light : dark;
              const { isAuthenticated, toggleAuth } = authContenxt;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App </h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged In" : "Logged Out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContenxt.Consumer>
    );
  }
}
