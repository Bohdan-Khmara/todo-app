import axios from 'axios';
import queryString from 'query-string';

const apiInstance = axios.create({
  baseURL: `http://localhost:${process.env.PORT ?? 5000}/api`,
});

export const createTodo = data => apiInstance.post('/todos', data);

export const getTodos = params =>
  apiInstance.get(`/todos?${queryString.stringify(params)}`);

export const getTodoById = id => apiInstance.get(`todos/${id}`);

export const updateTodoById = (id, data) =>
  apiInstance.patch(`todos/${id}`, data);

export const removeTodoById = id => apiInstance.delete(`todos/${id}`);

export default apiInstance;
