import React, { useState, useEffect } from "react";

import ReactCountryFlag from "react-country-flag";
import { flags } from "../utils/flags";
import parse from "html-react-parser";

const PlayerCard = ({ player }) => {
  //   console.log("inside card", player);

  const [flag, setFlag] = useState(null);
  useEffect(() => {
    setFlag(flags[player.Nationality]);
  }, []);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.CalculatedRankInteger}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
        <span>
          {" "}
          {flag ? (
            <h1>
              <ReactCountryFlag
                className="mx-2"
                countryCode={flag}
                svg
                style={{
                  width: "3em",
                  height: "2em",
                }}
                title={player.Nationality}
              />
              <span>{parse(player.TVName)}</span>{" "}
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
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.Score ? player.Score : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.holesPlayed ? player.holesPlayed : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.Today ? player.Today : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.round == 1 ? player.TotalStrokes : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.round == 2 ? player.TotalStrokes : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.round == 3 ? player.TotalStrokes : ""}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.round == 4 ? player.TotalStrokes : ""}
        </p>
      </td>
    </tr>
  );
};

export default PlayerCard;
