import { useEffect, useMemo, useState } from 'react';
import { NUMBER_OF_QUESTIONS } from "../../constants";
import personalQuestions from '../../lucia-tests.json';
import nerdQuestions from '../../nerd-tests.json';
import phpQuestions from '../../php-tests.json';
import { Timer } from "../times";
// import questionData from '../../../sample-questions.json';
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

const toSortable = type => value => ({ value, sort: Math.random(), type });
const shuffleAndSlice = (questions, type, slice) =>
  slice > 0
    ? questions
      .map(toSortable(type))
      .sort((a, b) => a.sort - b.sort)
      .slice(0, slice)
      .map(question => ({ ...question, sort: Math.random() }))
    : [];


const PERSONAL_QUESTIONS = personalQuestions.length > NUMBER_OF_QUESTIONS ? NUMBER_OF_QUESTIONS : personalQuestions.length
const NERD_QUOTA = (NUMBER_OF_QUESTIONS - PERSONAL_QUESTIONS) / 2
const NERD_QUESTIONS = nerdQuestions.length > NERD_QUOTA ? NERD_QUOTA : nerdQuestions.length
const PHP_QUESTIONS = NUMBER_OF_QUESTIONS - (PERSONAL_QUESTIONS + NERD_QUESTIONS)

const makeQuestions = () =>
  [
    ...personalQuestions.map(toSortable(`personal`)).slice(0, PERSONAL_QUESTIONS),
    ...shuffleAndSlice(nerdQuestions, `nerd`, Math.ceil(NERD_QUESTIONS)),
    ...shuffleAndSlice(phpQuestions, `php`, Math.floor(PHP_QUESTIONS)),
  ]
    .sort((a, b) => a.sort - b.sort)
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
    ]);

export const Test = ({ setPage, setResults }) => {
  const [ questionIndex, setQuestionIndex ] = useState(0);
  const questions = useMemo(() => makeQuestions(), []);

  const [ answers, setAnswers ] = useState(new Array(NUMBER_OF_QUESTIONS));

  const submit = () => {
    setResults(questions.map((question, i) =>
      [
        question[question.length - 1],
        answers[i],
        question[0],
        question[question[question.length - 1] + 1],
        question[Number.parseInt(answers[i]) + 1],
      ]
    ));
    setPage(`results`);
  }
  const SubmitButton = () => <button
    onClick={submit}>Submit</button>;


  /*
    TODO: Are you sure modal + you've answered X of Y questions
   */

  return <>
    <Timer submit={submit}/>

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
          key={i}
          disabled={i === questionIndex}
          onClick={() =>
            setQuestionIndex(i)
          }>{i + 1}</button>,
      )}
    </div>
  </>;
};
