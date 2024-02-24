import React from 'react'
import { motion } from 'framer-motion'

import gradientBg from '../assets/gradientBG.png'
import asteriskIcon2 from '../assets/asteriskIcon2.png'
import jersey from '../assets/jerseyDashboard.png'
import cap from '../assets/capDashboard.png'
import shoes from '../assets/shoesDashboard.png'

import { useNavigate } from 'react-router-dom'


export default function Dashboard() {
  const navigate = useNavigate();

  const gotoNav = (target) => {
    navigate(`/${target}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className='bg-cover h-screen w-screen p-5 overflow-hidden' style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <div className='flex justify-center'>
        <img src={asteriskIcon2} alt="icon" className='w-20' />
      </div>
      <div className='flex flex-row w-full py-20 justify-center'>
        <div className='col-span-1 flex justify-center transition-all'>
          <img src={jersey} alt="jersey" className='w-[80%] hover:scale-125 dashboard_img' onClick={() => gotoNav('jersey')} />
        </div>
        <div className='col-span-1 flex justify-center transition-all'>
          <img src={cap} alt="cap" className='w-[80%] hover:scale-125 dashboard_img' onClick={() => gotoNav('cap')} />
        </div>
        <div className='col-span-1 flex justify-center transition-all'>
          <img src={shoes} alt="shoes" className='w-[80%] hover:scale-125 dashboard_img' onClick={() => gotoNav('shoes')} />
        </div>
      </div>
    </motion.div>
  )
}
