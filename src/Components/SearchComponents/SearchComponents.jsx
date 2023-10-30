import React, { useEffect, useState } from "react";
import "./SearchComponents.css";
import SearchUserCard from "./SearchUserCard";
import { useDispatch, useSelector } from "react-redux";
import { searchUserAction } from "../../Redux/User/Action";

function SearchComponents() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user = {} } = useSelector((store) => store);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input change and dispatch searchUserAction
  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    // Dispatch searchUserAction with the updated query
    dispatch(searchUserAction({ jwt: token, query: value }));
  };
  debugger;
  console.log("user is ", user);
  return (
    <div className='searchContainer'>
      <div className='px-3 pb-5'>
        <h1 className='text-xl pb-5'>Search</h1>
        <input
          onChange={handleSearchInputChange} // Call the function to handle input change
          value={searchQuery} // Set the input value to the state
          className='searchInput'
          type='text'
          placeholder='Search...'
        />
      </div>
      <hr />
      <div className='px-3 pt-5'>
        {/* Map through the search results in the 'user.searchResults' array */}
        {user.searchUser &&
          user.searchUser.map((resultUser) => (
            <SearchUserCard key={resultUser.id} user={resultUser} />
          ))}
      </div>
    </div>
  );
}

export default SearchComponents;
