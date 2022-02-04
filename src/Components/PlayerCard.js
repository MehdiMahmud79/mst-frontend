import React from "react";
import ReactCountryFlag from "react-country-flag";

const PlayerCard = ({ player, flag, title }) => {
  return (
    <div>
      <div className="bg-green-300 m-4 p-3 rounded-xl">
        <h1 className="text-center text-4xl text-md font-bold m-2">
          {" "}
          <i class="fas fa-tv text-red-500"></i> {player.TVName}
        </h1>
      </div>

      <div className="flex flex-wrap justify-around m-4">
        <div className="px-6 py-4 bg-gray-200 m-2 rounded-2xl shadow-xl">
          {flag ? (
            <ReactCountryFlag
              className="mx-2"
              countryCode={flag}
              svg
              style={{
                width: "4em",
                height: "4em",
              }}
              title={title}
            />
          ) : (
            <h1 className="text-4xl m-2">
              <i className="fab fa-font-awesome-flag text-4xl text-gray-500"></i>{" "}
              : {player.Nationality}
            </h1>
          )}
          <h1 className="font-bold text-gray-900 text-md  my-2">
            <i className="fas fa-id-card-alt text-gray-500"> </i> MST ID{" "}
            {player.MSTID}
          </h1>
          <h1 className="font-bold text-gray-900 text-md  my-2">
            <i className="fas fa-user  text-gray-500 "> </i> Name:{" "}
            {player.First} {"  "} {player.Last}
          </h1>
          <h1 className="font-bold text-gray-900 text-md  my-2">
            Sex: {player.Sex}
          </h1>
          <h2 className="font-bold text-gray-900 text-md my-2">
            Rank: {player.CalculatedRankInteger}
          </h2>
        </div>
        <div className="px-6 py-4 bg-gray-200 m-2 rounded-2xl shadow-xl ">
          <h1 className="font-bold text-gray-900 text-md  my-2">
            Position: {player.position}
          </h1>
          <h1 className="font-bold text-gray-900 text-md  my-2">
            Tournament ID: {player.tournamentID}
          </h1>
          <h1 className="font-bold text-gray-900 text-md  my-2">
            MatchID: {player.matchID}
          </h1>
          <h2 className="font-bold text-gray-900 text-md my-2">
            Match: {player.Match}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
