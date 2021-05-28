import React from "react";
import { numbers, plusOne } from "./numbers";
import "./questionCount.css";

function questionCount({
  questionNumber,
  harmonic,
  hornevian,
  goToBonus,
  dummies,
}) {
  return (
    <>
      {!goToBonus ? (
        <svg
          className="question_number_container"
          xmlns="http://www.w3.org/2000/svg"
          width="135"
          height="70"
          viewBox="0 0 135.31 69.39"
          opacity="30%"
        >
          <path
            d="M75.66,2l-16,65.39h41a32.7,32.7,0,0,0,32.7-32.7h0A32.7,32.7,0,0,0,100.62,2Z"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="3"
          />
          <path
            d="M59.66,67.39h-25A32.7,32.7,0,0,1,2,34.69H2A32.7,32.7,0,0,1,34.69,2h41Z"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="3"
          />
          <foreignObject display="flex" width="36" height="30" x="20" y="23.9">
            <img
              className="number_fit"
              src={numbers[questionNumber]}
              alt="not"
            />
          </foreignObject>
          <foreignObject display="flex" width="36" height="30" x="79" y="23.9">
            <img
              className="number_fit"
              src={numbers[harmonic + hornevian + dummies - 1]}
              alt="not"
            />
          </foreignObject>
        </svg>
      ) : (
        <svg
          className="question_number_container"
          xmlns="http://www.w3.org/2000/svg"
          width="135"
          height="70"
          viewBox="0 0 135.31 69.39"
          opacity="40%"
        >
          <path
            d="M59.66,67.39h41a32.7,32.7,0,0,0,32.7-32.7h0A32.7,32.7,0,0,0,100.62,2h-25"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            d="M59.66,67.39h-25A32.7,32.7,0,0,1,2,34.69H2A32.7,32.7,0,0,1,34.69,2h41"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <foreignObject
            display="flex"
            width="36"
            height="30"
            x="49.5"
            y="23.9"
          >
            <img className="number_fit" src={plusOne} alt="bonus" />
          </foreignObject>
        </svg>
      )}
    </>
  );
}

export default questionCount;
