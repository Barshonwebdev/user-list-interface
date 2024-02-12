// user detail page
import { Link, useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const detailData = useLoaderData();
  return (
    <div>
      <p className="text-center my-9  text-3xl">User Detail</p>
      <div className=" items-center flex gap-x-24 flex-col md:flex-row md:mx-10 lg:mx-64  bg-base-100 ">
        <div>
          <figure className="flex justify-center">
            <img src={detailData.image} alt="Movie" className="w-fit" />
          </figure>
          <p className="text-center mt-5 text-blue-500 text-xl mb-4">
            Username: {detailData.username}
          </p>
        </div>
        <div className="card mx-4 bg-base-100 shadow-xl border-2 p-8 space-y-3 text-lg  text-gray-600 ">
          <p>First Name: {detailData.firstName}</p>
          <p>Last Name: {detailData.lastName}</p>

          <p className="">Email: {detailData.email}</p>
          <p className="">
            Address: {detailData.address.address}, {detailData.address.city}
          </p>
          <p>Company Name: {detailData.company.name}</p>
        </div>
      </div>

      {/* go back to main page button  */}
      <button className="mx-auto block border-2 bg-blue-500 hover:bg-blue-800 text-white px-5 py-2 mt-10 rounded-xl">
        <Link to="/">Back</Link> 
      </button>
    </div>
  );
};

export default UserDetail;
