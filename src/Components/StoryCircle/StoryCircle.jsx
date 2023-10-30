import React from "react";
import { useNavigate } from "react-router-dom";

function StoryCircle() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/story/");
  };
  return (
    <div>
      <div
        onClick={handleNavigate}
        className='curspr-pointer flex flex-col items-center'>
        <img
          className='w-16 h-16 rounded-full'
          src='https://cdn.pixabay.com/photo/2022/06/30/13/32/family-7293705_1280.png'></img>
      </div>
    </div>
  );
}

export default StoryCircle;
