import React from 'react'
import { motion } from 'framer-motion'


import capsPreview from '../assets/capsPreview.png'
import AlifDzarif from '../assets/alifDzarif.png'
import Keen from '../assets/Keen.png'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className='py-44 grid grid-cols-3'
    >
      <motion.div
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        exit={{ x: -1500 }}
        transition={{ duration: 1.5 }}
        className='flex justify-center mt-16'
      >
        <div className='flex items-center flex-col overflow-hidden'>
          <img src={AlifDzarif} alt="alif" className='w-52' />
          <motion.p
            initial={{ y: 1500 }}
            animate={{ y: 0 }}
            exit={{ y: 1500 }}
            transition={{ duration: 2 }}
            className='text-2xl font-semibold'
          >
            La Ode Abdul Dzarif .I
          </motion.p>
          <motion.p
            initial={{ y: 1500 }}
            animate={{ y: 0 }}
            exit={{ y: 1500 }}
            transition={{ duration: 2.5 }}
          >Web Developer</motion.p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        exit={{ y: -1500 }}
        transition={{ duration: 1 }}
        className='py-16'
      >
        <div className='flex justify-center text-5xl font-medium navbar_text'>
          <h1>ABOUT ASTERISK</h1>
        </div>
        <div className='px-10 my-5 text-lg'>
          <p className='text-center my-5'>
            Asterisk adalah Salah satu Design fashion yang menggabungkan susasana sporty, music, dan
          </p>
          <p className='text-center my-5'>
            Website ini akan berkembang setiap saat, dan mungkin kedepannya akan bersaing dengan nike dan adidas.
          </p>
        </div>
        <div className='flex justify-center text-5xl font-medium navbar_text'>
          <h1>CHEERS</h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 1500 }}
        animate={{ x: 0 }}
        exit={{ x: 1500 }}
        transition={{ duration: 1.5 }}
        className='flex justify-center mt-16'
      >
        <div className='flex flex-col items-center overflow-hidden'>
          <img src={Keen} alt="keen" className='w-64' />
          <motion.p
            initial={{ y: 1500 }}
            animate={{ y: 0 }}
            exit={{ y: 1500 }}
            transition={{ duration: 2 }}
            className='text-2xl font-semibold'
            >
              Rakeen Ferdiansyah
          </motion.p>
          <motion.p
            initial={{ y: 1500 }}
            animate={{ y: 0 }}
            exit={{ y: 1500 }}
            transition={{ duration: 2.5 }}
          >
            Web Designer
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}
