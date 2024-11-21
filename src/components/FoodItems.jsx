import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
import FoodData from '../FoodData';
import { useSelector } from 'react-redux';

function FoodItems() {
  const currCategory = useSelector(state => state.category);
  const [filtered, setFiltered] = useState(FoodData);
  const search = useSelector(state => state.search);

  useEffect(() => {
    let filteredData = FoodData;

    if (currCategory !== "ALL") {
      filteredData = filteredData.filter(food => food.category === currCategory);
    }

    if (search) {
      filteredData = filteredData.filter(food =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(filteredData);
  }, [currCategory, search]);

  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start  my-10 bg-gradient-to-br from-yellow-300 via-red-300 to-pink-400 p-5 rounded-xl shadow-lg ">
      {filtered.map(item => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-yellow-50"
        >
          <FoodCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default FoodItems;
