import React from "react";
import ReactCountryFlag from "react-country-flag";

const PlayerCard = ({ player, flag, title }) => {
  return (
    <div>
      {flag ? (
        <ReactCountryFlag
          countryCode={flag}
          svg
          style={{
            width: "4em",
            height: "4em",
          }}
          title={title}
        />
      ) : (
        <h1 className="text-4xl">
          <i className="fab fa-font-awesome-flag text-4xl text-gray-900"></i> :{" "}
          {player.Nationality}
        </h1>
      )}
      <div className="px-6 py-4 bg-gray-400">
        <h1 className="font-bold text-yellow-200  my-2">
          <i className="fas fa-angle-double-right text-green-500"> </i> Player
          Id:
          {player.MSTID}
        </h1>
        <h1 className="font-bold text-yellow-200  my-2">
          <i className="fas fa-angle-double-right text-green-500"> </i> Player
          Name:
          {player.First} {"  "} {player.Last}
        </h1>
        <h1 className="font-bold text-yellow-200  my-2">
          <i className="fas fa-angle-double-right text-green-500"> </i> Player
          Id:
          {player.Last}
        </h1>
        <h2 className=" text-yellow-200  my-2">
          <i className="fas fa-chart-pie text-green-500"> </i> Rank:{" "}
          {player.CalculatedRankInteger}
        </h2>
      </div>
    </div>
  );
};

export default PlayerCard;
