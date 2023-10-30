import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css";

function ReqUserPostCard({ item }) {
  return (
    <div className='p-2'>
      <div className='post w-60 h-60'>
        <img className='cursor-pointer' src={item.image}></img>
        <div className='overlay'>
          <div className='overlay-text flex justify-between'>
            <div>
              <AiFillHeart> </AiFillHeart>
              <span>{item.likedByUsers.length}</span>
            </div>
            <div>
              <FaComment></FaComment>
              <span>{item.comments.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReqUserPostCard;
