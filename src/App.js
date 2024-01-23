import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider, { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContenxtProvider from "./context/AuthContenxt";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContenxtProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContenxtProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
