import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
        <Navbar />
        <div className="container mx-auto px-6 py-5">
            <CategoryMenu />
            <FoodItems />
        </div>
        <Cart />
    </div>
  )
}

export default Home
