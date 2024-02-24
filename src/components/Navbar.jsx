import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import navBarBg from '../assets/TopBar.png';
import navbarIcon from '../assets/AsteriskLogo.png';
import glassIcon from '../assets/glass.png';

export default function Navbar() {
  const navigate = useNavigate();

  const navigateByCategory = (cat) => {
    navigate('/' + cat)
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
            <span onClick={() => navigateByCategory('jersey')} className='cursor-pointer hover:text-gray-200 tracking-widest'>JERSEY</span>
          </div>
          <div>
            <span onClick={() => navigateByCategory('cap')} className='cursor-pointer hover:text-gray-200 tracking-widest'>CAP</span>
          </div>
          <div>
            <span onClick={() => navigateByCategory('shoes')} className='cursor-pointer hover:text-gray-200 tracking-widest'>SHOES</span>
          </div>
        </div>
        <div className='flex justify-end text-2xl text-white navbar_text px-16'>
          <div>
            <span onClick={() => navigateByCategory('about')} className='cursor-pointer hover:text-gray-200 tracking-widest'>ABOUT</span>
          </div>
        </div>
      </div>
      <div className='text-black'>
        <Outlet />
      </div>
    </div>
  )
}
