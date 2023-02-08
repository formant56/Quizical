import React from "react";
import Quiz from "./components/Quiz";
import { nanoid } from "nanoid";
import blobblue from "./blobblue.png";
import blobyellow from "./blobyellow.png";
import ParticlesApp from "./components/ParticlesApp";

export default function App() {
  const [allQuiz, setAllQuiz] = React.useState([]);
  const [check, setCheck] = React.useState(false);
  const [starter, setStarter] = React.useState(null);

  React.useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=7&difficulty=${starter}&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => setAllQuiz(data.results))
      .then(() =>
        setAllQuiz((oldAllQuiz) => {
          return oldAllQuiz.map((quiz) => {
            const rand = Math.floor(Math.random() * 4);
            let answers = [...new Set(quiz.incorrect_answers)];
            answers.splice(rand, 0, quiz.correct_answer);
            return { ...quiz, incorrect_answers: answers, id: nanoid() };
          });
        })
      )
      .then(() => console.log(allQuiz));
  }, [starter]);

  function selectAnswer(event, id) {
    setAllQuiz((oldAllQuiz) => {
      return oldAllQuiz.map((quiz) => {
        return quiz.id === id
          ? { ...quiz, selected: event.target.value }
          : { ...quiz };
      });
    });
  }

  const howMany = () => {
    let counter = 0;
    allQuiz.map((quiz) => quiz.correct_answer === quiz.selected && counter++);
    return counter;
  };

  const quizElements = allQuiz.map((quiz) => {
    return (
      <Quiz
        question={quiz.question}
        correct_answer={quiz.correct_answer}
        answers={quiz.incorrect_answers}
        selectAnswer={selectAnswer}
        key={quiz.id}
        id={quiz.id}
        selected={quiz.selected}
        check={check}
      />
    );
  });

  return starter === null ? (
    <main>
      <div className="firstPage">
        <div className="first--main">
          <h1 className="quiz">Quizzical</h1>
          <h3>Select Difficulty. Good Luck!</h3>
          <button className="start-button" onClick={() => setStarter("easy")}>
            Easy
          </button>
          <button className="start-button" onClick={() => setStarter("medium")}>
            Medium
          </button>
          <button className="start-button" onClick={() => setStarter("hard")}>
            Hard
          </button>
        </div>
        <ParticlesApp sele={"circles"} className="particles" />
      </div>
    </main>
  ) : !check ? (
    <main>
      <img src={blobyellow} className="imgyellow" />
      <div>
        {quizElements}
        <button
          onClick={() => setCheck(true)}
          className="checkbutton firstbutton"
        >
          Check answers
        </button>
      </div>
      <img src={blobblue} className="imgblue" />
    </main>
  ) : (
    <main>
      <img src={blobyellow} className="imgyellow" />
      <div>
        <div className="quiz--grand">{quizElements}</div>
        {howMany() > 3 ? (
          <ParticlesApp sele={"fireworks"} className="fireworks" />
        ) : null}
        <footer className="score">
          <h4>You scored {howMany()}/7 correct answers</h4>
          <button
            onClick={() => {
              setStarter(null);
              setCheck(false);
            }}
            className="checkbutton lastbutton"
          >
            Play again
          </button>
        </footer>
      </div>
      <img src={blobblue} className="imgblue" />
    </main>
  );
}
