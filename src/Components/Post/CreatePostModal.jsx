import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import "../Post/CreatePostModal.css";
import { FaPhotoVideo } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../Redux/Post/Action";
import { uploadToCloudnarys } from "../../Config/UploadToCloudnary";

function CreatePostModal({ onClose, isOpen }) {
  const [location, setLocation] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, SetFile] = useState();
  const dispatch = useDispatch();
  const [imgurl, setImgUrl] = useState("");
  const token = localStorage.getItem("token");
  const handleOnChange = async (e) => {
    const file = e.target.files[0];
    if (
      (file && file.type.startsWith("image/")) ||
      file.type.startsWith("video/")
    ) {
      const imurl = await uploadToCloudnarys(file);
      setImgUrl(imurl);
      SetFile(file);
    } else {
      SetFile(null);
      alert("Please Select image or video");
    }
  };

  const handleCreatePost = () => {
    const data = {
      jwt: token,
      data: {
        caption,
        location,
        image: imgurl,
      },
    };
    dispatch(createPostAction(data));
    onClose();
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  };

  const [caption, setCaption] = useState("");
  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };
  const handleDrop = (event) => {
    setIsDragOver(false);
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.file[0];
    if (
      droppedFile.type.startsWith("image/") ||
      droppedFile.type.startsWith("video/")
    ) {
      SetFile(droppedFile);
    }
  };
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className='flex justify-between items-center py-1 px-10'>
            <p>Create New Post</p>
            <Button
              onClick={handleCreatePost}
              variant={"ghost"}
              size={"sm"}
              colorScheme='blue'>
              Share
            </Button>
          </div>
          <hr></hr>
          <ModalBody>
            <div className='h-[70vh] justify-between pb-5 flex '>
              <div className='w-[50%]'>
                {!file && (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className='drag-drop h-full'>
                    <div>
                      <FaPhotoVideo className='text-3xl'></FaPhotoVideo>
                      <p>Drag Photos or videos</p>
                    </div>
                    <label htmlFor='file-upload' className='custom-file-upload'>
                      {" "}
                      Select From Computer
                    </label>
                    <input
                      type='file'
                      id='file-upload'
                      accept='image/* , video/*'
                      onChange={handleOnChange}></input>
                  </div>
                )}
                {file && (
                  <img
                    className='max-h-full'
                    src={URL.createObjectURL(file)}></img>
                )}
              </div>

              <div className='w-[1px] border h-full '></div>
              <div className='w-[50%]'>
                <div className='flex items-center px-2'>
                  <img
                    className='w-7 h-7 rounded-full'
                    src='https://cdn.pixabay.com/photo/2023/03/23/13/15/sleep-7871915__340.jpg'></img>
                  <p className='semi-bold ml-4'>userName</p>
                </div>
                <div className='px-2'>
                  <textarea
                    rows={8}
                    className='captionInput'
                    placeholder='write a caption'
                    name='caption'
                    onChange={handleCaptionChange}></textarea>
                </div>
                <div className='flex justify-between px-2'>
                  <GrEmoji className='opacity-70'> </GrEmoji>
                  <p>{caption?.length} /2,200</p>
                </div>
                <hr />
                <div className='p-2 flex justify-between items-center'>
                  <input
                    className='locationInput'
                    type='text'
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='location'
                    name='location'></input>
                  <GoLocation></GoLocation>
                </div>
                <hr></hr>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CreatePostModal;
