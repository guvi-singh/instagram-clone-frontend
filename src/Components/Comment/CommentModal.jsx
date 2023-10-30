import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import CommentCard from "./CommentCard";
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
import "../Comment/CommentModal.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createCommentAction,
  findPostCommentAction,
} from "../../Redux/Comments/ActionType";
import { findPostByIdAction } from "../../Redux/Post/Action";
import { timeDifference } from "../../Config/Logics";

function CommentModal({
  onClose,
  isOpen,
  isPostLiked,
  handlePostLike,
  handleSavePost,
  isSaved,
  handlePostunLike,
  handleunSavePost,
}) {
  debugger;
  const { postId } = useParams();
  // const [isPostLiked, setIsPostLiked] = useState(false);
  // const [isSaved, setIsSaved] = useState(false);
  const [commentContent, setCommentContent] = useState();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { comment, post, user } = useSelector((store) => store);
  // const handleSavePost = () => {
  //   setIsSaved(!isSaved);
  // };

  // const handlePostLike = () => {
  //   setIsPostLiked(!isPostLiked);
  // };

  useEffect(() => {
    debugger;
    const data = {
      jwt: token,
      postId,
    };
    if (postId) {
      dispatch(findPostByIdAction(data));
    }
  }, [
    comment?.createdComment,
    postId,
    post.likePost,
    post.unlikePost,
    comment,
  ]);
  console.log("post . ", post);
  return (
    <div>
      <div>
        <Modal size='4xl' onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <div className='flex h-[75vh] '>
                <div className='w-[45%] flex flex-col justify-center'>
                  <img
                    className='w-full max-h-full'
                    src={post.singlePost?.image}></img>
                </div>
                <div className=' w-[55%] pl-10'>
                  <div className='flex justify-between items-center py-5'>
                    <div className='flex items-center'>
                      <div>
                        <img
                          className='w-9 h-9 rounded-full'
                          src={
                            user.reqUser.image ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                          }></img>
                      </div>
                      <div className='ml-2'>
                        <p class='semi-bold'>{user.reqUser.username}</p>
                      </div>
                    </div>
                    <BsThreeDots></BsThreeDots>
                  </div>
                  <hr></hr>
                  <div className='comment'>
                    {post.singlePost?.comments?.map((item) => (
                      <CommentCard comment={item} />
                    ))}
                  </div>
                  <div className='absolute bottom-0 w-[48%]'>
                    <div className='flex justify-between items-center  w-full py-4'>
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
                        <FaRegComment className='text-xl hoverLopacity-50 cursor-pointer'></FaRegComment>
                        <RiSendPlaneLine className='text-xl hoverLopacity-50 cursor-pointer ' />
                      </div>
                      <div className='cursor-pointer'>
                        {isSaved ? (
                          <BsBookmarkFill
                            onClick={handleunSavePost}></BsBookmarkFill>
                        ) : (
                          <BsBookmark onClick={handleSavePost}></BsBookmark>
                        )}
                      </div>
                    </div>
                    <div className='w-full py-2 '>
                      <p>
                        {post?.singlePost?.likedByUsers?.length > 0 && (
                          <p>{post?.singlePost?.likedByUsers?.length} likes</p>
                        )}
                      </p>
                      <p className='opacity-50 text-sm'>
                        {timeDifference(comment?.createdAt)}
                      </p>
                    </div>
                    <div className=' '>
                      <div className='flex  items-center p-2'>
                        <BsEmojiSmile></BsEmojiSmile>
                        <input
                          className=' commentInputs'
                          type='text'
                          placeholder='Add a Comment...'
                          onChange={(e) => setCommentContent(e.target.value)}
                          value={commentContent}
                          onKeyPress={(e) => {
                            debugger;
                            if (e.key == "Enter") {
                              const data = {
                                postId,
                                jwt: token,
                                data: {
                                  content: commentContent,
                                },
                              };
                              dispatch(createCommentAction(data));
                              setCommentContent("");
                            }
                          }}></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default CommentModal;
