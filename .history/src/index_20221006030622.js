import './style';
import Todo from './components/Todo';
import Signup from './components/Signup';
import Login from './components/Login'

import { Router } from 'preact-router';

export default function App() {
	return (
		<div>
			<h1>Simple todos app</h1>
			<Router>
				<div></div>
				<div></div>
				<div></div>
				<Todo path='/todo' />
				<Signup path='signup' />
				<Login path='/' />
			</Router>
		</div>
	);
}
