import React, { useState, useEffect } from "react";

import ReactCountryFlag from "react-country-flag";
import { flags } from "../utils/flags";

const PlayerCard = ({ player }) => {
  const [flag, setFlag] = useState(null);
  console.log("inside card", player);
  useEffect(() => {
    setFlag(flags[player.Nationality]);
  }, []);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.CalculatedRankInteger}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span>
          {" "}
          {flag ? (
            <h1>
              <ReactCountryFlag
                className="mx-2"
                countryCode={flag}
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
                title={player.Nationality}
              />
              <span>{player.TVName}</span>{" "}
            </h1>
          ) : (
            <h1 className=" m-2 ">
              <span className="text-sm px-2 py-1 bg-yellow-300">
                {player.Nationality}
              </span>{" "}
              {player.TVName}
            </h1>
          )}
        </span>
        <p className="text-gray-900 whitespace-no-wrap"></p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.Score ? player.Score : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.Today ? player.Today : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.Today ? player.Today : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.Today ? player.Today : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.Today ? player.Today : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.Today ? player.Today : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          <p className="text-gray-900 whitespace-no-wrap">
            {player.Today ? player.Today : ""}
          </p>
        </p>
      </td>
    </tr>
  );
};

export default PlayerCard;
