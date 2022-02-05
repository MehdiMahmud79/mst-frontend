import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import Loader from "./Loader";

const TableCard = ({ player }) => {
  console.log("TableCard", player);
  const [players, setPlayers] = useState([]);
  function sort(a, b) {
    console.log(a);
    return a?.Data.Score - b?.Data.Score;
  }
  // class NewPlayer {
  //   constructor(playerData) {
  //     (this.Data = playerData), (this.MSTID = playerData.MSTID);
  //     (this.round1 = {}),
  //       (this.round2 = {}),
  //       (this.round3 = {}),
  //       (this.round4 = {});
  //   }

  //   setRound(playerData) {
  //     switch (playerData.roound) {
  //       case 1:
  //         this.round1 = playerData;
  //         break;
  //       case 2:
  //         this.round2 = playerData;
  //         break;
  //       case 3:
  //         this.round3 = playerData;
  //         break;
  //       case 4:
  //         this.round4 = playerData;
  //         break;
  //     }
  //   }
  //   getTotal() {
  //     return (
  //       this.round1.TotalStrokes +
  //       this.round2.TotalStrokes +
  //       this.round3.TotalStrokes +
  //       this.round4.TotalStrokes
  //     );
  //   }
  // }
  useEffect(() => {
    // console.log("updated results", players);

    let newPlayer = {};
    if (player.MSTID) {
      newPlayer["MSTID"] = player.MSTID;
      newPlayer["Data"] = player;
      if (players.length > 0) {
        players.forEach((elem) => {
          if (elem["MSTID"] === player.MSTID) {
            elem["MSTID"] = newPlayer;
            return;
          }
        });
      }
      // if (players.length > 1) setPlayers((players) => sort(players));

      setPlayers((players) => [...players, newPlayer]);
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
                    {players.map((player, index) => {
                      return <PlayerCard key={index} player={player.Data} />;
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
