import React from "react";

import ReactCountryFlag from "react-country-flag";
import { flags } from "../utils/flags";
const PlayerCard = ({ player, index }) => {
  // to check and give sign and style to Par and the first row
  let textStyle = "text-gray-900";
  let rowStyle = "px-5 py-5 border-b border-gray-200 bg-gray-200 text-sm";
  if (index == 0)
    rowStyle = "px-5 py-5 border-b border-gray-200 bg-green-400 text-sm";
  let pStyle = "text-gray-900 whitespace-no-wrap text-center";
  let par = 71 - player.TotalStrokes;
  if (par > 0) {
    par = `+ ${par}`;
  } else if (par < 0) {
    par = `- ${player.TotalStrokes - 71}`;
    textStyle = "text-red-800";
  } else {
    par = 0;
    textStyle = "text-gray-800";
  }

  return (
    <tr>
      <td className={rowStyle}>
        <p className={pStyle}>
          {index === 0 ? (
            <span>
              <i className="fas fa-angle-double-right text-md  text-red-600"></i>{" "}
            </span>
          ) : (
            ""
          )}
          {"  "}
          {player.CalculatedRankInteger}
        </p>
      </td>
      <td className={rowStyle}>
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
            <h1 className=" m-2 ">
              <span className="text-sm px-2 py-1 bg-yellow-300 ">
                {player.Nationality}
              </span>{" "}
              {player.TVName}
            </h1>
          )}
        </span>
      </td>
      <td className={rowStyle}>
        <p className={`${textStyle}  whitespace-no-wrap text-center font-bold`}>
          {par ? par : "__"}
        </p>
      </td>
      <td className={rowStyle}>
        <p className={pStyle}>
          {player.holesPlayed ? player.holesPlayed : "__"}
        </p>
      </td>
      <td className={rowStyle}>
        <p className={pStyle}>{player.Today ? player.Today : "__"}</p>
      </td>
      <td className={rowStyle}>
        <p className={pStyle}>{player.round ? player.round : "__"}</p>
      </td>
      <td className={rowStyle}>
        <p className={pStyle}>{player.position ? player.position : "__"}</p>
      </td>
      <td className={rowStyle}>
        <p className={pStyle}>{player.Score ? player.Score : "__"}</p>
      </td>
      <td className={rowStyle}>
        <p className={pStyle}>{player.course ? player.course : "__"}</p>
      </td>
      <td className={rowStyle}>
        <p className={pStyle}>
          {player.TotalStrokes ? player.TotalStrokes : "__"}
        </p>
      </td>
    </tr>
  );
};

export default PlayerCard;
