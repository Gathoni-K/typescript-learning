import React  from 'react'
import { useState } from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard'
import { fetchQuizQuestions, Difficulty } from './Api';
import type { QuestionState } from './Api'
import { GlobalStyle, Wrapper } from './App.styles';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 15;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  // this state will be responsible for setting the number we are on.
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  //keeps track of the user's answers.
  const [score, setScore] = useState(0);
  //keeps track of the user's score
  const [gameOver, setGameOver] = useState(true);
  //keeps track of when the game is finished.

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM));

    const startTrivia = async () => {
      //function to start the game
      setLoading(true);
      //change loading state to true
      setGameOver(false);
      //change state to start game

      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.MEDIUM
      );
      //creates a new variable that will call our function and pass on new questions to it.
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      //this resets everything
      setLoading(false);
    }
// the above function is where we will make our api call.

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      //a function, accepting the event as a parameter, typing our parameter is included above
      if(!gameOver) {
        //get user answer
        const answer = e.currentTarget.value;
        const correct = questions[number].correct_answer === answer;
        //this is responsible for checking if we chose the correct answer
        if(correct) setScore(prev => prev + 1);
        //responsible for adding up our scores if user gets the correct answer
        const answerObject: AnswerObject = {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer,
        };
        //save answer in the array for user answers
        setUserAnswers((prev) => [...prev, answerObject]);
      }
    }
//this is the function that is fired when the user selects an answer

    const nextQuestion = () => {
      const nextQuestion = number + 1;
      if (nextQuestion === TOTAL_QUESTIONS){
        setGameOver(true)
      } else{
        setNumber(nextQuestion)
      }
      //move on to the next question if not the last question

    }
//the function called to get to the next question
  return (
    <>
    <GlobalStyle />
    <Wrapper>
    <h1>Test your Anime Knowledge</h1>
    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start" onClick={startTrivia}> Start </button>
    ): null}

    {/* 
    conditional rendering, the buttons only shows when the game is over or when the user answers 
    are equal to the total number of questions 
    button therefore disappears once we press it
     */}
    { !gameOver ? 
      <p className="score">Score:{score}</p>
    : null}
    {/* the score will only show if it is not game over, otherwise it returns null */}
    { loading &&
      <p>Loading Questions....</p>
    } 
    {/* will only display when our questions are loading */}

{/* our component will only be rendered if our app is not loading or if it is not game over */}
    {!loading && !gameOver && (
    <QuestionCard 
    questionNumber ={ number + 1 }
    // makes it such that our first question will be number 1.
    totalQuestions = {TOTAL_QUESTIONS}
    question = {questions[number].question}
    //grab this from our state
    answers = {questions[number].answers}
    userAnswer = {userAnswers ? userAnswers[number] : undefined}
    callback={checkAnswer}    
    />
    )}

    {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ? (
      <button className="next" onClick={nextQuestion}>Next question</button>
    ): null}
    {/* 
    the button displays if the game is not over, the app is not loading, the user has provided an answer and if we are
    not on the last question
     */}

    </Wrapper>
    
    </>
  )
}

export default App
