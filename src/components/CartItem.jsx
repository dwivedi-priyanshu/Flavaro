import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdDelete } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { decrementQty, incrementQty, remove } from '../redux/slices/CartSlice'
import toast from 'react-hot-toast'

function CartItem({ food }) {
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(food.id))
        toast(`${food.name} Removed !!`, {
            icon: "😟",
        })
    }

    return (
        <div className='relative flex gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-2'>
            <MdDelete onClick={removeFromCart} className='absolute top-3 right-3 text-gray-600 cursor-pointer hover:text-red-500 text-2xl transition-all duration-200' />
            <img src={food.img} alt={food.name} className='w-[60px] h-[60px] object-cover rounded-md shadow-md' />
            <div className='flex flex-col justify-between leading-5 w-full'>
                <h2 className='font-semibold text-gray-800'>{food.name}</h2>
                <div className='flex justify-between items-center w-full'>
                    <span className='text-green-500 font-bold text-lg'>₹{food.price}</span>
                    <div className='flex justify-center items-center gap-3'>
                        <AiOutlinePlus 
                            className='text-gray-600 p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-300'
                            onClick={() => dispatch(incrementQty(food))} 
                        />
                        <span className='font-medium'>{food.qty}</span>
                        <AiOutlineMinus 
                            className='text-gray-600 p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-300'
                            onClick={() => dispatch(decrementQty(food))} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
