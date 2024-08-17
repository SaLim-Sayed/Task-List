import { User } from "../../@types/user";
import Center from "../../components/Global/Center";
import Title from "../../components/Global/Title";
import useFetch from "../../hooks/useFetch";
import UserCard from "./UserCard";
import errorIcon from "./../../../public/error.png";
import { Image } from "@nextui-org/react";

export default function UserList() {
  const { data, error, loading } = useFetch<User[]>(
    "https://fakestoreapi.com/users"
  );

  // Loading state
  if (loading) {
    return (
      <Center>
        <div className="w-full flex flex-col justify-center h-full items-center mt-24">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-l-2 border-gray-900"/>
          <div className="text-2xl font-bold mt-4">Loading...</div>
        </div>
      </Center>
    );
  }

  // Error state
  if (error) {
    return (
      <Center>
        <div className="flex w-full justify-center items-center flex-col mt-8">
          <Image src={errorIcon} alt="Error" width={200} height={200} />
          <div className="font-bold text-3xl mt-4">{error}</div>
        </div>
      </Center>
    );
  }

  // Data display
  return (
    <Center>
      <Title title="Users" />
      <div className="flex flex-wrap gap-3 justify-center items-center mt-8">
        {data && data.length > 0 ? (
          data.map((user) => (
            <div className="flex" key={user.id}>
              <UserCard user={user} />
            </div>
          ))
        ) : (
          <div className="text-xl font-bold">No users found</div>
        )}
      </div>
    </Center>
  );
}
