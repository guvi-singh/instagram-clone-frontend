import React, { useState } from "react";
import {
  BsBookmark,
  BsThreeDots,
  BsBookmarkFill,
  BsEmojiSmile,
} from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";
import "../Post/PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  likePostAction,
  unLikePostAction,
  savePostAction,
  unSavePostAction,
  findPostByIdAction,
} from "../../Redux/Post/Action";
import { isLPostikedByUser, isSavedPost } from "../../Config/Logics";
import { useEffect } from "react";
import { getUserProfile } from "../../Redux/User/Action";
import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
  console.log("rendered for " + post.id);
  console.log("In Post Card " + post);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const data = { jwt: token, postId: post?.id };
  const { user, comment } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleSavePost = () => {
    setIsSaved(true);
    dispatch(savePostAction(data));
  };
  const handleunSavePost = () => {
    setIsSaved(false);
    dispatch(unSavePostAction(data));
  };
  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handlePostLike = () => {
    debugger;
    setIsPostLiked(true);
    dispatch(likePostAction(data));
  };
  const handlePostunLike = () => {
    setIsPostLiked(false);
    dispatch(unLikePostAction(data));
  };

  const handleOpenCommentModal = () => {
    navigate(`/comment/${post.id}`);

    onOpen();
    dispatch(findPostByIdAction(post.id));
  };

  useEffect(() => {
    setIsPostLiked(isLPostikedByUser(post, user.reqUser?.id));
    setIsSaved(isSavedPost(user.reqUser, post.id));

    const data = {
      jwt: token,
      postId: post.id,
    };
  }, [post.likedByUsers, user.reqUser]);
  // useEffect(() => {
  //   const data = {
  //     jwt: token,
  //   };
  //
  //   dispatch(getUserProfile(data.jwt));
  // }, [post.unlikePost, post.likePost, post.savedPost, post.unsavedPost]);
  console.log(user.reqUser);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div className='border rounded-md w-full '>
        <div className='flex justify-between items-center w-full py-4 px-5'>
          <div className='flex items-center'>
            <img
              className='h-12 w-12 rounded-full'
              src={
                post.user.userImage ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }></img>

            <div className='pl-2'>
              <p className='font-semiboldtext-sm'>{post.user.userName}</p>
              <p className='font-thin text-sm'>{post.location}</p>
            </div>
          </div>
          <div className='dropdown'>
            <BsThreeDots className='dots' onClick={handleClick}></BsThreeDots>
            <div className='dropdown-content'>
              {showDropDown && (
                <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <img className='w-full' src={post?.image}></img>
        </div>
        <div className='flex justify-between items-center w-full px-5 py-4'>
          <div className='flex items-center space-x-2'>
            {isPostLiked ? (
              <AiFillHeart
                className='text-2xl hoverLopacity-50 cursor-pointer text-red-700'
                onClick={handlePostunLike}></AiFillHeart>
            ) : (
              <AiOutlineHeart
                className='text-2xl hoverLopacity-50 cursor-pointer'
                onClick={handlePostLike}></AiOutlineHeart>
            )}
            <FaRegComment
              onClick={handleOpenCommentModal}
              className='text-xl hoverLopacity-50 cursor-pointer'></FaRegComment>
            <RiSendPlaneLine className='text-xl hoverLopacity-50 cursor-pointer ' />
          </div>
          <div className='cursor-pointer'>
            {isSaved ? (
              <BsBookmarkFill onClick={handleunSavePost}></BsBookmarkFill>
            ) : (
              <BsBookmark onClick={handleSavePost}></BsBookmark>
            )}
          </div>
        </div>
        <div className='w-full py-2 px-5'>
          {post?.likedByUsers?.length > 0 && (
            <p>{post?.likedByUsers?.length} likes</p>
          )}
          {post?.comments?.length > 0 && (
            <p className='opacity-50 py-2 cursor-pointer'>
              view all {post?.comments?.length} comments
            </p>
          )}
        </div>
        <div className='border border-t w-full'>
          <div className='flex w-full items-center px-5'>
            <BsEmojiSmile></BsEmojiSmile>
            <input
              className='commentInput'
              type='text'
              placeholder='Add a Comment...'></input>
          </div>
        </div>
        <CommentModal
          handlePostLike={handlePostLike}
          onClose={onClose}
          isOpen={isOpen}
          handleSavePost={handleSavePost}
          isPostLiked={isPostLiked}
          isSaved={isSaved}
          handleunSavePost={handleunSavePost}
          handlePostunLike={handlePostunLike}></CommentModal>
      </div>
    </div>
  );
}

export default PostCard;
