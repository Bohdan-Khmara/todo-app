import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo, removeTodo } from '../actions/TodoActionCreators';

function Todo({ text, isCompleted, id, deadline }) {
	const dispatch = useDispatch();
	const actions = bindActionCreators({ toggleTodo, removeTodo }, dispatch);

	const handleCheckedChange = useCallback(() => {
		actions.toggleTodo(id);
	}, [id, actions]);

	const handleRemoveBtnClick = useCallback(() => {
		actions.removeTodo(id);
	}, [id, actions]);

	return (
		<article>
			<h1>
				ID {id}: {text}
			</h1>
			<input type="checkbox" checked={isCompleted} onChange={handleCheckedChange} />
			<button onClick={handleRemoveBtnClick}>remove</button>
		</article>
	);
}

Todo.propTypes = {};

export default Todo;
