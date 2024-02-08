import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import navBarBg from '../assets/TopBar.png';
import navbarIcon from '../assets/AsteriskIcon.png';
import glassIcon from '../assets/glass.png';

export default function Navbar() {
  const navigate = useNavigate();

  const navigateByCategory = (cat) => {
    navigate('/category/' + cat)
  }

  return (
    <div className='px-7 pt-5 max-h-screen overflow-hidden'>
      <div className='p-3 grid grid-cols-3' style={{ backgroundImage: `url(${navBarBg})` }}>
        <div>
          <div className='col-span-1'>
            <a href="/">
              <img src={navbarIcon} alt="icon" className='w-8' />
            </a>
          </div>
        </div>
        <div className='col-span-1 flex justify-center gap-10 text-2xl text-white navbar_text'>
          <div>
            <span onClick={() => navigateByCategory('shirt')} className='cursor-pointer hover:text-gray-200 tracking-widest'>SHIRT</span>
          </div>
          <div>
            <span onClick={() => navigateByCategory('cap')} className='cursor-pointer hover:text-gray-200 tracking-widest'>CAP</span>
          </div>
          <div>
            <span onClick={() => navigateByCategory('shoes')} className='cursor-pointer hover:text-gray-200 tracking-widest'>SHOES</span>
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='inline-block relative'>
            <input disabled type="text" className='py-1 px-9 max-w-52 bg-[#D9D9D9] placeholder:text-black placeholder:font-normal' placeholder='Search' />
            <img src={glassIcon} alt="glass" className='w-5 absolute left-1 top-[0.30rem]' />
          </div>
        </div>
      </div>
      <div className='text-black'>
        <Outlet />
      </div>
    </div>
  )
}
