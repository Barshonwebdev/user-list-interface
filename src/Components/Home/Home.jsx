import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]); //state for storing user data from api
  const [searchText, setSearchText] = useState(""); //state for storing the search keyword
  const [filteredUsers, setFilteredUsers] = useState([]); //state for storing the filtered user/users

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setFilteredUsers(data.users);
      });
  }, []); //rendering user data
  console.log(users);

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearchText(searchWord);

    // filtering by either firstname or username
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchWord.toLowerCase()) || user.username.toLowerCase().includes(searchWord.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  return (
    <div className="">
      <p className="text-center my-6  text-3xl">User List Interface</p>

      {/* searchbar */}
      <div className="mx-7 my-5">
        <div className="form-control flex">
          
          <input
            type="text"
            placeholder="Search User Here"
            className="input inline input-bordered md:w-1/4 lg:w-1/5 w-1/2"
            onChange={handleSearch}
            value={searchText}
          />
        </div>
      </div>

      {/* card components  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mb-6">
        {filteredUsers.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
