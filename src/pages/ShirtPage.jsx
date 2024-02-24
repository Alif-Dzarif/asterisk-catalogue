import React from 'react'
import { motion } from 'framer-motion'

import jerseyPreview from '../assets/jerseyPreview.png'

export default function ShirtPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className='py-32 grid grid-cols-2'
    >
      <motion.div
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        exit={{ x: -1500 }}
        transition={{ duration: 2 }}
        className='col-span-1 text-center w-full py-10 px-28'
      >
        <h1 className='text-3xl font-semibold mb-10 desc_text'>Asterisk Jersey</h1>
        <div className='px-28 text-xl font-light italic desc_text'>
          <p className="mb-5">
            “Satu-satunya Jersey yang Konsepnya
            Bercampur antara Sport dan Astronomi
            Menjadikan bermain Baseball seperti
            berada di luar Angkasa
          </p>
          <p className=' mb-5'>
            Dengan bahan berkualitas tinggi,
            tentu-
            nya anda akan mendapatkan feel
            yang
            begitu nyaman saat bermain”
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        exit={{ x: -1000 }}
        transition={{ duration: 1 }}
        className='cols-span-1 px-5 py-5 w-full flex gap-10 justify-center'
      >
        <img src={jerseyPreview} alt="jersey-preview" className='w-[52rem]' />
      </motion.div>
    </motion.div>
  )
}
