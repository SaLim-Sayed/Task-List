import { Button, Card, Checkbox, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { BiTrash } from "react-icons/bi";
import useTodoStore from "../../store/todoStore";
import { GiCheckMark } from "react-icons/gi";
import { cn } from "../../lib/cn";

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo, setFilter, filter } = useTodoStore();

  // Filter the todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "incomplete") {
      return !todo.completed;
    }
    return true;
  });
  console.log({ todos });
  return (
    <div className="p-4 space-y-4 w-full md:w-[70%]">
      <Select
        label="Filter Todos"
        placeholder="Select a filter"
        selectedKeys={[filter]}
        value={filter}
        onChange={(value) => {
          console.log("Selected filter value:", value.target.value);
          setFilter(value.target.value as "all" | "completed" | "incomplete");
        }}
        className="mb-4 max-w-xs"
      >
        <SelectItem key="all" value="all">
          All Todos
        </SelectItem>
        <SelectItem key="completed" value="completed">
          Completed
        </SelectItem>
        <SelectItem key="incomplete" value="incomplete">
          Incomplete
        </SelectItem>
      </Select>
     

      <div className="space-y-2">
        {filteredTodos.map((todo) => (
          <Card
            key={todo.id}
             title={todo.completed ? "Completed" : "Incomplete"}
            className={cn(
              "items-center shadow-2xl p-2 cursor-pointer   ",
              todo.completed ? " bg-cyan-700  text-white " : ""
            )}
          >
            <div className="flex w-full justify-between">
              <div className="flex gap-2 items-start">
                <Checkbox
                  isSelected={todo.completed}
                  color="primary"
                  onChange={() => toggleTodo(todo.id)}
                />

                <div className="flex flex-col">
                  <div className="text-lg font-bold"> Title : {todo.title}</div>
                  <div>Description : {todo.description}</div>
                </div>
              </div>
              <div className="flex">
                {todo.completed && (
                  <Button
                    className="text-green-500"
                    isIconOnly
                    variant="light"
                    color="secondary"
                  >
                    <GiCheckMark size={24} />
                  </Button>
                )}
                <Button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500"
                  isIconOnly
                  variant="light"
                  color="danger"
                >
                  <BiTrash size={24} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
