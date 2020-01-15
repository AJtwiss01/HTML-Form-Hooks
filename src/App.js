import React, { useState } from "react";
import "./styles.css";
import { InputForm } from "./components/InputForm";
import { OutputLeaderboard } from "./components/OutputLeaderboard";

export default function App() {
  const [leaderboard, setLeaderboard] = useState([]);
  const updateLeaderboardArray = eachEntry => {
    setLeaderboard([...leaderboard, eachEntry]);
    console.log("leaderboard set by form submit ", leaderboard);
  };
  return (
    <div className="App">
      <InputForm updateLeaderboardArray={updateLeaderboardArray} />
      <OutputLeaderboard leaderboard={leaderboard} />
    </div>
  );
}
