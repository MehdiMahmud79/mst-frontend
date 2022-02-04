import React from "react";
import ReactCountryFlag from "react-country-flag";

const PlayerCard = ({ player, flag, title }) => {
  return (
    <div>
      <h2>hi player</h2>
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
        ""
      )}
      <p> {JSON.stringify(player.Nationality)}</p>
    </div>
  );
};

export default PlayerCard;
