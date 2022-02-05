import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import HighestScore from "./HighestScore";

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
        {highestScore ? <HighestScore highestScore={highestScore} /> : ""}

        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto shadow-xl">
            <div className="inline-block min-w-full shadow rounded-lg ">
              <table className="min-w-full leading-normal  ">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Player
                    </th>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Par
                    </th>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Thru
                    </th>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Today
                    </th>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Round
                    </th>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      position
                    </th>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      course
                    </th>
                    <th className="px-5 py-3 border-2 border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider ">
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
