import { Button } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Center from "../../components/Global/Center";
import Title from "../../components/Global/Title";

export default function Home() {
  const cards = [
    { title: "Task 1: Build a Dynamic Todo List", path: "/todo" },
    { title: "Task 2: Implement a Custom Hook", path: "/users" },
    { title: "Task 4: Develop a Form with Validation", path: "/register" },
    { title: "Task 5: Optimize a React Component", path: "/optimized" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <Center>
      <Title title="ecom payment task" exSt="md:text-4xl text-2xl" />
      <div className=" flex flex-wrap items-center justify-center">
        {cards.map((card, index) => (
          <Button
            className="w-[350px]  flex justify-between p-4 m-4"
            endContent={<IoIosArrowForward />}
          >
            <Link key={index} to={card.path} className="card">
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </Center>
  );
}
