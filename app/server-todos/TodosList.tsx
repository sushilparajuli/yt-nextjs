import Link from "next/link";
import React from "react";
import { fetchTodos } from "../services/todos";
import { Todo } from "../typing";

async function TodosList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo: Todo) => (
        <p key={todo.id}>
          <Link href={`/server-todos/${todo.id}`}>Todo {todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
