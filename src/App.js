import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import TableCard from "./Components/TableCard";
import Loader from "./Components/Loader";

import "./App.css";
import banner from "./images/banner.jpg";
// link to the socet.io server
function App() {
  const [player, setPlayer] = useState([]);
  const [loader, setLoader] = useState(true);
  const socketRef = useRef();
  // establish socket connection
  useEffect(() => {
    if (!loader) return;
    socketRef.current = io.connect(
      "https://mst-full-stack-dev-test.herokuapp.com/"
    );
    socketRef.current.on("data-update", (data) => {
      setPlayer(data);
      setLoader(false);
    });
  }, [loader]);

  return (
    <div className="bg-green-400 ">
      <h1 className="text-gray-800 text-center text-3xl font-bold p-4">
        Live Golf Tournoment
      </h1>
      <img src={banner} alt="golf image" className="w-full" />
      {loader ? <Loader /> : <TableCard player={player} />}
    </div>
  );
}

export default App;
