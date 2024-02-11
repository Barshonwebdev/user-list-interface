import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl zoom">
        <figure className="px-10 pt-10">
          <img src={user.image} alt="usercard" className="rounded-xl w-48" />
        </figure>
        <div className="card-body ">
          <div className="flex">
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
          </div>
          <p className="">Email: {user.email}</p>
          <p className="">Address: {user.address.address}, {user.address.city}, {user.address.state}</p>
          <p>Company Name: {user.company.name}</p>
          
        </div>
      </div>
    </div>
  );
};

export default UserCard;
