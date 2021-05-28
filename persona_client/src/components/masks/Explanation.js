import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Explanation.css";
import { show_mask } from "../Result/mask_result";
import { show_good_bad } from "../Result/mask_good_bad";
import { show_mask_name, show_basic_info } from "../Result/mask_info";
import pattern_left from "./pattern_left.svg";
import pattern_right from "./pattern_right.svg";
import { Spring } from "react-spring/renderprops";
import pattern_black from "./pattern_black.svg";

function Explanation({ changeColor }) {
  let { id } = useParams();
  useEffect(() => {
    changeColor("#76729F");
    window.scrollTo(0, 0);
  }, []);
  const isDesktopOrMobile = useMediaQuery({
    query: "(max-width:1000px)",
  });
  return (
    <>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div className="explanation_container">
              {isDesktopOrMobile ? null : (
                <div className="explanation_pattern">
                  <div className="left">
                    <img src={pattern_left} alt="" />
                  </div>
                  <div className="right">
                    <img src={pattern_right} alt="" />
                  </div>
                </div>
              )}

              <div className="mask_explanation">
                <div className="mask_image">
                  <img className="mask_svg" src={show_mask(id)} alt="mask" />
                  {isDesktopOrMobile ? (
                    <img
                      className="mobile_explanation_pattern"
                      src={pattern_black}
                      alt="black"
                    />
                  ) : null}
                </div>
                <div className="mask_explanation_info">
                  <div className="name">"{show_mask_name(id)}" 가면</div>
                  <div className="definition">{show_basic_info(id)}</div>
                  <div className="explanation_divide">
                    <div className="line"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      opacity="20%"
                      viewBox="0 0 93.8 126.67"
                    >
                      <path d="M93.67,50.3c0-.16.06-.32.08-.48a3.91,3.91,0,0,0,0-.49,2.57,2.57,0,0,0,0-.48,3.93,3.93,0,0,0-.06-.48c0-.16-.06-.31-.1-.47s-.11-.33-.17-.49,0-.19-.09-.28L93.26,47a4.25,4.25,0,0,0-.27-.46c-.08-.13-.17-.26-.26-.38a3.73,3.73,0,0,0-.32-.36,3,3,0,0,0-.36-.35,3.07,3.07,0,0,0-.36-.27,4.53,4.53,0,0,0-.46-.3l-.14-.09L83.5,40.87c0-.07,0-.14,0-.22V14.9a4.73,4.73,0,0,0-.18-1.26L91.18,9.4A5,5,0,0,0,86.43.6L46.87,22,7.32,1.26a5,5,0,0,0-4.64,8.86l7.68,4a4.77,4.77,0,0,0-.07.76V40.65a4.54,4.54,0,0,0,.07.75L2.65,45.5a5,5,0,1,0,4.7,8.83l39.59-21L77.39,49,44.81,64a5,5,0,0,0-2.91,4.54V89.34a5,5,0,0,0,10,0V71.71l39-17.94a.6.6,0,0,1,.11-.06,5.32,5.32,0,0,0,.65-.39l.17-.12a4.43,4.43,0,0,0,.65-.58l.1-.12a4.73,4.73,0,0,0,.43-.57l.13-.23.12-.19c0-.08.06-.17.1-.26a4.19,4.19,0,0,0,.2-.49C93.6,50.61,93.63,50.45,93.67,50.3ZM73.52,35.73l-15.9-8.19L73.52,19ZM20.29,19.35l15.9,8.33-15.9,8.45Z" />
                      <path d="M46.9,100.05a13.31,13.31,0,1,0,13.31,13.31A13.32,13.32,0,0,0,46.9,100.05Zm0,16.62a3.31,3.31,0,1,1,3.31-3.31A3.31,3.31,0,0,1,46.9,116.67Z" />
                    </svg>
                    <div className="line"></div>
                  </div>
                  <div className="explanation_good_bad">
                    <div className="group">
                      <div className="small_title">장점</div>
                      <ul>{show_good_bad(id, 0)}</ul>
                    </div>
                    <div className="group">
                      <div className="small_title">단점</div>
                      <ul>{show_good_bad(id, 1)}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    </>
  );
}

export default Explanation;
