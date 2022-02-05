import React from "react";

import ReactCountryFlag from "react-country-flag";
import { flags } from "../utils/flags";
import parse from "html-react-parser";

const PlayerCard = ({ player }) => {
  // to check and give sign and style to PAr
  let textStyle = "text-gray-900";
  let par = 71 - player.TotalStrokes;
  if (par > 0) {
    par = `+ ${par}`;
  } else {
    par = `- ${player.TotalStrokes - 71}`;
    textStyle = "text-red-800";
  }

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-gray-200 text-sm text-center">
        <p className="text-gray-900 whitespace-no-wrap">
          {player.CalculatedRankInteger}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 text-sm">
        <span>
          {" "}
          {flags[player.Nationality] ? (
            <h1>
              <ReactCountryFlag
                className="mx-2"
                countryCode={flags[player.Nationality]}
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
              <span className="text-sm px-2 py-1 bg-yellow-300 ">
                {player.Nationality}
              </span>{" "}
              {player.TVName}
            </h1>
          )}
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className={`${textStyle}  whitespace-no-wrap text-center font-bold`}>
          {par ? par : "__"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {player.holesPlayed ? player.holesPlayed : "__"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {player.Today ? player.Today : "__"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {player.round ? player.TotalStrokes : "__"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {player.position ? player.position : "__"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {player.Score ? player.Score : "__"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {player.course ? player.course : "__"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {player.TotalStrokes ? player.TotalStrokes : "__"}
        </p>
      </td>
    </tr>
  );
};

export default PlayerCard;
