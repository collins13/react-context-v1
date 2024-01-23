import React, { Component, createContext } from "react";

export const AuthContenxt = createContext();

class AuthContenxtProvider extends Component {
  state = {
    isAuthenticated: false,
  };

  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };
  render() {
    return (
      <AuthContenxt.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContenxt.Provider>
    );
  }
}

export default AuthContenxtProvider;
