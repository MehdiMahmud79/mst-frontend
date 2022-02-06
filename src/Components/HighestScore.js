import React from "react";
import { flags } from "../utils/flags";
import ReactCountryFlag from "react-country-flag";
import Flag from "./Flag";
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
            <span className="font-bold text-gray-900 mx-2">|</span>Score:{" "}
            <span className="font-bold text-yellow-400 mx-2">
              {highestScore.Score}
            </span>{" "}
            <span className="font-bold text-gray-900 mx-2">|</span> Rank:{" "}
            <span className="font-bold text-yellow-400 mx-2">
              {highestScore.CalculatedRankInteger}
            </span>{" "}
            <span className="font-bold text-gray-900 mx-2">|</span> InStrokes:{" "}
            <span className="font-bold text-yellow-400 mx-2">
              {highestScore.InStrokes}
            </span>
            <span className="font-bold text-gray-900 mx-2">|</span> Match:{" "}
            <span className="font-bold text-yellow-400 mx-2">
              {highestScore.Match}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighestScore;
