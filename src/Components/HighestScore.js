import React from "react";
import Flag from "./Flag";
import "./highScore.css";
const HighestScore = ({ highestScore }) => {
  return (
    <div className="bg-blue-600 p-2 text-blue-100 rounded-t-xl">
      <div>
        <span className="bg-red-600 w-fit p-1 px-3 rounded-r-xl -top-5 -left-2 shadow-xl relative">
          <i className="fas fa-star font-bold text-gray-900"></i> Highest Score
        </span>
        <div className="font-bold flex  text-gray-100 p-2">
          <Flag player={highestScore} />
          <div>
            <span className="titles">|</span>Score:{" "}
            <span className="results">{highestScore.Score}</span>{" "}
            <span className="titles">|</span> Rank:{" "}
            <span className="results">
              {highestScore.CalculatedRankInteger}
            </span>{" "}
            <span className="titles">|</span> InStrokes:{" "}
            <span className="results">{highestScore.InStrokes}</span>
            <span className="titles">|</span> Match:{" "}
            <span className="results">{highestScore.Match}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighestScore;
