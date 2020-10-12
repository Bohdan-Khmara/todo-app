import axios from 'axios';
import queryString from 'query-string';

const apiInstance = axios.create({
  baseURL: `http://localhost:${process.env.PORT ?? 5000}/api`,
});

const createTodo = data => apiInstance.post('/todos', data);

const getTodos = params =>
  apiInstance.get(`/todos?${queryString.stringify(params)}`);

const getTodoById = id => apiInstance.get(`todos/${id}`);

const updateTodoById = (id, data) => apiInstance.patch(`todos/${id}`, data);

const removeTodoById = id => apiInstance.delete(`todos/${id}`);
