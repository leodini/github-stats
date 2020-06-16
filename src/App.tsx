import React, { useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";

const GhPolyglot = require("gh-polyglot");

interface githubStats {
  label: String;
  value: Number;
  color: String;
}

const App: React.FC = () => {
  const [githubUserStats, setGithubUserStats] = useState<Array<githubStats>>(
    []
  );
  const [username, setUsername] = useState<string>("");

  const getUserStats = async (username: string) => {
    const me = new GhPolyglot(username);
    console.log(me);
    await me.userStats((err: Error, stats: Array<githubStats>) => {
      if (err) {
        console.error("Error:", err);
      }
      console.log(stats);
      setGithubUserStats(stats);
    });
    console.log(githubUserStats);
    await me.getAllRepos((err: Error, stats: Object) => {
      console.log(stats);
    });
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    getUserStats(username);
  };

  // useEffect(() => {
  //   getUserStats(username);
  // }, []);

  return (
    <div className="App">
      <h2>github-stats</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="github username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button type="submit">buscar</button>
      </form>
      {githubUserStats &&
        githubUserStats.map((stat, i) => (
          <div key={i}>
            <p style={{ color: `${stat.color}` }}>{stat.label}</p>
          </div>
        ))}
      {githubUserStats && <Chart userData={githubUserStats} />}
    </div>
  );
};

export default App;
