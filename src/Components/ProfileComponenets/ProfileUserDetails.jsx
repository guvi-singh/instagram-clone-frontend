import React from "react";
import { TbCircleDashed } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileUserDetails() {
  const { user } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  debugger;
  console.log(user);
  return (
    <div className='py-10'>
      <div className='flex items-center'>
        <div className='w-[15%]'>
          <img
            className='w-32 h-32 rounded-full'
            src={
              user?.reqUser?.Image ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }></img>
        </div>
        <div className='space-y-5 '>
          <div className='flex space-x-10 items-center'>
            <p>{user?.reqUser?.username}</p>
            <button onClick={() => navigate("/account/edit")}>
              Edit Profile
            </button>
            <button onClick={() => logout()}>Log out</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className='flex space-x-10'>
            <div>
              <span className='font-semibold mr-2'>10</span>
              <span>posts</span>
            </div>

            <div>
              <span className='font-semibold mr-2'>
                {user?.reqUser?.follower?.length}
              </span>
              <span>followers</span>
            </div>

            <div>
              <span className='font-semibold mr-2'>
                {user?.reqUser?.follower?.length}
              </span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className='semi-bold'> {user?.reqUser?.name}</p>
            <p className='font-thin text-sm'>{user?.reqUser?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserDetails;
