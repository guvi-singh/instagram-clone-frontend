import React, { useEffect, useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import ReqUserPostCard from "./ReqUserPostCard";
import { findUserKiPostAction } from "../../Redux/Post/Action";
import { useDispatch, useSelector } from "react-redux";

function ReqUserPostPart({ user }) {
  const [activeTab, setActiveTab] = useState("Post"); // Set a default active tab
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { post } = useSelector((store) => store);

  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable></AiOutlineTable>,
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine />,
    },
    {
      tab: "Saved",
      icon: <BiBookmark />,
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser />,
    },
  ];

  useEffect(() => {
    const data = {
      jwt: token,
      userId: user?.id,
    };
    if (user) {
      dispatch(findUserKiPostAction(data));
    }
  }, [user]);

  useEffect(() => {
    // Check if the 'post.profilePost' is available and non-empty before setting the active tab to "Post"
    if (post?.profilePost?.length > 0) {
      setActiveTab("Post");
    } else {
      setActiveTab("Saved");
    }
  }, [post]);

  return (
    <div>
      <div className='flex space-x-14 border-t relative '>
        {tabs.map((item) => (
          <div
            key={item.tab}
            onClick={() => setActiveTab(item.tab)}
            className={`${
              activeTab === item.tab ? "border-t border-black" : "opacity-60"
            } flex items-center cursor-pointer py-2 text-sm`}>
            <p>{item.icon}</p>
            <p className='ml-1 '>{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className='flex flex-wrap'>
          {/* Conditional rendering based on the active tab */}
          {activeTab === "Saved" &&
            user?.savedPost?.length > 0 &&
            user.savedPost.map((item) => (
              <ReqUserPostCard key={item.id} item={item} />
            ))}

          {activeTab === "Post" &&
            post?.profilePost?.length > 0 &&
            post.profilePost.map((item) => (
              <ReqUserPostCard key={item.id} item={item} />
            ))}

          {/* Add other conditions for other tabs if needed */}
        </div>
      </div>
    </div>
  );
}

export default ReqUserPostPart;
