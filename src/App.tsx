import React, { useEffect } from "react";
// import GhPolyglot from "gh-polyglot";
import logo from "./logo.svg";
import "./App.css";

const GhPolyglot = require("gh-polyglot");

const App: React.FC = () => {
  useEffect(() => {
    const me = new GhPolyglot("leodini");
    console.log(me);
    me.userStats((err: Error, stats: Object) => {
      if (err) {
        console.error("Error:", err);
      }
      console.log(stats);
    });
    me.getAllRepos((err: Error, stats: Object) => {
      console.log(stats);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
