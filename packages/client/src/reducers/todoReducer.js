import ACTION_TYPE from '../actions/types';
import produce from 'immer';

const initialState = {
	todos: [],
	isFetching: false,
	error: null,
};

let ids = 0;

const handlers = {
	[ACTION_TYPE.ADD_TODO]: produce((draftState, { payload: { values } }) => {
		draftState.todos.push({
			...values,
			id: ++ids,
		});
	}),
	[ACTION_TYPE.TOGGLE_TODO]: produce((draftState, { payload: { id } }) => {
		draftState.todos.forEach(todo => {
			if (todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
			}
		});
	}),
	[ACTION_TYPE.UPDATE_TODO]: produce((draftState, { payload: { id, values } }) => {
		const todoIndex = draftState.todos.findIndex(todo => todo.id === id);
		if (todoIndex !== -1) {
			draftState.todos[todoIndex] = {
				...draftState.todos[todoIndex],
				...values,
			};
		}
	}),
	[ACTION_TYPE.REMOVE_TODO]: produce((draftState, { payload: { id } }) => {
		const todoIndex = draftState.todos.findIndex(todo => todo.id === id);
		if (todoIndex !== -1) {
			draftState.todos.splice(todoIndex, 1);
		}
	}),
};

export default function todoReducer(state = initialState, action) {
	const { type } = action;
	return handlers.hasOwnProperty(type) ? handlers[type](state, action) : state;
}
