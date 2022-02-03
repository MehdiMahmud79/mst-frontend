import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import "./App.css";
// link to the socet.io server
const endPoint = "https://mst-full-stack-dev-test.herokuapp.com/";
function App() {
  const [results, setResults] = useState(null);
  const socket = socketIOClient(endPoint);
  const testt = "H�jgaard";
  // this will take effect every 10 seconds as the server send new data
  useEffect(() => {
    socket.on("data-update", (data) => {
      console.log(data);
      setResults(data);
    });
  }, []);

  return (
    <>
      <h1 className="text-red-800 text-center text-3xl font-bold p-4">
        MST Golf tournoment App
      </h1>
      {results ? <p> {JSON.stringify(results)}</p> : "Loading..."}
    </>
  );
}

export default App;
