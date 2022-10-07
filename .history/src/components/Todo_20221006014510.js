import { signal } from "@preact/signals";

export default function Todo() {

    const todos = signal([])
    const todo = signal("")
    
    function addTodo() {
        todos.value = [...todos.value, { goal: todo.value }]
        todo.value = ""
    }

    const 

    console.log(todos)
	return (
		<div>
			<h1>Simple todos app</h1>
            <input value={todo.value} type='text' onChange={setTodo} />
            <button onSubmit={addTodo}>Add Todo</button>

            {/* {todos.value.map((text) => {
                console.log(text)
            })} */}
		</div>
	);
}
