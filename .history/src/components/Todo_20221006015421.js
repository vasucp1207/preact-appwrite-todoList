import { signal } from "@preact/signals";

const todos = signal([])
const todo = signal("")

function addTodo() {
    todos.value = [...todos.value, { goal: todo.value }]
    todo.value = ""
}

const setTodo = (e) => { todo.value = e.target.value }

export default function Todo() {
    return (
        <div>
            <h1>Simple todos app</h1>
            <input value={todo.value} onInput={setTodo} />
            <button onClick={addTodo}>Add Todo</button>

            {todos.value.map(todo => (
                <p>
                    {todo.goal}
                </p>
            ))}
        </div>
    );
}
