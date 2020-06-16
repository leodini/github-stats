import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    getUserStats();
  }, []);

  const getUserStats = async () => {
    const me = new GhPolyglot("leodini");
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

  return (
    <div className="App">
      <h2>github-stats</h2>
      {githubUserStats &&
        githubUserStats.map((stat) => (
          <div className="">
            <p>{stat.label}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
