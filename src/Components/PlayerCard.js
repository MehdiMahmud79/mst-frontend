import React from "react";
import Flag from "./Flag";

const PlayerCard = ({ player, index }) => {
  // to check and give sign and style to Par and the first row
  let textStyle = "text-gray-900";
  let rowStyle = "px-5 py-5 border-b border-gray-200 bg-gray-200 text-sm";
  if (index == 0)
    rowStyle = "px-5 py-5 border-b border-gray-200 bg-green-400 text-sm";
  let pStyle = "text-gray-900 whitespace-no-wrap text-center";
  let par = player.TotalStrokes - 71;
  if (par > 0) {
    par = `+ ${par}`;
  } else if (par < 0) {
    par = `- ${player.TotalStrokes - 71}`;
    textStyle = "text-red-800";
  } else {
    par = "even";
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
        <Flag player={player} />
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
};;

export default PlayerCard;
