import { signal } from "@preact/signals";
import { database } from '../appwrite/appwrite'
import { v4 as uuid } from 'uuid';
import { useEffect } from 'preact/hooks';

const todo = signal("")
const goals = signal([]

const addTodo = (e) => {
    e.preventDefault()
    const promise = database.createDocument("633f403dcda63e88b76c", "633f404ac991d157efa9", uuid(), {
        content: todo.value
    })
    promise.then(function (response) {
        console.log(response)  // Success
    }, function (error) {
        console.log(error)  // Failure
    })
    todo.value = ""
}

const setTodo = (e) => { todo.value = e.target.value }

export default function Todo() {

    useEffect(() => {
        goals = []
        const getGoals = database.listDocuments("633f403dcda63e88b76c", "633f404ac991d157efa9")
        getGoals.then(
            function (response) {
              setTodos(response.documents)
            },
            function (error) {
              console.log(error);
            }
        )
        goals = getGoals
    }, [])

    return (
        <div>
            <h1>Your Goals</h1>
            <div class='inp'>
                <input class='todo-inp' value={todo.value} onInput={setTodo} />
                <button class='add-todo-btn' onClick={addTodo}>Add Todo</button>
            </div>

            {goals.value.map(goal => (
                <p>
                    {goal}{" "}<button onClick={() => removeTodo(todo)} class='delete-btn'>🗑</button>
                </p>
            ))}
        </div>
    );
}