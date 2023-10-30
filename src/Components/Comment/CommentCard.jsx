import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { isCommentLikedByUser, timeDifference } from "../../Config/Logics";
import { useDispatch, useSelector } from "react-redux";
import {
  likeCommentAction,
  unlikeCommentAction,
} from "../../Redux/Comments/ActionType";
import { findPostByIdAction, unLikePostAction } from "../../Redux/Post/Action";

function CommentCard({ comment, post }) {
  const token = localStorage.getItem("token");
  const [isCommentLiked, setIsCommentLiked] = useState(false);
  const { user } = useSelector((store) => store);
  useEffect(() => {
    debugger;

    setIsCommentLiked(isCommentLikedByUser(comment, comment.userDto.id));
  }, [comment, user.reqUser]);
  console.log(comment);

  const dispatch = new useDispatch();
  const handleComentLike = () => {
    debugger;
    setIsCommentLiked(true);
    const data = {
      jwt: token,
      commentId: comment.id,
    };
    dispatch(likeCommentAction(data));
    console.log("after like ", comment);
  };

  const handleComentunLike = () => {
    debugger;
    setIsCommentLiked(false);
    const data = {
      jwt: token,
      commentId: comment.id,
    };
    dispatch(unlikeCommentAction(data));
    console.log("after unlike ", comment);
  };

  return (
    <div>
      <div className='flex items-center justify-between py-5'>
        <div className='flex items-center'>
          <div>
            <img
              className='w-9 h-9 rounded-full'
              src={
                comment.userDto.userImage ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }></img>
          </div>
          <div className='ml-3'>
            <p>
              <span className='semi-bold'>
                <b>{comment.userDto.username}</b>
              </span>
              <span className='ml-2'>{comment.content}</span>
            </p>
            <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
              <span>{timeDifference(comment?.createdAt)}</span>
              <span>
                {comment.likedByUsers.length > 0 &&
                  `${comment?.likedByUsers.length} likes`}
              </span>
            </div>
          </div>
        </div>
        <div>
          {isCommentLiked ? (
            <AiFillHeart
              onClick={handleComentunLike}
              className='text-xs hover:opacity-50 cursor-pointer text-red-600'></AiFillHeart>
          ) : (
            <AiOutlineHeart
              onClick={handleComentLike}
              className='text-xs hover:opacity-50 cursor-pointer'></AiOutlineHeart>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
