import { User } from "../../@types/user";
import Center from "../../components/Global/Center";
import Title from "../../components/Global/Title";
import useFetch from "../../hooks/useFetch";
import UserCard from "./UserCard";

export default function UserList() {
  const { data, loading } = useFetch<User[]>("https://fakestoreapi.com/users");

  if (loading)
    return (
      <Center>
        <div className="w-full flex flex-col justify-center h-full items-center mt-24">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          <div className="text-2xl font-bold mt-4">Loading...</div>
        </div>
      </Center>
    );
  return (
      <Center>
      <Title title="Users" />
      <div className="flex flex-1  justify-center items-center  gap-3 flex-wrap">
        {data
          ? data.map((user) => (
              <div className=" flex" key={user.id}>
                <UserCard user={user} />
              </div>
            ))
          : "No data"}
      </div>
    </Center>
  );
}
