import React from "react";
import ReactCountryFlag from "react-country-flag";
import { flags } from "../utils/flags";

const Flag = ({ player }) => {
  return (
    <span>
      {" "}
      {flags[player.Nationality] ? (
        <h1>
          <ReactCountryFlag
            className="mx-2 rounded-full"
            countryCode={flags[player.Nationality]}
            svg
            style={{
              width: "3em",
              height: "2em",
            }}
            title={player.Nationality}
          />
          <span>{player.TVName}</span>{" "}
        </h1>
      ) : (
        <h1>
          <span className="text-sm px-2 py-1 bg-yellow-400 rounded-full ">
            {player.Nationality}
          </span>{" "}
          {player.TVName}
        </h1>
      )}
    </span>
  );
};

export default Flag;
