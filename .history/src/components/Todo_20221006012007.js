import { signal } from "@preact/signals";

export default function Todo() {

    const todos = signal([])
    const todo = signal("")
    
	return (
		<div>
			<h1>Simple todos app</h1>
		</div>
	);
}
