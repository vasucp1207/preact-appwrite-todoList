import { signal } from "@preact/signals";

export default function Todo() {

    const toods = signal([])
    
	return (
		<div>
			<h1>Simple todos app</h1>
		</div>
	);
}
