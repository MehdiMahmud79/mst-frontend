import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import TableCard from "./Components/TableCard";

import "./App.css";
import banner from "./images/banner.jpg";
// link to the socet.io server
function App() {
  const [player, setPlayer] = useState([]);
  const socketRef = useRef();
  // establish socket connection
  useEffect(() => {
    socketRef.current = io.connect(
      "https://mst-full-stack-dev-test.herokuapp.com/"
    );
    socketRef.current.on("data-update", (data) => {
      setPlayer(data);
    });
  }, []);

  return (
    <div className="bg-green-400 ">
      <h1 className="text-gray-800 text-center text-3xl font-bold p-4">
        Live Golf Tournoment
      </h1>
      <img src={banner} alt="golf image" className="w-full" />
      <TableCard player={player} />
    </div>
  );
}

export default App;
