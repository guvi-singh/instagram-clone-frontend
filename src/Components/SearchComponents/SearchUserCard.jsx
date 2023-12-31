import React from "react";
import { useNavigate } from "react-router-dom";

function SearchUserCard({ user }) {
  const navigate = useNavigate();

  // Wrap the navigate function inside a callback function
  const handleCardClick = () => {
    navigate(`/${user.username}`);
  };

  return (
    <div onClick={handleCardClick} className='py-2 cursor-pointer'>
      <div className='flex items-center'>
        <img
          className='w-10 h-10 rounded-full'
          src={
            user?.reqUser?.Image ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={`${user.name}'s Profile`}
        />
        <div className='ml-3'>
          <p>{user.name}</p>
          <p className='opacity-70'>{user.username}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchUserCard;
