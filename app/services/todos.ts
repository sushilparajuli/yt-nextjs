import { Todo } from "../typing";
export const fetchTodos = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos: Todo[] = await res.json();
  return todos;
};
