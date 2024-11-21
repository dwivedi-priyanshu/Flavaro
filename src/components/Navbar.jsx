import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row justify-between items-center py-5 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md'>
      <div>
        <h3 className='text-lg font-medium'>{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className='text-3xl font-extrabold'>Flavoro Foods</h1>
      </div>
      <div className='mt-4 lg:mt-0'>
        <input
          type="text"
          name='search'
          placeholder='Search...'
          autoComplete='off'
          className='p-3 border border-gray-400 text-sm rounded-md w-full lg:w-[25vw] text-gray-800'
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  )
}

export default Navbar
