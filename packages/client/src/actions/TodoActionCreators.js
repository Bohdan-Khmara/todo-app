import ACTION_TYPE from './types';

export const addTodo = values => ({
	type: ACTION_TYPE.ADD_TODO,
	payload: {
		values,
	},
});

export const toggleTodo = id => ({
	type: ACTION_TYPE.TOGGLE_TODO,
	payload: {
		id,
	},
});

export const updateTodo = (id, values) => ({
	type: ACTION_TYPE.UPDATE_TODO,
	payload: {
		id,
		values,
	},
});

export const removeTodo = id => ({
	type: ACTION_TYPE.REMOVE_TODO,
	payload: {
		id,
	},
});
