import './style';
import Todo from './components/Todo';
import Signup from './components/Signup';
import Login from './components/Login'

import { Router } from 'preact-router';

export default function App() {
	return (
		<div>
			<Router>
				<Todo path='/todo' />
				<Signup path='signup' />
				<Login path='/' />
			</Router>
		</div>
	);
}
