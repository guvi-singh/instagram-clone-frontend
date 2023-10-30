import React, { useState } from "react";
import { menus } from "./SidebarConfig";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import CreatePostModal from "../Post/CreatePostModal";
import SearchComponents from "../SearchComponents/SearchComponents";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((store) => store);
  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate(`/${user.reqUser?.username}`);
    } else if (title === "Home") {
      navigate("/");
    } else if (title === "Create") {
      onOpen();
    }
    if (title === "Search") {
      setIsSearchVisible(true);
    } else {
      setIsSearchVisible(false);
    }
    console.log("Hello");
  };
  return (
    <div className='sticky top-0 h-[100vh] flex'>
      <div
        className={`flex flex-col justify-between h-full ${
          activeTab === "Search" ? "px - 2" : "px - 10"
        }`}>
        <div>
          {activeTab !== "Search" && (
            <div className='pt-10'>
              <img className='w-40' src='https://i.imgur.com/zqpwkLQ.png'></img>
            </div>
          )}
          <div className='mt-10 cursor-pointer'>
            {menus.map((item) => (
              <div
                onClick={() => handleTabClick(item.title)}
                className='flex items-center mb-5 cursor-pointer text-lg'>
                {activeTab === item.title ? item.activeIcon : item.icon}

                <p
                  className={`${
                    activeTab === item.title ? "font-bold" : "font-semibold"
                  }`}>
                  {activeTab !== "Search" ? item.title : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
        {activeTab !== "Search" && (
          <div className='flex items-center cursor-pointer pb-10'>
            <IoReorderThreeOutline className='text-2xl'></IoReorderThreeOutline>
            <p className='ml-5'>More</p>
          </div>
        )}
      </div>

      <CreatePostModal onClose={onClose} isOpen={isOpen}></CreatePostModal>
      {isSearchVisible && <SearchComponents />}
    </div>
  );
}
