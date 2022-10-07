import { signal } from "@preact/signals";

export default function Todo() {

    const todos = signal([])
    const todo = signal("")

    function addTodo() {
        todos.value = [...todos.value, { todo: text.value }];
        text.value = ""; // Clear input value on add
      }
	return (
		<div>
			<h1>Simple todos app</h1>
		</div>
	);
}
