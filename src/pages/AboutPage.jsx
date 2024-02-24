import React from 'react'
import { motion } from 'framer-motion'

import capsPreview from '../assets/capsPreview.png'


export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className='py-32 grid grid-cols-3'
    >
      <div>first</div>
      <div>
        <div className='flex justify-center text-5xl font-bold navbar_text'>
          <h1>ABOUT ASTERISK</h1>
        </div>
        <div className='px-10 text-lg'>
          <p className='text-center my-5'>
            Asterisk adalah Salah satu Design fashion yang menggabungkan susasana sporty, music, dan Astronomy
          </p>
          <p className='text-center my-5'>
            Ide ini ditemukan Oleh Rakeen Ferdiansyah selaku UI/UX pada Website ini
          </p>
          <p className='text-center my-5'>
            dan disisi Developer pada Website ini terdapat rekannya yaitu Laode Abdul Dzarif
          </p>
          <p className='text-center my-5'>
            Website ini akan berkembang setiap saat, dan mungkin kedepannya akan bersaing dengan nike dan adidas.
          </p>
        </div>
      </div>
      <div>third</div>
    </motion.div>
  )
}
