import axios from "axios";

const API_URL = "http://localhost:8000"; // or wherever your backend runs

export const getTodos = async () => {
  const res = await axios.get(`${API_URL}/api/todos`);

  return res.data;
};

export const addTodo = async (task) => {
  var status = false;
  await axios.post(`${API_URL}/api/todos`, { task, status });
};

export const deleteTodo = async (id) => {
  console.log("Deleting todo with id:", id);
  await axios.delete(`${API_URL}/api/todos/${id}`);
};

export const sendSummary = async (todos) => {
  await axios.post(`${API_URL}/api/summarize`, { todos });
};
