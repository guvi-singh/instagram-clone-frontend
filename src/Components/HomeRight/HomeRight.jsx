import React from "react";
import SuggestionCard from "./SuggestionCard";

function HomeRight() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div>
            <img
              src='https://cdn.pixabay.com/photo/2023/06/04/05/27/motorcycle-8038868_1280.jpg'
              className='w-12 h-12 rounded-full'></img>
          </div>
          <div className='ml-3'>
            <p>Full Name</p>
            <p className='opacity-70'>username</p>
            <p></p>
          </div>
        </div>
        <div>
          <p className='text-blue-700 font-semibold'>Switch</p>
        </div>
      </div>
      <div className='space-y-5 mt-10'>
        {[1, 1, 1, 1].map((item) => (
          <SuggestionCard></SuggestionCard>
        ))}
      </div>
    </div>
  );
}

export default HomeRight;
