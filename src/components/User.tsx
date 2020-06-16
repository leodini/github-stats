import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Chart from "./Chart/Chart";

const GhPolyglot = require("gh-polyglot");

interface githubStats {
  label: String;
  value: Number;
  color: String;
}

const User = () => {
  const [languageData, setLanguageData] = useState<Array<githubStats>>([]);
  const [reposData, setReposData] = useState<Array<Object>>([]);
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState("");
  const { username } = useParams();

  const getPolyglot = async () => {
    const me = new GhPolyglot(username);
    await me.userStats((err: Error, stats: Array<githubStats>) => {
      if (err) {
        console.error("Error:", err);
      }
      setLanguageData(stats);
    });
    console.log(setLanguageData);
    await me.getAllRepos((err: Error, stats: Object) => {
      if (err) {
        console.error(err);
      }
      console.log(stats);
    });
  };

  const getUser = async () => {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}`
    );
    setUserData(data);
  };

  const getUserReposData = async () => {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );
    setReposData(data);
  };

  useEffect(() => {
    getPolyglot();
    getUser();
    getUserReposData();
  }, []);

  return (
    <div className="user">
      {languageData &&
        languageData.map((stat, i) => (
          <div key={i}>
            <p style={{ color: `${stat.color}` }}>{stat.label}</p>
          </div>
        ))}
      {languageData && <Chart languageData={languageData} />}
    </div>
  );
};

export default User;
