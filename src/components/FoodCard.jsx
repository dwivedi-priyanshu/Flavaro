import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

function FoodCard({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state);

  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-3 shadow-lg hover:shadow-2xl transition-all duration-300'>
      <img src={item.img} alt="" className='w-full h-[150px] object-cover rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out' />
      <div className='text-sm flex justify-between'>
        <h2 className='text-lg font-semibold text-gray-800'>{item.name}</h2>
        <span className='text-green-500 font-semibold'>₹{item.price}</span>
      </div>
      <p className='text-sm text-gray-600'>{item.desc.slice(0, 50)}....</p>
      <div className='flex justify-between items-center'>
        <span className='flex items-center text-yellow-400'>
          <AiFillStar className='mr-1' />{item.rating}
        </span>
        <button
          onClick={() => {
            dispatch(add({ ...item, qty: 1 }));
            toast(`${item.name} Added!`, {
              icon: "😋",
            });
          }}
          className="p-2 bg-green-500 text-white hover:bg-green-600 rounded-lg text-sm font-semibold transition-all duration-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
