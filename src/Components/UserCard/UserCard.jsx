// individual user card component

import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div>
      <Link to={`/details/${user.id}`}> 
        <div className="card h-full bg-base-100 shadow-xl zoom border">
          <figure className="px-10 pt-10 ">
            <img src={user.image} alt="usercard" className="rounded-xl w-48" />
          </figure>
          <div className="card-body text-gray-600 ">
            <p className="text-center text-blue-500 text-xl mb-4">
              Username: {user.username}
            </p>

            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>

            <p className="">Email: {user.email}</p>
            <p className="">
              Address: {user.address.address}, {user.address.city}
            </p>
            <p>Company Name: {user.company.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
