// src/components/UserCard.tsx
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import { User } from "../../@types/user";
 

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex justify-center">
      <Card isHoverable isPressable className="w-[400px] ">
        <CardHeader>
          <div>{`${user.name.firstname} ${user.name.lastname}`}</div>
        </CardHeader>
        <CardBody>
          <div className="flex justify-center">
            <div className="flex justify-center flex-col">
              <div>
                <strong>Username:</strong> {user.username}
              </div>
              <div>
                <strong>Email:</strong> {user.email}
              </div>
              <div>
                <strong>Phone:</strong> {user.phone}
              </div>
              <div>
                <strong>Address:</strong> {user.address.number}{" "}
                {user.address.street}, {user.address.city},{" "}
                {user.address.zipcode}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
