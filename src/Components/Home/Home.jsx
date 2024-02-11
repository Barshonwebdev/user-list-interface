import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import { key } from "localforage";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);
  console.log(users);

  return (
    <div>
      <p className="text-center my-8 text-3xl">User List Interface</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-6">
        {
          users.map(user =>
            <UserCard key={user.id}></UserCard>
          )
        }
      </div>
    </div>
  );
};

export default Home;
