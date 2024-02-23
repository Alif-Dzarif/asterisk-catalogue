import React from 'react'
import { motion } from 'framer-motion'

import capsPreview from '../assets/capsPreview.png'


export default function CapsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className='py-32 grid grid-cols-2'
    >
      <motion.div
        initial={{ y: 2000 }}
        animate={{ y: 0 }}
        exit={{ y: 2000 }}
        transition={{ duration: 1 }}
        className='cols-span-1 px-5 py-5 w-full flex gap-10 justify-center'
      >
        <img src={capsPreview} alt="caps-preview" />
      </motion.div>
      <motion.div
        initial={{ y: 2500 }}
        animate={{ y: 0 }}
        exit={{ y: 2500 }}
        transition={{ duration: 2 }}
        className='col-span-1 text-center w-full py-10 px-28'
      >
        <h1 className='text-3xl font-semibold mb-10 desc_text'>Asterisk Cap</h1>
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
          <p className='not-italic'>
            Nama dan Nomor bisa dicustom
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
