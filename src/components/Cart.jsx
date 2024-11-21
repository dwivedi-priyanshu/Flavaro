import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { FaCartShopping } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector(state => state.cart);
  const totalQty = cartItems.reduce((acc, curr) => acc + curr.qty, 0);
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  
  const navigate = useNavigate();
  
  return (
    <div>
      <div className={`z-20 fixed right-0 top-0 w-full lg:w-[25vw] bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] h-[100vh] p-5 mb-3 shadow-xl transform ${activeCart ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 rounded-l-2xl`}>
        <div className='flex justify-between items-center mb-5'>
          <span className='text-2xl text-gray-800 font-semibold tracking-wide'>My Cart</span>
          <IoMdClose 
            className='border-2 border-gray-700 text-gray-700 font-bold p-2 text-2xl rounded-full hover:text-red-500 hover:border-red-500 cursor-pointer transition-all duration-300 transform hover:scale-110'
            onClick={() => setActiveCart(!activeCart)} 
          />
        </div>

        {cartItems.length > 0 ?
          (cartItems.map((food) => (
            <CartItem key={food.id} food={food} />
          ))) :
          (
            <h2 className='text-center text-xl font-semibold text-gray-800 animate-pulse'>Your Cart is Empty</h2>
          )
        }

        <div className='absolute bottom-12 left-0 w-full px-5'>
          <h3 className='font-semibold text-gray-800 text-lg'>Items: {totalQty}</h3>
          <h3 className='font-semibold text-gray-800 text-lg'>Total Amount: ₹{totalPrice}</h3>
          <hr className='my-2 border-gray-300' />
          <button 
            onClick={() => navigate("/success")}
            className='bg-green-500 font-bold text-white py-3 rounded-lg w-full hover:bg-green-600 transition-all ease-in-out duration-300 transform hover:scale-105'
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <FaCartShopping 
        onClick={() => setActiveCart(!activeCart)} 
        className={`rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-xl text-6xl p-4 fixed bottom-4 right-4 z-10 ${totalQty > 0 ? 'animate-pulse' : ''} transition-all delay-500 hover:scale-110 cursor-pointer`}
      />
    </div>
  );
}

export default Cart;
