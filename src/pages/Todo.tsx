// src/pages/Home.tsx
import React from "react";
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";
import Center from "../components/Global/Center";

const Todo: React.FC = () => {
  return (
    <Center>
      <div className="flex flex-col md:flex-row items-start justify-start my-4 gap-6 ">
        <TodoForm />
        <TodoList />
      </div>
    </Center>
  );
};

export default Todo;
