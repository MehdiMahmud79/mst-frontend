import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import TableCard from "./Components/TableCard";

import "./App.css";
// link to the socet.io server
const endPoint = "https://mst-full-stack-dev-test.herokuapp.com/";
function App() {
  const [player, setPlayer] = useState([]);
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);

  // establish socket connection
  useEffect(() => {
    setSocket(io(endPoint));
  }, []);

  // subscribe to the socket event
  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      setSocketConnected(socket.connected);
    });
    socket.on("disconnect", () => {
      setSocketConnected(socket.connected);
    });
    socket.on("data-update", (data) => {
      setPlayer(data);
    });
    if (socketConnected) socket.disconnect();
    else {
      socket.connect();
    }
  }, [socket]);
  // this will take effect every 10 seconds as the server send new data

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
