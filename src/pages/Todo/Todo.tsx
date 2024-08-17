// src/pages/Home.tsx
import { Button } from "@nextui-org/react";
import React from "react";
import { PiPlus } from "react-icons/pi";
import Center from "../../components/Global/Center";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo: React.FC = () => {
  const [active, setActive] = React.useState(false);
  return (
    <Center>
      <div className="flex justify-between mt-6 items-end">
        <div className="text-3xl font-bold">Todo List</div>
        <Button
          color="primary"
          onClick={() => setActive(!active)}
          endContent={<PiPlus size={28} />}
        >
          Add Todo
        </Button>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start my-4 gap-6 ">
        <div className="md:hidden flex w-full">
          {active && <TodoForm setActive={setActive} />}
        </div>
        <TodoList />
        <div className="hidden md:flex w-full">
          {active && <TodoForm setActive={setActive} />}
        </div>
      </div>
    </Center>
  );
};

export default Todo;
