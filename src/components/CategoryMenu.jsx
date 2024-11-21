import React from 'react';
import FoodData from '../FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

function CategoryMenu() {
  const uniqueCategories = ["ALL", ...new Set(FoodData.map(food => food.category))];
  
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.category);

  return (
    <div className='ml-6 mt-5'>
      <h2 className='text-3xl font-semibold mb-6 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-500'>
        Find the best Food
      </h2>
      <div className='flex flex-wrap justify-center'>
        {uniqueCategories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-3 mx-3 my-3 text-lg font-semibold rounded-full transition-all ease-in-out duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? 'bg-green-500 text-white shadow-2xl scale-105'
                : 'bg-gray-200 hover:bg-green-500 hover:text-white shadow-md'
            }`}
            onClick={() => dispatch(setCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
