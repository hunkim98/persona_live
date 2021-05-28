import React, { useEffect } from "react";
import "./About.css";
import desktop_left from "./desktop_left.svg";
import desktop_right from "./desktop_right.svg";
import mobile_left from "./mobile_left.svg";
import mobile_right from "./mobile_right.svg";
import signature from "./signature.svg";
import { useMediaQuery } from "react-responsive";
import { Spring } from "react-spring/renderprops";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Helmet } from "react-helmet";

function About({ changeColor }) {
  useEffect(() => {
    changeColor("#ffffff");
  }, []);
  const isDesktopOrMobile = useMediaQuery({
    query: "(max-width:800px)",
  });
  return (
    <>
      <Helmet>
        <title>페르소나 성격심리 | About</title>
        <meta charSet="utf-8" />
        <meta
          name="title"
          property="og:title"
          content="페르소나 성격심리란 무엇인가?"
        />
        <meta
          name="description"
          property="og:description"
          content="페르소나 성격심리는 기존의 자가진단 중심의 성격심리테스트에서 벗어나 내 친구 혹은 연인의 성격을 알려주는 성격심리테스트 웹앱입니다"
        />
      </Helmet>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div className="about_container">
              <div className="about_logo_container">
                <div className="about_pattern">
                  {!isDesktopOrMobile ? (
                    <img
                      className="desktop_pattern"
                      src={desktop_left}
                      alt=""
                    />
                  ) : (
                    <img className="mobile_pattern1" src={mobile_left} alt="" />
                  )}
                </div>
                <div className="signature">
                  <img src={signature} alt="" />
                </div>
                <div className="about_pattern">
                  {!isDesktopOrMobile ? (
                    <img
                      className="desktop_pattern"
                      src={desktop_right}
                      alt=""
                    />
                  ) : (
                    <img
                      className="mobile_pattern2"
                      src={mobile_right}
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div className="about_information">
                <div className="title">페르소나 앱은 무엇인가요?</div>
                <div className="quote">
                  “성격검사는 왜 꼭 스스로가 스스로에 대해서 자문자답하는
                  방식으로 이루어져야 하는 것일까? 어쩌면, 내 주변 사람들이 나를
                  가장 잘 알지 않을까?”
                </div>
                <div className="information">
                  <p>
                    페르소나(Persona) 앱은 위 질문에서 시작된 앱입니다. 우리들이
                    흔하게 접하는 심리테스트는 모두 자기보고식 질문들로 구성되어
                    있습니다. '당신은 이러한가요?', '당신은 이렇지 않은가요?'와
                    같이 해당 테스트들은 스스로가 스스로를 가장 잘 알고 있다는
                    전제를 깔고 진행됩니다. 하지만, 누구나 자기 자신에 대해서
                    평가할 때는 관대해지기 마련입니다. 내가 보기에 나는 못난
                    사람이 절대 아니니까요.
                  </p>
                  <p>
                    하지만 나를 잘 아는 지인은 나의 성격에 대해서 어디에도
                    치우치지 않고 서술할 수 있습니다. 아니, 오히려 본인의 지인에
                    대하여 심리테스트를 할 경우 그 지인을 보다 더 깊이 알고 싶은
                    마음에 해당 테스트를 자신의 관찰을 토대로 신중하고 정확하게
                    테스트를 진행할 수 있겠습니다.
                  </p>
                  <p>
                    페르소나(Persona) 앱에서 사용자는 그 성격을 알고 싶은 상대방
                    한 명에 관한 질문들을 몇 개 풀게 됩니다. 사용자가 질문에
                    답한 것을 바탕으로 앱은 그 성격 결과를 ‘가면(=페르소나)’
                    형태로 제시합니다. '가면(=페르소나)'가 주 테마인 만큼 해당
                    앱의 아이덴티티 디자인은 가면과 연관을 지어 설계했습니다.
                  </p>
                  <p>
                    하지만 기억해두세요. 앱에서 제공하는 성격 결과 풀이는 당신의
                    눈에서 본 그 사람의 성격입니다. 당신에게만 보이고 있는
                    성격일 수도 있는 것이지요. 상대방이 갖고 있는 여러 가면 중
                    당신은 한 가면만 보고 있는 것입니다...
                  </p>
                </div>
              </div>
              <div className="creator_info">
                <div className="name">Creator: 김동훈</div>
                <CopyToClipboard
                  text={"hunkim98@gmail.com"}
                  onCopy={() => alert("제작자의 이메일이 복사되었습니다!")}
                >
                  <div className="email">E-mail: hunkim98@gmail.com</div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        )}
      </Spring>
    </>
  );
}

export default About;
