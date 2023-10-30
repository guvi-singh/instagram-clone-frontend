import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCompass, AiFillCompass } from "react-icons/ai";
import { AiOutlinePlayCircle, AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineMessage, AiFillMessage } from "react-icons/ai";
import { AiOutlineNotification, AiFillNotification } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlusCircle, AiFillPlusCircle } from "react-icons/ai";

export const menus = [
  {
    title: "Home",
    icon: <AiOutlineHome className='text-2xl mr-5' />,
    activeIcon: <AiFillHome className='text-2xl mr-5' />,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch className='text-2xl mr-5' />,
    activeIcon: <AiOutlineSearch className='text-2xl mr-5' />,
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass className='text-2xl mr-5' />,
    activeIcon: <AiFillCompass className='text-2xl mr-5' />,
  },
  {
    title: "Reels",
    icon: <AiOutlinePlayCircle className='text-2xl mr-5' />,
    activeIcon: <AiFillPlayCircle className='text-2xl mr-5' />,
  },
  {
    title: "Message",
    icon: <AiOutlineMessage className='text-2xl mr-5' />,
    activeIcon: <AiFillMessage className='text-2xl mr-5' />,
  },
  {
    title: "Notification",
    icon: <AiOutlineNotification className='text-2xl mr-5' />,
    activeIcon: <AiFillNotification className='text-2xl mr-5' />,
  },
  {
    title: "Profile",
    icon: <AiOutlineUser className='text-2xl mr-5' />,
    activeIcon: <AiOutlineUser className='text-2xl mr-5' />,
  },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle className='text-2xl mr-5' />,
    activeIcon: <AiFillPlusCircle className='text-2xl mr-5' />,
  },
];
