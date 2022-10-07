import { signal } from "@preact/signals";

export default function Todo() {

    const todos = signal([])
    const todo = signal("")
    
    function addTodo() {
        todos.value = [...todos.value, { goal: todo.value }]
        todo.value = ""
    }

    const setTodo = (e) => { todo.value = e.target.value }

    console.log(todos)
	return (
		<div>
			<h1>Simple todos app</h1>
            <input value={todo.value} type='text' onInput={setTodo} />
            <button onSubmit={addTodo}>Add Todo</button>

            {todos.value.map(todo => (
          <li>
            {todo.text}{' '}
            <button onClick={() => removeTodo(todo)}>❌</button>
          </li>
        ))}
		</div>
	);
}
