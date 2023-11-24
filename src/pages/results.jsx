import { useState } from "react";
import Markdown from 'react-markdown';
import { NUMBER_OF_QUESTIONS } from "../constants";

export const Results = ({ answers, setPage }) => {

  const [ showAnswers, setShowAnswers ] = useState(false);
  const [ showClue, setShowClue ] = useState(false);

  const score = answers.filter(([ correctAnswer, answerGiven ]) => correctAnswer === answerGiven).length;
  const unanswered = answers.filter(([ , answerGiven ]) => answerGiven === undefined).length;
  // console.log({answers, score})
  const passed = score / NUMBER_OF_QUESTIONS > 0.7;

  return <>
    <h1>{passed ? `You Passed` : `You did not pass.`}</h1>
    {
      passed ?
        <p>
          Well done, adventurer!<br/>
          You are intelligent and wise - a worthy champion of the arcane arts.<br/>
          Your reward awaits at a secret location, solve this clue to continue on your quest...
        </p>
        : <p>
          Adventurer, you are bold and brave, but not yet mighty enough face this quest alone.<br/>
          Go now, search for one who can help you on your quest!<br/>
          The clues to his whereabouts lie below...
        </p>
    }

    <p style={{fontStyle: `italic`}}>
      Riddle me this, riddle me that, <br/>
      Who went to sea with the pussy cat? <br/>
      Finely dressed, swift and dapper, <br/>
      This feathery mascot is quite the flapper. <br/>
      {/*This location is known for it's mascot (a flapper). <br/>*/}
      Get thee hence, 'fore the clock strikes half hour! <br/>
      'Tis there you'll get robes of +1 power...
    </p>

    <h2> {score} / {NUMBER_OF_QUESTIONS} answered correctly.</h2>
    <p>You answered {NUMBER_OF_QUESTIONS - unanswered} of {NUMBER_OF_QUESTIONS} questions.</p>

    {/*<button onClick={() => setPage(`start`)}>Try again</button>*/}

    <button onClick={() => setShowClue(!showClue)}>{showClue ? `Hide` : `Reveal`} Emergency Clue</button>
    <button onClick={() => setShowAnswers(!showAnswers)}>{showAnswers ? `Hide` : `Reveal`} Answers</button>
    {showClue && <p>Knock knock<br/>
      Who's there's?<br/>
      Who<br/>
      Who who?<br/>
      An owl! In a suit, no less!<br/></p>}
    {showAnswers &&
      <section>
        <h3>Answers</h3>
        {answers.map(([ correctAnswer, answerGiven, questionText, correctText, givenText ], i) =>
          <div key={`answer-${i}`}>
            {answerGiven === undefined
              ? <p style={{ fontWeight: `bold` }}>Question {i + 1}: Not answered</p>
              : correctAnswer === answerGiven
                ? <p style={{ fontWeight: `bold` }}>Question {i + 1}: Correct</p>
                : <>
                  <p style={{ fontWeight: `bold` }}>Question {i + 1}:</p>
                  <Markdown>{questionText}</Markdown>
                  <p>
                    You said: {givenText} <br/>
                    Actual answer: {correctText}
                  </p></>
            }
          </div>,
        )}
      </section>}

  </>;
};