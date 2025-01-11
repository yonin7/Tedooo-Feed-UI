import React from "react";
import Feed from "./components/Feed.tsx";
import Logo from "./components/Logo.tsx";
import Navigation from "./components/Navigation.tsx";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <Logo />
        <Navigation />
      </header>
      <main>
        <Feed />
      </main>
    </div>
  );
};

export default App;
