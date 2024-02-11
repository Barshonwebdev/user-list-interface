import './UserCard.css'

const UserCard = ({ user }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl zoom">
        <figure className="px-10 pt-10">
          <img src={user.image} alt="usercard" className="rounded-xl w-48" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
