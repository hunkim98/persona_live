import React from "react";
import "./Popup.css";

function Popup({ setPopup }) {
  return (
    <div className="popup_container">
      <div className="content">
        <p>
          <div className="title">"남들이 보는 나는?"</div>
        </p>
        <p>
          내가 보는 나의 모습이 과연 정확할까요? 남들은 나를 어떻게 생각하고
          있을까요?
        </p>
        <p>
          <strong>
            <u>'페르소나 성격심리'</u>
          </strong>
          는 내가 보는 친구의 모습, 친구가 보는 나의 모습을 알아볼 수 있는
          성격심리 테스트입니다
        </p>
        <p>내가 보는 친구의 페르소나를 알아보고 친구에게 공유해 보세요!</p>
        <button onClick={() => setPopup(false)} className="confirm_notice">
          닫기
        </button>
      </div>
    </div>
  );
}

export default Popup;
