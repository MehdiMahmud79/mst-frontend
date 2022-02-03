import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import "./App.css";
const endPoint = "https://mst-full-stack-dev-test.herokuapp.com/";

function App() {
  const [results, setResults] = useState("loading");
  const socket = socketIOClient(endPoint);
  useEffect(() => {
    socket.on("data-update", (data) => {
      console.log(data);
      setResults(data);
    });
  }, []);

  return (
    <>
      <h1>MST Golf tournoment App</h1>
      <p> {JSON.stringify(results)}</p>;
    </>
  );
}

export default App;
