import React from "react";

export default function Quiz(props) {
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const answers = [];
  if (!props.check) {
    for (let i = 0; i < 4; i++) {
      answers[i] = (
        <button
          key={i}
          value={props.answers[i]}
          onClick={(event) => props.selectAnswer(event, props.id)}
          className={
            [props.answers[i] === props.selected ? "selected" : ""] +
            " " +
            ["quiz--button"]
          }
        >
          {decodeHtml(props.answers[i])}
        </button>
      );
    }
  } else {
    for (let i = 0; i < 4; i++) {
      answers[i] = (
        <button
          key={i}
          value={props.answers[i]}
          className={
            [props.answers[i] === props.correct_answer ? "correct" : ""] +
            " " +
            [props.answers[i] === props.selected ? "incorrect" : ""] +
            " " +
            ["quiz--button"]
          }
        >
          {decodeHtml(props.answers[i])}
        </button>
      );
    }
  }

  return (
    <div className="quiz--container">
      <h2 className="quiz--questions">{decodeHtml(props.question)}</h2>
      <div className="quiz--answerContainer">{answers}</div>
      <hr></hr>
    </div>
  );
}
