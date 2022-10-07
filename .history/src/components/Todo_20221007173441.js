import { signal } from "@preact/signals";
import { database } from '../appwrite/appwrite'
import { v4 as uuid } from 'uuid';
import ShowTodo from './ShowTodo'

const todo = signal("")

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
    window.location.reload()
}

const setTodo = (e) => { todo.value = e.target.value }

export default function Todo() {

    return (
        <div class='goal-wrap'>
            <div class='goal-cont'>
                <h1>Your Goals</h1>
                <div class='inp'>
                    <input class='todo-inp' value={todo.value} onInput={setTodo} placeholder='' />
                    <button class='add-todo-btn' onClick={addTodo}>Add Todo</button>
                </div>

                <ShowTodo />
            </div>
        </div>
    );
}