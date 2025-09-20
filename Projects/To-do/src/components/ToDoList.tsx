//our imports go here
import toDoService from "../services/toDoService";
import ToDoTypes  from "../types/todo";
import { useState } from 'react';



const ToDoList = () => {
    //define a function called 'ToDoList' that...

    const [todos, setTodos] = useState<TodoTypes[]>(toDoService.getTodos());
    //defines our state variables, this one is responsible for handling all the todos in our app's memory.
    //syntax for typing useState:
            //useState<type>(returnValue)
    //so our initial value is the function called  for getting our todos from our data operations file
    const [editingTodoId, setEditedToDoId] = useState<number | null>(null);
    //defines our second state variable, responsible for tracking which specific todo is currently being edited, our state can either be a number or null and our initial value is null
    const [editedTodoText, setEditedToDoText] = useState<string>("");
    //create our last state, responsible for editing our tasks, our state is a string and it's initial value is an empty string.
    
    //function for handling update functions.
    const handleEditStart = (id: number, text: string) => {
        setEditedToDoId(id);
        //'Remember which todo we are editing'
        setEditedToDoText(text);
        //put the current text in our edit box.
    }
    /*
    this is our helper function:
    it has 2 parameters, id, which is a number, and text, a string.
    */

    const handleEditCancel = () => {
        setEditedToDoId(null);
        //sets the currently editing tracker to null
        setEditedToDoText("");
        //empties out whatever the user was typing.
    }
    const handleEditSave = (id: number) => {
        //our function has one parameter, id of type number.

        if (editedTodoText.trim() !== "") {
            //the line above is our safety check, removes any whitespaces from our editedtodo, then checks if it empty
            const updateTodo = toDoService.updateTodos({
                id,
                text: editedTodoText,
                completed: false
            });
            //this updates our todo in our local storage.

            setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updateTodo : todo)));
            /*
            what this line does, maps through all the previous toos, then checks if 
            the todo item's id matches with that of the id of the item we want to update if so, updates the item, otherwise
            will not update the item.
            */
            setEditedToDoId(null);
            setEditedToDoText("");
        }
          //checks if our to do item is not empty and the '.trim()' is for removing the whitespaces

          //function to delete our todos.
          const handeDeleteTodo = (id: number) => {
            //declares our function that accepts one parameter, id, of type number.
            toDoService.deleteTodo(id);
            //calls the delete function from our ts file.
            setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
            /*
            wets our current todos in such a way that, takes the item as a paramter
            and checks if the id of the current item matches the id of the item being passed in, will only keep
            the items whose id do not match.
            */
          }

    }


  return (
    <div className="todoContainer">
        <div>
            Todo Input Form Component Goes here
        </div>

    {todos.map((todo)=> (
        <div className="items" key={todo.id}>
            {editingTodoId === todo.id ? (
                <div className="editedText">
                    <input type="text" value={editedTodoText} onChange={(e) > setEditedToDoText(e.target.value)}
                    autoFocus={true} />

                    <button type="button" onClick={()=> handleEditSave(todo.id)}>
                        <FaCheck />
                    </button>
                </div>
            )}
        </div>
    ) )}

    </div>
  )
}

export default ToDoList