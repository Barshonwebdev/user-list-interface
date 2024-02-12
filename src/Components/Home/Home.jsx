import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]); //state for storing user data from api
  const [searchText, setSearchText] = useState(""); //state for storing the search keyword
  const [filteredUsers, setFilteredUsers] = useState([]); //state for storing the filtered user/users
  const [sortCriteria,setSortCriteria]=useState('');

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setFilteredUsers(data.users);
      });
  }, []); //rendering user data
  console.log(users);

  // search functionality 
  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearchText(searchWord);

    // filtering by either firstname or username
    const filtered = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchWord.toLowerCase()) ||
        user.username.toLowerCase().includes(searchWord.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  // sort functionality 
  const handleSort=(e)=>{
    const sortBy=e.target.value;
    setSortCriteria(sortBy);
    let data=[...filteredUsers];
    if(sortBy==='name'){
      let result=data.sort((a,b)=>a.firstName.localeCompare(b.firstName));
      setFilteredUsers(result);
    }

    else if( sortBy==='email'){
      let result = data.sort((a, b) => a.email.localeCompare(b.email));
      setFilteredUsers(result);
    }

    else if (sortBy==='company'){
      let result = data.sort((a, b) => a.company.name.localeCompare(b.company.name));
      setFilteredUsers(result);
    }

    else {
      setFilteredUsers(users);
    }
  }

  
  return (
    <div className="">
      <p className="text-center my-6  text-3xl">User List Interface</p>

      <div className="flex space-y-5 md:space-y-0 my-6 flex-col md:flex-row justify-between items-center">

        {/* searchbar */}
        <div className="mx-7  w-full">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search User"
              className="input  input-bordered md:w-1/4 lg:w-1/5 w-fit mx-auto md:mx-0"
              onChange={handleSearch}
              value={searchText}
            />
          </div>
        </div>

        {/* sort bar  */}

        <div className="mx-7 md:mx-7  w-1/2 md:w-1/4 lg:w-1/6">
          <label className="form-control">
            <select
              onChange={handleSort}
              value={sortCriteria}
              className="select select-bordered"
            >
              <option selected>Sort (Default)</option>
              <option value="name">Sort by Name</option>
              <option value="email">Sort by Email</option>
              <option value="company">Sort by Company</option>
            </select>
          </label>
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
