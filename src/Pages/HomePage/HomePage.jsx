import React, { useEffect, useState } from "react";
import StoryCircle from "../../Components/StoryCircle/StoryCircle";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCard from "../../Components/Post/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { findUserPostAction } from "../../Redux/Post/Action";
import { getUserProfile } from "../../Redux/User/Action";

function HomePage() {
  console.log("Home rendereing");
  const dispatch = useDispatch();
  const [userIds, setUserIds] = useState([]);
  const token = localStorage.getItem("token");
  const { user, post } = useSelector((store) => store);

  useEffect(() => {
    debugger;
    const newIds = user.reqUser?.following?.map((user) => user.id);
    setUserIds([user.reqUser?.id, ...(newIds || [])]);
  }, [user.reqUser]);

  useEffect(() => {
    debugger;
    const data = {
      jwt: token,
      userIds: userIds.join(","),
    };

    dispatch(findUserPostAction(data));
  }, [
    userIds,
    post.createdPost,
    post.deletePost,
    post.likePost,
    post.unlikePost,
  ]);

  useEffect(() => {
    dispatch(getUserProfile(token));
  }, token);
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
            {post.usersPost.length > 0 &&
              [1, 1, 1, 1].map((item) => <StoryCircle key={item.id} />)}
          </div>
          <div className='space-y-10 w-full mt-10'>
            {post.usersPost.length > 0 &&
              post.usersPost.map((item) => (
                <PostCard key={item.id} post={item} />
              ))}
          </div>
        </div>
        <div className='w-[25%]'>{/* <HomeRight /> */}</div>
      </div>
    </div>
  );
}

export default HomePage;
