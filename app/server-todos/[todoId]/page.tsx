import React from "react";
import { fetchTodos } from "../../../services/todos";
import { Todo } from "../../typing";
import { notFound } from "next/navigation";

export const dynamicParams = true; // Dynamic segments not included in generateStaticParams are generated on demand.
type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  ); // cache : 'no-cache' SSR, cache : 'force-cache' SSG , {next: {revalidate: 60}}
  const todo: Todo = await res.json();

  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 m-2 bg-yellow-200 border-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed : {todo.completed ? "Yes" : "No"}</p>
      <p className="mt-5 text-right border-t border-black">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

/* 
generateStaticParams runs at build time before 
the corresponding Layouts or Pages are generated. 
 It will not be called again during revalidation(ISR)
 */
export async function generateStaticParams(): Promise<{ todoId: string }[]> {
  const todos: Todo[] = await fetchTodos();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
