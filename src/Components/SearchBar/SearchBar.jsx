

const SearchBar = () => {
  return (
    <div className="mx-7 my-5">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search User"
          className="input input-bordered md:w-1/4 lg:w-1/5 w-1/2"
        />
      </div>
    </div>
  );
};

export default SearchBar;
