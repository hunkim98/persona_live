import React, { useEffect, useState } from "react";
import "./Start.css";
import BackButton from "../backbutton/BackButton";
import { Link } from "react-router-dom";
import logo from "../logo/brand(svg).svg";
import { Spring } from "react-spring/renderprops";
import Check_persona from "../Check_persona/check_persona";
import { Helmet } from "react-helmet";
import axios from "axios";

function Basic({
  setStartBool,
  startBool,
  name,
  setName,
  changeColor,
  setQuestionNumber,
  questionNumber,
}) {
  const [totalUsers, setTotalUsers] = useState();
  useEffect(() => {
    changeColor("#ffffff");
    setStartBool([false, false]);
    setName("");
    setQuestionNumber(0);
    axios({ method: "POST", url: "/count_total" }).then((res) => {
      setTotalUsers(res.data); //interestingly proxy only works with post
      console.log(res.data);
    });
  }, []);
  const controlBool = (index) => {
    setStartBool((
      prevState //prevState is the starBool array
    ) => prevState.map((item, idx) => (idx === index ? !item : item)));
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const nameEntered = () => {
    if (name === "") {
      alert("이름을 입력해주세요");
    } else {
      controlBool(0);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      nameEntered();
    }
  };

  const goToStart = () => {
    setStartBool([false, false]);
    setName("");
  };

  const goToQuestion = () => {
    controlBool(1);
  };

  if (startBool[0]) {
    if (startBool[1]) {
      return (
        <>
          <Check_persona
            name={name}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            changeColor={changeColor}
          />
        </>
      );
    } else
      return (
        <>
          <div className="survey_container">
            <div className="navbar_explain">
              <div className="navbar_fake"></div>
              <div className="navbar_middle">
                <div className="uppper">^</div>
                <div className="navbar_name">ABOUT</div>
              </div>
              <div className="navbar_right">
                <div className="uppper">^</div>
                <div className="navbar_name">MASKS</div>
              </div>
            </div>
            <div className="basic_container second_page_basic">
              <div className="continue_question">
                {name} 님의
                <img className="question_logo" src={logo} alt="" />를 알아보러
                갈까요?
              </div>
              <div className="yes_no_container">
                <div className="yes_no_square left_yes" onClick={goToQuestion}>
                  네
                </div>
                <Link
                  to="/"
                  className="yes_no_square right_no"
                  onClick={goToStart}
                >
                  아니오
                </Link>
              </div>
              <BackButton goToBack={nameEntered} />
            </div>
          </div>
        </>
      );
  } else
    return (
      <>
        <Helmet>
          <title>페르소나 성격심리</title>
          <meta charSet="utf-8" />
          <meta
            name="title"
            property="og:title"
            content="내 친구/애인의 성격 가면을 알아보자!"
          />
          <meta
            name="description"
            property="og:description"
            content="이 성격심리테스트는 내가 아닌 상대방의 성격을 가면의 형태로 알려주는 심리테스트입니다. 사용하시기 전에 이거 하나 꼭 기억하세요! 이 심리테스트는 당신이 보는 상대방의 성격 가면을 알려줄 뿐, 상대방의 실제 성격이 아닐 수 있습니다!"
          />
        </Helmet>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <div style={props}>
              <div className="survey_container">
                <div className="navbar_explain">
                  <div className="navbar_fake"></div>
                  <div className="navbar_middle">
                    <div className="uppper">^</div>
                    <div className="navbar_name">ABOUT</div>
                  </div>
                  <div className="navbar_right">
                    <div className="uppper">^</div>
                    <div className="navbar_name">MASKS</div>
                  </div>
                </div>
                <div className="total_count">
                  누적 참가자 수:
                  <div className="purple_highlight">{totalUsers}</div>명
                </div>
                <div className="basic_container first_page_basic">
                  <svg
                    className="rotate"
                    xmlns="http://www.w3.org/2000/svg"
                    width="126.08"
                    height="135.77"
                    viewBox="0 0 126.08 135.77"
                  >
                    <path d="M126.05,105.23a5,5,0,0,0-.06-.54,3.56,3.56,0,0,0-.1-.47c0-.16-.09-.31-.14-.46s-.15-.34-.23-.5-.07-.17-.11-.25L112.3,80.31l13.11-22.69c0-.08.07-.17.11-.26s.16-.32.23-.49.1-.31.14-.46a3.94,3.94,0,0,0,.1-.47,5,5,0,0,0,.06-.54c0-.1,0-.19,0-.28s0-.11,0-.16,0-.36,0-.54a3.25,3.25,0,0,0-.08-.45c0-.16-.09-.31-.14-.47l-.17-.45c-.07-.15-.15-.28-.23-.42s-.16-.28-.25-.41a3.57,3.57,0,0,0-.31-.37c-.11-.12-.21-.25-.33-.36l-.35-.29-.44-.32-.13-.09-.26-.12-.49-.22c-.16-.06-.32-.1-.48-.15l-.44-.1a5.51,5.51,0,0,0-.57-.06l-.26,0H94.87L86.25,35.18h9.21a5,5,0,0,0,0-10h-15L67.37,2.48l-.16-.23c-.1-.15-.21-.3-.32-.44l-.33-.35c-.11-.12-.23-.22-.35-.33a3.65,3.65,0,0,0-.45-.32L65.54.65,65.39.58l-.5-.22A3.61,3.61,0,0,0,64.47.2,4.15,4.15,0,0,0,64,.09L63.52,0h-1l-.47.08a3.38,3.38,0,0,0-.48.11,3.61,3.61,0,0,0-.42.16c-.17.07-.34.14-.51.23a.59.59,0,0,0-.14.06l-.22.16a4.38,4.38,0,0,0-.46.33l-.34.31c-.11.12-.23.24-.33.36s-.22.29-.32.44l-.16.23-13.1,22.7H19.4l-.26,0a5.51,5.51,0,0,0-.57.06,3.63,3.63,0,0,0-.45.1,4.26,4.26,0,0,0-.47.15,4.31,4.31,0,0,0-.49.22l-.26.11-.13.1a3.54,3.54,0,0,0-.44.32,3.17,3.17,0,0,0-.35.29,2.82,2.82,0,0,0-.33.36,3.57,3.57,0,0,0-.31.37c-.09.13-.17.27-.25.41s-.16.27-.23.41a4.28,4.28,0,0,0-.17.46c0,.15-.1.3-.14.46a3.4,3.4,0,0,0-.08.46,4.53,4.53,0,0,0-.05.53c0,.06,0,.11,0,.17a2.48,2.48,0,0,0,0,.27,4.93,4.93,0,0,0,.05.54c0,.17.07.32.11.47s.09.31.14.46a3.81,3.81,0,0,0,.23.5c0,.08.06.17.11.26l13.1,22.69-8.64,15L14.94,62.4a5,5,0,1,0-8.66,5l7.47,12.95L.67,103a2.72,2.72,0,0,0-.11.25,4.52,4.52,0,0,0-.23.5,3.5,3.5,0,0,0-.14.46c0,.15-.08.31-.11.47a4.93,4.93,0,0,0,0,.54,2.4,2.4,0,0,0,0,.28v.07s0,.09,0,.14a.65.65,0,0,1,0,.14c0,.14,0,.28.06.41a3.4,3.4,0,0,0,.08.46,3.5,3.5,0,0,0,.14.46,4.28,4.28,0,0,0,.17.46c.07.14.15.28.23.41a3.45,3.45,0,0,0,.25.41c.09.13.2.25.31.38a3.61,3.61,0,0,0,.33.35,3.17,3.17,0,0,0,.35.29,3.54,3.54,0,0,0,.44.32l.13.1.47.22.11.06a6.13,6.13,0,0,0,.83.26l.19,0a4.59,4.59,0,0,0,.9.1H31.21l13.1,22.69a3.83,3.83,0,0,0,.28.42l.08.12a6,6,0,0,0,.59.64l.15.12a4.32,4.32,0,0,0,.7.51l0,0h0a2.58,2.58,0,0,0,.44.22l.16.08.2.07a4.92,4.92,0,0,0,1.68.3h0a5.06,5.06,0,0,0,1.75-.32l.13,0,.19-.09.41-.2h0l0,0a5,5,0,0,0,.7-.51l.15-.13a5.05,5.05,0,0,0,.59-.63l.08-.12c.09-.14.19-.27.28-.42l13.14-22.76H83.33l-4.61,8a5,5,0,1,0,8.66,5l7.49-13h26.21a5.49,5.49,0,0,0,.9-.09l.19,0a6.13,6.13,0,0,0,.83-.26l.11-.05.47-.23.13-.1a4.48,4.48,0,0,0,.44-.32,3.17,3.17,0,0,0,.35-.29c.12-.11.22-.23.33-.35s.22-.25.31-.38.17-.27.25-.41.16-.27.23-.41.11-.31.17-.46.1-.3.14-.46a3.54,3.54,0,0,0,.08-.45c0-.18,0-.36,0-.54s0-.11,0-.16S126.05,105.32,126.05,105.23ZM112.42,60.12l-5.89,10.19-5.88-10.19ZM63,15l5.88,10.2H57.15ZM34,45.37,28.06,35.18H39.83Zm14.69,75.4-5.89-10.19H54.52ZM13.7,100.51l5.85-10.13,5.84,10.13ZM72.6,89.26a5,5,0,0,0-6.83,1.83l-5.43,9.42H36.94L25.3,80.35l8.65-15,2.59,4.48a5,5,0,0,0,8.66-5l-5.48-9.48,2.79-4.83,8.87-15.36H74.7l8.63,14.94H78.15a5,5,0,0,0,0,10H89.1l11.66,20.19L89.1,100.51H71.88l2.55-4.42A5,5,0,0,0,72.6,89.26Zm33.93,1,5.89,10.2H100.65Z" />
                  </svg>

                  <div className="name_question">
                    누구의 페르소나를 알아볼까요?
                  </div>
                  <div className="name_input_container">
                    <input
                      value={name}
                      onChange={nameHandler}
                      placeholder="(알아보고 싶은 친구의 이름)"
                      className="name_input"
                      type="text"
                      onKeyPress={handleKeyPress}
                    />
                    <button className="name_input_enter" onClick={nameEntered}>
                      <svg
                        className="name_right"
                        xmlns="http://www.w3.org/2000/svg"
                        width="136.75"
                        height="109.89"
                        viewBox="0 0 136.75 109.89"
                      >
                        <path d="M136.38,56.83a3.62,3.62,0,0,0,.17-.56,4.61,4.61,0,0,0,.17-1c0-.12,0-.24,0-.37s0-.24,0-.36a4.61,4.61,0,0,0-.17-1,3.62,3.62,0,0,0-.17-.56,2.12,2.12,0,0,0-.11-.21,3.61,3.61,0,0,0-.36-.67,0,0,0,0,0,0,0c-.06-.09-.14-.16-.2-.24a3.28,3.28,0,0,0-.91-.91,2.73,2.73,0,0,0-.25-.2l0,0h0L60.3.85A5,5,0,0,0,53,7.05L72.2,49.94H5a5,5,0,0,0,0,10H71.24l-18.33,43A5,5,0,0,0,60.3,109l74.19-49.91h0l0,0a2.78,2.78,0,0,0,.27-.21,6,6,0,0,0,.48-.4,6.4,6.4,0,0,0,.41-.5l.2-.24a0,0,0,0,0,0,0,3.61,3.61,0,0,0,.36-.67A2.12,2.12,0,0,0,136.38,56.83ZM94.08,74.26,87.65,59.94h27.71Zm21.28-24.32h-29l6.46-15.15Zm-31-20.83L79.23,41.19l-10-22.28Zm-4.92,37,6.19,13.79L68.73,91.31Z" />
                      </svg>
                    </button>
                  </div>
                  <div className="name_comment">
                    * 별칭을 입력하셔도 무관합니다
                  </div>
                </div>
              </div>
              <div className="developer_account">
                Developer Instagram:{" "}
                <a href="https://instagram.com/oz.tinman">@oz.tinman</a>
              </div>
            </div>
          )}
        </Spring>
      </>
    );
}

export default Basic;
