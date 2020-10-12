import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function TodoList() {
	const { todos } = useSelector(state => state.todo);

	return (
		<ul>
			{todos.map(todo => (
				<li key={todo.id}>
					<Todo {...todo} />
				</li>
			))}
		</ul>
	);
}

export default TodoList;
