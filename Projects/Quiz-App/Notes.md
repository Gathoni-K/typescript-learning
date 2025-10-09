**Setting up our app.**
-We are going to use styled components and to install this dependency, we will use: 
    'npm i styled-components @types/styled-components'
Then 'npm start' to see if it works.

-Girlie, we said background images are in the 'src' folder, under assets.
-We also need to import some fonts from 'Google Fonts'


**API
-We will be using the 'Trivia API' to fetch our questions.
-Our API will generate a url which we will use.

**Logic of our app**
-Create 2 ts files, one 'Api.ts' and 'utils.ts', the former is where we have the logic of fetching data from our api and the latter will contain a small function to randomize the answers to the questions.
-In our 'App.tsx' we create 3 functions, one is called to fetch data from our API, another is fired every time the user submits an answer and the other to move on to the next question.
-We also create the skeleton over here, we will only component we will be importing is the 'QuestionCard' component.
-All other UI, like the score, title have been implemented in this file.
-The only 2 functions we will call are the nextQuestion and startTrivia functions.
-The checkAnswer function will be passed as a prop.

**Building our component**
In our QuestionCard component, we need to create a type for our questions, it will receive fields like: question, answer, etc etc
-Destructure our types.
-Declare our function is a functional component by typing it as such using 'React.FC'
-Is used to declare a functional component, which is basically any component returning jsx, all components really, it is just a historical thing.
-A benefit of this is that it is used to type check props.
-But we could omit it, for cleaner syntax, so instead of something like: 
    '
    const Button: React.FC<ButtonProps> = ({text, onClick, disabled }) => {}
    '
        **we have:
    '
    const Button = ({ text, onClick, disabled} : ButtonProps) => {}
    '
-We define our props, then we need to destructure them in our function so that we can use them.
-To actually set our questions we have 'dangerouslySetInnerHTML' - allows us to set HTML directly from a string.
-Is not recommended though as it has several security risks.
-Our answers are wrapped in a div, then for every answer, a button is created and is disabled based on 'userAnswer' and on clicking will call our callback function.


**Creating our states.**
-Our app will have 6 states:
loading, questions, number, userAnswers, score, gameOver.


**Passing props**
-Remember these are just variables/data we pass to our components, what is the data we need?
the question number, the number of total questions, the question, the answers to the question, the userAnswer and our callback.

**Data fetching from our API**
This is all handled in our 'api.ts' file.
-Introducing 'enums'.
-This was used to define the difficulty levels.
-Enums are a way of defining a set of named constants.
-Practical use cases include: 
1.API response handling.
2.UI state management.
3.User roles and permissions.
4.Configuration and settings.
5.Form validation and status.
-This is where we will build our apiEndPoint, async function, then convert the response to a JS object.
-Define our interface 'Question' typing data received from our API.
-In our 'Api.ts' file, this is where we have defined the types for data being received. We also have the function handling the data fetching and parsing.
-In our 'utils.ts' we have our randomizer function, responsible for ensuring the correct answer is not in the same position every time.


**App.tsx**




**Styling our app**
-This one we're using something called GlobalStyles inside a ts folder, lol, has its own syntax.
-So what is happening really?
-We're using what we called styled-components, writing CSS inside a JS/TS file.
-A benefit of using this method is that there are never class name conflics, the dynamic styles are cleaner and everything is in one place.
-It is also great for design systems.

