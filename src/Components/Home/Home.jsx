import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]); //state for storing user data from api
  const [searchText, setSearchText] = useState(""); //state for storing the search keyword
  const [filteredUsers, setFilteredUsers] = useState([]); //state for storing the filtered user/users
  const [sortCriteria, setSortCriteria] = useState("");

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
  const handleSort = (e) => {
    const sortBy = e.target.value;
    setSortCriteria(sortBy);
    let data = [...filteredUsers];
    if (sortBy === "name") {
      let result = data.sort((a, b) => a.firstName.localeCompare(b.firstName));
      setFilteredUsers(result);
    } else if (sortBy === "email") {
      let result = data.sort((a, b) => a.email.localeCompare(b.email));
      setFilteredUsers(result);
    } else if (sortBy === "company") {
      let result = data.sort((a, b) =>
        a.company.name.localeCompare(b.company.name)
      );
      setFilteredUsers(result);
    } else {
      setFilteredUsers(users);
    }
  };

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

      {/* Add user form  */}

      <form className="mb-5">
        <div className="p-4 md:p-10 mt-10 mx-10 md:mx-36 lg:mx-52 bg-gray-100">
          <div className="border-b border-gray-900/10 pb-12">
            <h3 className="text-center text-2xl font-bold mb-5">
              Add User Form
            </h3>
            <p className="text-center italic font-semibold">
              !!Please provide all the informations to add an user!!
            </p>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo URL (Your photo link)
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="url"
                      id="url"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="link"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Your First Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Your Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Your Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Your Company Name"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="mt-6 flex items-center gap-x-6 justify-center">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 btn-sm text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
