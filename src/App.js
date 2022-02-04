import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import TableCard from "./Components/TableCard";
import Loader from "./Components/Loader";

import "./App.css";
// link to the socet.io server
const endPoint = "https://mst-full-stack-dev-test.herokuapp.com/";
function App() {
  const [results, setResults] = useState({});
  const [players, setPlayers] = useState([]);
  const socket = socketIOClient(endPoint);
  // this will take effect every 10 seconds as the server send new data
  useEffect(() => {
    socket.on("data-update", (data) => {
      setResults(data);
    });
  }, []);
  useEffect(() => {
    console.log("updated results", results);
    let newPlayer = {};
    if (results.MSTID) {
      newPlayer["MSTID"] = results.MSTID;
      newPlayer["DATA"] = results;
      // for (let i=0;i<players.length;i++){
      //   if (players[i][results.MSTID])
      // }
      setPlayers((players) => [...players, newPlayer]);
    }

    console.log("players", players);
  }, [results]);

  return (
    <div className="bg-red-200 ">
      <h1 className="text-red-800 text-center text-3xl font-bold p-4">
        MST Golf Tournoment App
      </h1>
      <TableCard players={players} />
    </div>
  );
}

export default App;
