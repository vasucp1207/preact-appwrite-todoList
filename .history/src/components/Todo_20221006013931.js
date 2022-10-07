import { signal } from "@preact/signals";

export default function Todo() {

    const todos = signal([])
    const todo = signal("")
    
    function addTodo() {
        todos.value = [...todos.value, { goal: todo.value }]
        todo.value = ""
    }

    function setTodo(e){
        todo.value = e.target.value
    }

    console.log(todo)
	return (
		<div>
			<h1>Simple todos app</h1>
            <input type='text' onChange={setTodo} />
            <button onSubmit={addTodo}>Add Todo</button>

            {todos.map((todo) => )}
		</div>
	);
}
