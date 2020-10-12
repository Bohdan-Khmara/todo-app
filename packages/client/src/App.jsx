import React, { useCallback } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions/TodoActionCreators';
import { bindActionCreators } from 'redux';

function App() {
	const dispatch = useDispatch();
	const actions = bindActionCreators({ addTodo }, dispatch);

	const handleSubmit = useCallback(
		values => {
			actions.addTodo(values);
		},
		[actions],
	);

	return (
		<>
			<h1>TODO LIST</h1>
			<TodoForm onSubmit={handleSubmit} />
			<TodoList />
		</>
	);
}

export default App;
