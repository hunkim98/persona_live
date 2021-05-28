import React from "react";
import "./lastQuestion.css";

function LastQuestion({ types_adjectives, possibleTypes, setPersonality }) {
  const decided_personality = (type) => {
    if (type === "AX") {
      setPersonality(7);
    } else if (type === "AY") {
      setPersonality(8);
    } else if (type === "AZ") {
      setPersonality(3);
    } else if (type === "BX") {
      setPersonality(9);
    } else if (type === "BY") {
      setPersonality(4);
    } else if (type === "BZ") {
      setPersonality(5);
    } else if (type === "CX") {
      setPersonality(2);
    } else if (type === "CY") {
      setPersonality(6);
    } else if (type === "CZ") {
      setPersonality(1);
    }
  };

  const show_possible_options = () => {
    let final = [];
    for (let i = 0; i < possibleTypes.length; i++) {
      for (let j = 0; j < types_adjectives.length; j++) {
        if (possibleTypes[i] === types_adjectives[j].id) {
          final.push(
            <div
              type={possibleTypes[i]}
              onClick={() => decided_personality(possibleTypes[i])}
              key={possibleTypes[i]}
              className="last_options"
            >
              {types_adjectives[j].adjective}
            </div>
          );
        }
      }
    }
    return final;
  };

  return (
    <>
      <div className="last_options_container">{show_possible_options()}</div>
    </>
  );
}

export default LastQuestion;
