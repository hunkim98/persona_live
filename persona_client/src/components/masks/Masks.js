import React, { useEffect } from "react";
import "./Masks.css";
import { mask_raw } from "./mask_raw";
import { index_number } from "./index";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Masks({ changeColor }) {
  useEffect(() => {
    changeColor("#76729F");
  }, []);

  const mask_data = () => {
    return mask_raw.map((mask, index) => (
      <div className="mask_container" key={index}>
        <Link to={"/masks/" + (index + 1)}>
          <img className="mask_img" src={mask} alt="mask" />
        </Link>
        <img className="mask_index" src={index_number[index]} alt="index" />
      </div>
    ));
  };
  return (
    <>
      <Helmet>
        <title>페르소나 성격심리 | 성격가면들</title>
        <meta charSet="utf-8" />
        <meta name="title" property="og:title" content="페르소나 성격 가면들" />
        <meta
          name="description"
          property="og:description"
          content="페르소나 성격심리가 제공하는 성격심리 가면들을 모아놓은 곳입니다. 한 번 둘러보세요!"
        />
      </Helmet>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div className="mask_collection_container">
              <div className="mask_collection">{mask_data()}</div>
            </div>
          </div>
        )}
      </Spring>
    </>
  );
}

export default Masks;
