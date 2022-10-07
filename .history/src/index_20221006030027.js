import './style';
import Todo from './components/Todo';
import Signup from './components/Signup';
import Login from './'

export default function App() {
	return (
		<div>
			<h1>Simple todos app</h1>
			<Todo />
			<Signup />
			<Login />
		</div>
	);
}
