import { signal } from "@preact/signals";

const todo = signal("")

function addTodo() {
    todo.value = ""
}

const setTodo = (e) => { todo.value = e.target.value }

export default function Todo() {
    return (
        <div>
            <h1>Your Goals</h1>
            <div class='inp'>
                <input class='todo-inp' value={todo.value} onInput={setTodo} />
                <button class='add-todo-btn' onClick={addTodo}>Add Todo</button>
            </div>

            {todos.value.map(todo => (
                <p>
                    {todo.goal}{" "}<button onClick={() => removeTodo(todo)} class='delete-btn'>🗑</button>
                </p>
            ))}
        </div>
    );
}