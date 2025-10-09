import { shuffleArray } from './utils';


export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type Question = {
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers : string[]};
//this defines another interface that takes on properties of the state defined above and adds its own other property.
//this is type intersection

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}`;
    
    console.log('Fetching from:', endPoint); // Log the URL
    
    const response = await fetch(endPoint);
    console.log('Response status:', response.status); // Log HTTP status
    
    const data = await response.json();
    console.log('Full API response:', data); // Log the entire response
    console.log('Data keys:', Object.keys(data)); // Log all keys in data
    
    // Check what we actually received
    if (!data.results) {
        console.error('No results found in response. Response code:', data.response_code);
    }
    
    const questions = data.results || [];
    console.log('Questions array:', questions);
    
    return questions.map((question: Question) => ({
        ...question, 
        answers: shuffleArray([
            ...question.incorrect_answers, 
            question.correct_answer
        ])
    }));
}
        /*
            What exactly is going on here?
            -Go through the retrieved data, map through it.
            -declares an arrow function taking a single parameter, question being the current item in the 
            array
            -Our arrow function returns the OG question properties, the new answer property, then 
            it spreads all incorrect answers and add the correct answer
            -Our answer property is a combination of the shuffled wrong answers plus the correct answer.
        */
