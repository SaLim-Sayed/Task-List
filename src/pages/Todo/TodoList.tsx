import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Select,
  SelectItem,
} from "@nextui-org/react";
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
    <div className="p-4 space-y-4 w-full text-teal-900 ">
      <Select
        label="Filter Tasks"
        placeholder="Select a filter"
        selectedKeys={[filter]}
        value={filter}
        onChange={(value) => {
          console.log("Selected filter value:", value.target.value);
          setFilter(value.target.value as "all" | "completed" | "incomplete");
        }}
        className="mb-4 max-w-full"
      >
        <SelectItem key="all" value="all">
          All Tasks
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
              "items-center shadow-2xl  cursor-pointer   text-teal-900   ",
              todo.completed && "bg-orange-100"
            )}
          >
            <div className="flex w-full  items-start">
              <div className="flex flex-col w-full justify-start">
                <CardHeader className="bg-gray-100">
                  <div className="flex w-full  items-start">
                    <Checkbox
                      isSelected={todo.completed}
                      color="primary"
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <div className="text-lg font-bold"> {todo.title}</div>
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
                </CardHeader>
                <div className="flex w-[97%] justify-between  border bg-white m-2 rounded-md p-2">
                  <div>{todo.description}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
