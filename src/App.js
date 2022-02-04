import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import TableCard from "./Components/TableCard";

import "./App.css";
// link to the socet.io server
function App() {
  const [player, setPlayer] = useState([]);
  const socketRef = useRef();
  // establish socket connection
  useEffect(() => {
    socketRef.current = io.connect("/");
    socketRef.current.on("data-update", (data) => {
      setPlayer(data);
    });
  }, []);

  return (
    <div className="bg-green-400 ">
      <h1 className="text-gray-800 text-center text-3xl font-bold p-4">
        MST Golf Tournoment App
      </h1>
      <TableCard player={player} />
    </div>
  );
}

export default App;
