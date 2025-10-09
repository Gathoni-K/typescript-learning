import React from 'react';
import type  { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard = ({ 
    question, 
    answers,
    callback,
    userAnswer, 
    questionNumber, 
    totalQuestions
} : Props) => {
    // The 'React.FC' will tell React that it will be a functional component.
    return (
    <Wrapper>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
            {/* will indicate what question the user is on 
            so what we are doing is grabbing the question numbr and the total quesitons from our data
            */}
        </p>
        <p dangerouslySetInnerHTML={{__html: question }} ></p>
        {/* passing the question directly as a string, is not recommended though */}
        <div>
            {answers.map((answer, index) => (
                <ButtonWrapper key={index}
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={userAnswer ? true : false } onClick={callback} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
            {/* 
            we have created a div where all our answers are kept.
            Then we are mapping through our answers, and setting a button in each
            -The button can be disabled based on 'userAnswer', and on being clicked, will call our
            callback function
            -It renders the answer string as actual HTML.
            */}
        </div>
    </Wrapper>
    )
}

export default QuestionCard;
