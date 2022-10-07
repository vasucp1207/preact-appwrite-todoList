import { signal } from "@preact/signals";

export default function Todo() {

    const todos = signal([])
    const todo = signal("")
    
    function addTodo() {
        todos.value = [...todos.value, { goal: todo.value }]
    }

    function setTodo(e){
        e.preventDefault()
        todo.value = e.ta
    }

    console.log(todo)
	return (
		<div>
			<h1>Simple todos app</h1>
            <input type='text' onChange={(e) => setTodo} />
		</div>
	);
}
