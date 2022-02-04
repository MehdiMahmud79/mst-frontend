import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import Loader from "./Loader";

const TableCard = ({ player }) => {
  console.log("TableCard", player);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // console.log("updated results", players);

    let newPlayer = {};
    if (player.MSTID) {
      newPlayer["MSTID"] = player.MSTID;
      newPlayer["DATA"] = player;
      let check = false;
      if (players.length > 0) {
        players.forEach((elem) => {
          if (elem["MSTID"] === player.MSTID) {
            elem["MSTID"] = newPlayer;
            check = true;
          }
        });
      }

      if (!check) setPlayers((players) => [...players, newPlayer]);
    }

    console.log("players", players);
  }, [player]);
  return (
    <div>
      {players.length == 0 ? (
        <Loader />
      ) : (
        <div className="bg-white p-8 rounded-md w-full">
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Player
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Score
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Holes Playes
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Today
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        R1
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        R2
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        R3
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        R4
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player) => {
                      return (
                        <PlayerCard key={player.MSTID} player={player.DATA} />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableCard;
