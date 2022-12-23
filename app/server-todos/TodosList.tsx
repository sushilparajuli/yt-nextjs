import Link from "next/link";
import React from "react";
import { fetchTodos } from "../../services/todos";
import { Todo } from "../typing";

async function TodosList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo: Todo) => (
        <div className="p-2 border-b" key={todo.id}>
          <Link
            className="text-blue-500 hover:text-blue-900"
            href={`/server-todos/${todo.id}`}
          >
            #{todo.id} {todo.title}
          </Link>
        </div>
      ))}
    </>
  );
}

export default TodosList;
