import { User } from "../../@types/user";
import Center from "../../components/Global/Center";
import useFetch from "../../hooks/useFetch";

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
      {data
        ? data.map((user) => <div key={user.id}>{user.username}</div>)
        : "No data"}
    </Center>
  );
}
