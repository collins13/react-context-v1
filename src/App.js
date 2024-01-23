import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider, { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContenxtProvider from "./context/AuthContenxt";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContenxtProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContenxtProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
