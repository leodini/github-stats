import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState<string>("");

  const history = useHistory();

  const handleSearch = (e: any) => {
    e.preventDefault();
    history.push(`/${username}`);
    // getUserStats(username);
  };

  return (
    <>
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
    </>
  );
};

export default Home;
