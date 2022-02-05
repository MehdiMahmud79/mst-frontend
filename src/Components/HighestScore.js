import React from "react";
import { flags } from "../utils/flags";
import ReactCountryFlag from "react-country-flag";

const HighestScore = ({ highestScore }) => {
  return (
    <div className="bg-blue-600 p-2 text-blue-100 rounded-t-xl">
      <h1>
        <span className="font-bold text-gray-100 p-2">
          {flags[highestScore.Nationality] ? (
            <span>
              <ReactCountryFlag
                className="mx-2 rounded-full"
                countryCode={flags[highestScore.Nationality]}
                svg
                style={{
                  width: "3em",
                  height: "2em",
                }}
                title={highestScore.Nationality}
              />
            </span>
          ) : (
            <h1 className=" m-2 ">
              <span className="text-sm px-2 py-1 bg-yellow-300 ">
                {highestScore.Nationality}
              </span>{" "}
            </h1>
          )}
          {highestScore.TVName} , Hihest Score: :
          <span className="font-bold text-yellow-400 p-2">
            {highestScore.Score}
          </span>
        </span>
        <span className="font-bold text-gray-900">|</span> Rank:{" "}
        <span className="font-bold text-gray-100 p-2">
          {highestScore.CalculatedRankInteger}
        </span>
        <span className="font-bold text-gray-900">|</span> InStrokes:{" "}
        <span className="font-bold text-gray-100 p-2">
          {highestScore.InStrokes}
        </span>
        <span className="font-bold text-gray-900">|</span> Match:{" "}
        <span className="font-bold text-gray-100 p-2">
          {highestScore.Match}
        </span>
      </h1>
    </div>
  );
};

export default HighestScore;
