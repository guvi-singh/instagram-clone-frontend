import React, { useEffect } from "react";
import ProfileUserDetails from "../../Components/ProfileComponenets/ProfileUserDetails";
import ReqUserPostPart from "../../Components/ProfileComponenets/ReqUserPostPart";
import ReqUserPostCard from "../../Components/ProfileComponenets/ReqUserPostCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isFollowing, isReqUser } from "../../Config/Logics";
import {
  findUserByUserNameAction,
  getUserProfile,
} from "../../Redux/User/Action";

function Profile() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { username } = useParams();
  debugger;
  const { user = {} } = useSelector((store) => store);

  const isReqUse = isReqUser(
    user.reqUser && user.reqUser.id,
    user.findByUsername && user.findByUsername.id
  );

  const isFollowed = isFollowing(user.reqUser, user.findByUsername);
  useEffect(() => {
    const data = {
      token,
      username,
    };
    if (token != null) {
      dispatch(getUserProfile(token));
      dispatch(findUserByUserNameAction(data));
    }
  }, [username, user.follower, user.following]);

  debugger;
  return (
    <div className='px-20'>
      <div>
        <ProfileUserDetails
          user={isReqUse ? user.reqUser : user.findByUsername}
          isFollowing={isFollowed}
          isReqUser={isReqUse}></ProfileUserDetails>
      </div>
      <div>
        <ReqUserPostPart user={isReqUse ? user.reqUser : user.findByUsername} />
      </div>
      <div></div>
    </div>
  );
}

export default Profile;
