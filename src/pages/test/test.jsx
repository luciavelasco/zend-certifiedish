import { useState } from 'react';
import { NUMBER_OF_QUESTIONS } from "../../constants";
import personalQuestions from '../../lucia-and-nerd-tests.json';
// import questionData from '../../../sample-questions.json';
import questionData from '../../raw-tests.json';
import { Question } from "./question";


/*
  [a, b, c, d]  ->  [b, c, a, d, 2]
  [`a`, `b`, `c`, `d`]
    .map((v, i) => [v, i, Math.random()])
    .sort((a, b) => a[2] - b[2])
    .reduce(
      (acc, [v, originalIndex], newIndex, shuffledValues) =>
        originalIndex === 0 ?
          [ v, ...acc, (shuffledValues.length - newIndex - 1)] :
          [ v, ...acc],
      []
    )
 */

export const Test = ({ setPage, setResults }) => {
  const [ questionIndex, setQuestionIndex ] = useState(0);
  const [ questions ] = useState([
      ...personalQuestions
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort),
      ...(NUMBER_OF_QUESTIONS > personalQuestions.length
        ? Object.values(questionData)
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .slice(0, NUMBER_OF_QUESTIONS - personalQuestions.length)
        : []),
    ].sort((a, b) => a.sort - b.sort)
      .map(({ value }) => [
      value[0],
      ...value
        .slice(1)
        .map((v, i) => [ v, i, Math.random() ])
        .sort((a, b) => a[2] - b[2])
        .reduce(
          (acc, [ v, originalIndex ], newIndex, shuffledValues) =>
            originalIndex === 0 ?
              [ v, ...acc, (shuffledValues.length - newIndex - 1) ] :
              [ v, ...acc ],
          [],
        ),
    ]),
  );

  const [ answers, setAnswers ] = useState(new Array(NUMBER_OF_QUESTIONS));

  const SubmitButton = () => <button
    onClick={() => {
      setResults(questions.map((questionData, i) =>
        [ questionData.pop(), answers[i] ],
      ));
      setPage(`results`);
    }}>Submit</button>;


  /*
    TODO: Are you sure modal + you've answered X of Y questions
   */

  return <>
    <p>Question {questionIndex + 1} of {NUMBER_OF_QUESTIONS}</p>
    <button
      onClick={() =>
        setPage(`start`)
      }>Quit
    </button>
    {/*<button onClick={() => {}}>Review your progress</button>*/}
    <SubmitButton/>

    <Question
      data={questions[questionIndex]}
      setAnswer={(answer) => {
        answers[questionIndex] = answer;
        setAnswers(answers);
      }}
      answer={answers[questionIndex]}
    />
    <div style={{ display: `flex`, justifyContent: `center`, marginTop: `4rem` }}>
      <button
        disabled={questionIndex === 0}
        onClick={() =>
          setQuestionIndex(questionIndex - 1)
        }>Previous
      </button>
      {questionIndex === (NUMBER_OF_QUESTIONS - 1)
        ? <SubmitButton/>
        : <button
          onClick={() =>
            setQuestionIndex(questionIndex + 1)
          }>Next</button>
      }
    </div>

    <div style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `center`, marginTop: `0.5rem` }}>
      {questions.map((v, i) =>
        <button
          disabled={i === questionIndex}
          onClick={() =>
            setQuestionIndex(i)
          }>{i + 1}</button>,
      )}
    </div>
  </>;
};
