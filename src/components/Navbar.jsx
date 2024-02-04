import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();

  const navigateByCategory = (cat) => {
    navigate('/category/' + cat)
  }

  return (
    <div className='px-7 pt-5 max-h-screen overflow-hidden'>
      <div className='bg-blue-600 p-5 grid grid-cols-3'>
        <div>
          <div className='col-span-1'>
            Icon
          </div>
        </div>
        <div className='col-span-1 flex justify-center gap-10 font-bold text-xl text-white'>
          <div>
            <span onClick={() => navigateByCategory('shirt')} className='cursor-pointer hover:text-gray-200'>SHIRT</span>
          </div>
          <div>
            <span onClick={() => navigateByCategory('cap')} className='cursor-pointer hover:text-gray-200'>CAP</span>
          </div>
          <div>
            <span onClick={() => navigateByCategory('shoes')} className='cursor-pointer hover:text-gray-200'>SHOES</span>
          </div>
        </div>
        <div className='flex justify-end'>
          <input type="text" className='py-1 px-2 max-w-64' placeholder='search something' />
        </div>
      </div>
      <div className='text-black'>
        <Outlet />
      </div>
    </div>
  )
}
