import { NUMBER_OF_QUESTIONS } from "../constants";

export const Results = ({ answers, setPage }) => {

  const score = answers.filter(([correctAnswer, answerGiven]) => correctAnswer === answerGiven).length
  const unanswered = answers.filter(([, answerGiven]) => answerGiven === undefined).length
  console.log({answers, score})

  return <>
    <h1>{score/NUMBER_OF_QUESTIONS > 0.7 ? `You Passed` : `You did not pass.`}</h1>

    <h2> {score} / {NUMBER_OF_QUESTIONS} answered correctly.</h2>
    <p>You answered {NUMBER_OF_QUESTIONS - unanswered} of {NUMBER_OF_QUESTIONS} questions.</p>

    <button onClick={() => setPage(`start`)}>Try again</button>
  </>
}