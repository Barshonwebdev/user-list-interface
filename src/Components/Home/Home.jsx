import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const [users, setUsers] = useState([]); //state for storing user data from api
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);  //rendering user data
  console.log(users);

  return (
    <div className="">
      <p className="text-center my-9  text-3xl">User List Interface</p>

      {/* searchbar component  */}
      <SearchBar></SearchBar>

      {/* card components  */} 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mb-6">
        {users.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
