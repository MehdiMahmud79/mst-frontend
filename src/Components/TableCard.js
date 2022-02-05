import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { flags } from "../utils/flags";
import ReactCountryFlag from "react-country-flag";

const TableCard = ({ player }) => {
  const [players, setPlayers] = useState([]);
  const [sortedPlayers, setSortedPlayers] = useState([]);
  const [highestScore, sethighestScore] = useState({});

  useEffect(() => {
    if (!player) return;
    players.unshift(player);
    // remove douplicate users
    let playerSet = new Set(players);
    setPlayers([...playerSet]);
    let playersToSort = [...players];
    playersToSort.sort((a, b) => b.TotalStrokes - a.TotalStrokes);
    setSortedPlayers([...playersToSort]);
  }, [player]);
  useEffect(() => {
    sethighestScore(sortedPlayers[0]);
  }, [sortedPlayers]);
  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        {highestScore ? (
          <div className="bg-blue-600 p-2 text-blue-100">
            <h1>
              Hihest Score:{" "}
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
                {highestScore.TVName} :
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
        ) : (
          ""
        )}

        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg ">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Player
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Par
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Thru
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Today
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Round
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      position
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      course
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                      Total Strokes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!players
                    ? ""
                    : players.map((player, index) => {
                        return (
                          <PlayerCard
                            key={index}
                            player={player}
                            index={index}
                          />
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
