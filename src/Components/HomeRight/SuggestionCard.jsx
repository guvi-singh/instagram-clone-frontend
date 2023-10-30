import React from "react";

export default function SuggestionCard() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex item-center'>
        <img
          className='w-9 h-9 rounded-full'
          src='https://media.istockphoto.com/id/1171675830/photo/motorcycle-driver-riding-in-dolomite-pass-italy-europe.jpg?s=1024x1024&w=is&k=20&c=XO9bSNcpru30cw6HlL4IhJvMJVYbqQIfhBJi6nMfr1A='></img>
        <div className='ml-2'>
          <p className='text-sm font-semibold'>username</p>
          <p className='text-sm font-semibold opacity-70m'>Follows You</p>
        </div>
      </div>
      <p className='text-blue-700 text-sm font-semibold '>Follow</p>
    </div>
  );
}
