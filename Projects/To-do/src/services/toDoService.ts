import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = "todos";
//create a key that will store our todos in the local storage.

const toDoService = {

    //get Todos
    getTodos: () : TodoTypes[] => {
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY)
        //will fetch our todos from our browser's local storage and store them as a string  in this variable.
        return todoStr ? JSON.parse(todoStr) : [];
        //checks if our todoStr is truthy, then it will be returned as an array, otherwise as an empty array.
    },
    /*
    The above function is used to fetch our todos.
    -declares a function 'getTodos' whose return type will be an array
    -The 'JSON.parse()' - will convert our response from JSON format to normal JS array format.
    */

    //adding todos.
    //create a function taking a string as a parameter and returns an object
    addTodos: (text: string) : TodoTypes => {
        //our function creates a method taking 'text' as a parameter of type 'string', that is to return the 'ToDoTypes' object
        const todos = toDoService.getTodos();
        //retrieves the current list of all todos.
        const newTodo: TodoTypes  = {id: todos.length + 1, text, completed: false};
        //create a new variable that is a todo object with the set properties defined above, so we are creating an object following the structure defined earlier.
        const updateTodos = [...todos, newTodo];
        //creates a new array containing all previous todo items and our newest item.
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        //takes our updated array and converts it to JSON format then updates our local storage with the new list.
        return newTodo;
        //return the newly created object
    },
    /*
    create a function that is to receive text as a parameter and return a single object 'TodoTypes'
    -retrieve all the current items.
    -create a new variable, that shows th eproperties our object will have.
    -create another variable containing all previous todos, and the newest item.
    -this newest variable will be an array that has objects stored in it.
    -So the array: gives us the ordered list of our todos and the object; gives us individual todo tasks with respective properties.
    -take the updated array and add it to local storage then return the newest task
    */
    updateTodos: (todo: TodoTypes) : TodoTypes => {
        const todos = toDoService.getTodos();
        //retrieves all our todos from our local storage.
        const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        /*
        .map() - goes through every todo in our app, then if the IDs match, we return the 
        updated todo object, (the todo, parameter is passed to the function)
        */
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return todo;
    },
    /*
    created a function that will handle the updating part.
    -fetch the items and store them in a new variable.
    -we are fetching the items with the help of the function defined earlier, 'getTodos'
    -then we update our list
    -change our items to JSON format then store them in that variable.
    -finally, we return our task.
    */

    //delete tasks
    deleteTodo: (id: number) : void =>{
        const todos = toDoService.getTodos();
        const updatedTodos = todos.filter((todo) => todo.id !=== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    }
}


export default toDoService;