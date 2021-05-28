import React from "react";
import { useEffect, useState } from "react";
import "./check_persona.css";
import "./persona_data";
import CheckPersonaChild from "./check_persona_child";

function CheckPersona({
  name,
  setPersonality,
  questionNumber,
  setQuestionNumber,
  changeColor,
}) {
  const dummies = [
    //this is for questions that I would like to know
    {
      question:
        name +
        "님에게 선물하면 가장 좋을 것 같은 술은? (" +
        name +
        "님이 술을 못 마시더라도 일단 여기서는 술을 '잘' 마신다고 가정하기)",
      options: [
        {
          selection: "스트레스를 삼켜버리는 시원한 맛의 술",
          id: 1,
        },
        { selection: "은은한 향을 머금고 있는 달콤한 술", id: 2 },
        { selection: "깊이가 느껴지는 중후한 맛의 술", id: 3 },
      ],
      key: 100,
    },
  ];
  const hornevian = [
    {
      question:
        name +
        "님은 학급 반장이다. 학급 반장끼리 모여 학생회에서 학교에 대한 논의를 진행하고 있다. 학생회에서 " +
        name +
        "님의 모습은?",
      options: [
        {
          selection: "얘기되는 안건들에 대해서 본인의 의견을 밝힌다",
          id: "A",
        },
        {
          selection: "본인 반의 입장을 대변하는 역할을 충실히 수행한다",
          id: "CPL",
        },
        {
          selection: "별말없이 얘기를 들으며 나오는 의견들에 대해서 생각해본다",
          id: "W",
        },
      ],
      key: 1,
    },
    {
      question:
        "대학교 교양 수업에서 그룹 발표 과제가 주어진다. 그러나 팀 내 토의가 " +
        name +
        "님의 마음에 들지 않는 방향으로 흘러간다. 이때 " +
        name +
        "님이 속으로 가장 할 것 같은 생각은?",
      options: [
        {
          selection: "반대 의견을 제시해야겠다",
          id: "A",
        },
        {
          selection:
            "내 역할은 그룹을 위해서 반대하는 걸까 아니면 따르는 걸까?",
          id: "CPL",
        },
        { selection: "다들 동의하는 것으로 보아 일단은 따르자", id: "W" },
      ],
      key: 2,
    },
    {
      question:
        "동창회 파티가 열린다. " +
        name +
        "님은 정말 오랜만에 옛 친구들을 보게 된다. " +
        name +
        "님이 동창회 파티에서 보이는 모습은?",
      options: [
        {
          selection:
            "마음 가는대로 자유롭게 돌아다니며 사람들과 자유롭게 대화를 나눈다",
          id: "A",
        },
        {
          selection:
            "돌아다니다가도 마음 맞는 주변 사람들과 한자리에서 오랫동안 얘기를 나눈다",
          id: "CPL",
        },
        {
          selection:
            "사람들이 많이 모여있는 자리를 벗어나 주로 구석에서 파티의 상황을 지켜본다",
          id: "W",
        },
      ],
      key: 3,
    },
    {
      question:
        name +
        "님은 조폭 단체에 속해 있다. 조폭 단체 내에서 " +
        name +
        "님이 맡기에 가장 적합한 업무는?",
      options: [
        { selection: "두목 or 행동대장", id: "A" },
        { selection: "보스에게 충성하는 오른팔", id: "CPL" },
        { selection: "정보원 or 감시자", id: "W" },
      ],
      key: 4,
    },
    {
      question:
        name +
        "님은 본인도 부당함을 느꼈었던 기업 운영방식에 대해서 동료들이 시위를 열자 그것에 참여한다. " +
        name +
        "님이 시위를 참여하는 주된 이유는? ",
      options: [
        { selection: "기업에 자기의 목소리를 전달하려고", id: "A" },
        {
          selection: "주변 동료들에게 꼭 힘이 되어주고 싶어서",
          id: "CPL",
        },
        { selection: "주변에서 욕 먹기 싫어서", id: "W" },
      ],
      key: 5,
    },
    {
      question:
        "학교에서 수학여행을 간다. 수학여행에서 일어날 수 있는 여러 일 중 " +
        name +
        "님이 상상조차 하기 싫어할 것 같은 상황은?",
      options: [
        { selection: "레크레이션 활동 중 자신의 의견이 무시되는 것", id: "A" },
        {
          selection:
            "숙소 뒷정리 시간에 자기만 청소하고 남들은 정리를 안하는 것",
          id: "CPL",
        },
        { selection: "본인에게 갑자기 장기자랑을 시키는 것", id: "W" },
      ],
      key: 6,
    },
    {
      question:
        name +
        "님이 어떤 창업회사에 들어간다. " +
        name +
        "님이 가장 선호할 것 같은 창업회사의 분위기는?",
      options: [
        {
          selection:
            "본인에게 사업에 어느정도 참여하고 영향력을 행사할 수 있게 해주는 회사",
          id: "A",
        },
        {
          selection:
            "본인을 회사의 가족 구성원처럼 챙겨주며 각자의 역할 구분이 확실한 회사",
          id: "CPL",
        },
        {
          selection:
            "본인에게 어느정도 자유로움을 제공하며 할당된 일을 믿고 맡기는 회사",
          id: "W",
        },
      ],
      key: 7,
    },
    {
      question:
        name +
        "님에게 애인이 있다. " +
        name +
        "님이 애인과 가장 자주 다툴 법한 시나리오는?",
      options: [
        { selection: "애인이 본인의 말을 안 들으려 한다고 생각한다", id: "A" },
        { selection: "애인이 자기의 기대만큼 안해준다고 생각한다", id: "CPL" },
        { selection: "애인이 본인에게 과도하게 간섭한다고 생각한다", id: "W" },
      ],
      key: 8,
    },
    {
      question: name + "님이 가장 못 견뎌낼 것 같은 상황은? ",
      options: [
        { selection: "억울한 상황을 참고 넘기는 것", id: "A" },
        {
          selection: "본인에게 맡겨진 일을 대충하는 것",
          id: "CPL",
        },
        { selection: "낯선 자리에서 사람들의 시선 집중을 받는 것", id: "W" },
      ],
      key: 9,
    },
  ];

  const harmonic = [
    {
      question:
        "학교 기말고사 시험에서 한 문제가 매우 어렵게 출제된다. " +
        name +
        "님은 이 문제를 잘 풀지 못했는데 이 문제에 대한 " +
        name +
        "님의 반응은?",
      options: [
        {
          selection: '"나머진 잘 풀었으니깐.. 일단 시험 끝!"',
          id: "P",
        },
        {
          selection: '"이게 어떻게 하면 풀 수 있는거지?"',
          id: "CPT",
        },
        {
          selection: '"이 문제 너무한거 아니야?"',
          id: "R",
        },
      ],
      key: -1,
    },
    {
      question:
        name +
        "님은 어느 밴드에 속해 있다. 일주일 뒤면 무대에 나가 공연을 해야하는데, 현재로서는 연습이 부족해 무대에 설 수 없을 것 같다. 이 상황에 대해 " +
        name +
        "님이 보일 수 있는 반응 중, " +
        name +
        "님에게서 가장 기대하기 어려운 반응은?",
      options: [
        {
          selection:
            "서로가 연습을 덜했다는 것을 지적하고 자신 또한 연습이 많이 부족했다고 시인하는 것",
          id: "P",
        },
        {
          selection:
            "서로가 현재 상황에 느끼는 당혹스러운 감정을 공유하고 이 감정을 서로 토로하는 것",
          id: "CPT",
        },
        {
          selection:
            "긍정적인 관점을 유지하며 문제를 해결할 수 있다고 격려하는 것",
          id: "R",
        },
      ],
      key: -2,
    },
    {
      question:
        name +
        "님은 자신의 연인이 평소와 다르게 조금 성의없이 통화를 한다는 생각이 든다. " +
        name +
        "님은 그 통화에서 어떤 반응을 보이는가?",
      options: [
        {
          selection:
            "가능한 긍정적으로 상황을 해석하려 하고 분위기를 빨리 바꾸려고 한다",
          id: "P",
        },
        {
          selection:
            "상대방의 반응에 대해서 곰곰히 생각하고 파고들며 원인을 찾는다",
          id: "CPT",
        },
        {
          selection:
            "상대방에게 실망스러운 감정을 발산하고 표현을 통해 감정을 전달한다",
          id: "R",
        },
      ],
      key: -3,
    },
    {
      question:
        name +
        "님은 오전에 회사 업무 처리에 있어 실수를 저질러 남들 앞에서 상사로부터 꾸중을 듣는다. 오전 시간이 지나 점심 먹을 시간이 되었을 때, " +
        name +
        "님의 행동은?",
      options: [
        {
          selection: "오전의 꿀꿀한 기분을 없애려고 맛난 밥을 먹으러 간다",
          id: "P",
        },
        {
          selection:
            "자신이 어디에서 왜 실수하게 되었는지 알아보고 나서 점심을 먹으러 간다",
          id: "CPT",
        },
        {
          selection:
            "평상시에 같이 밥 먹는 직장동료에게 본인의 감정을 토로한다",
          id: "R",
        },
      ],
      key: -4,
    },
    {
      question:
        name +
        "님이 속한 집단이 어떤 난관에 부딪힌다. 집단 전체가 함께 이 난관에 반응하고 있다. " +
        name +
        "님은 어떻게 대응할 것 같은가?",
      options: [
        {
          selection:
            "집단 내에서 희망적 태도를 유지하며 사람들이 문제상황을 긍정적으로 생각하게끔 유도한다",
          id: "P",
        },
        {
          selection:
            "문제의 해결책을 찾으려 하고 다음 행동을 이성적으로 계획한다",
          id: "CPT",
        },
        {
          selection:
            "해당 난관에 대해 당황스러움을 표현하고 남들도 같은 감정을 느끼는지 확인한다",
          id: "R",
        },
      ],
      key: -5,
    },
  ];

  const types_adjectives = [
    { adjective: "규칙을 준수하는", id: "CZ" },
    { adjective: "봉사하는", id: "CX" },
    { adjective: "성공을 좇는", id: "AZ" },
    { adjective: "알기 어려운", id: "BY" },
    { adjective: "일에 집중을 잘하는", id: "BZ" },
    { adjective: "타인에게 맞추려는", id: "CY" },
    { adjective: "충동적인", id: "AX" },
    { adjective: "거칠게 몰아붙이는", id: "AY" },
    { adjective: "겸손한", id: "BX" },
  ];

  useEffect(() => {
    for (let i = hornevian.length - 1; i > 0; i--) {
      //shuffled the hornevian questions
      const j = Math.floor(Math.random() * (i + 1));
      const temp = hornevian[i];
      hornevian[i] = hornevian[j];
      hornevian[j] = temp;
    }
    for (let i = harmonic.length - 1; i > 0; i--) {
      //shuffled the hornevian questions
      const j = Math.floor(Math.random() * (i + 1));
      const temp = harmonic[i];
      harmonic[i] = harmonic[j];
      harmonic[j] = temp;
    }
    for (let i = dummies.length - 1; i > 0; i--) {
      //shuffled the hornevian questions
      const j = Math.floor(Math.random() * (i + 1));
      const temp = dummies[i];
      dummies[i] = dummies[j];
      dummies[j] = temp;
    }
    changeColor("#c0baff");
  }, []);

  const [newHornevian, mixHornevian] = useState(hornevian);
  const [newHarmonic, mixHarmonic] = useState(harmonic);
  const [newDummies, mixDummies] = useState(dummies);

  return (
    <>
      <CheckPersonaChild
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        setPersonality={setPersonality}
        hornevian={newHornevian}
        harmonic={newHarmonic}
        dummies={newDummies}
        types_adjectives={types_adjectives}
        name={name}
      />
    </>
  );
}

export default CheckPersona;
