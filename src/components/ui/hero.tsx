import React from 'react'
import { Button } from './button'
import {FaShoppingBag } from 'react-icons/fa'
const hero = () => {
  return (
<div className='mb-10'>
<div className="hero min-h-[80vh] custom-img bg-fixed bg-no-repeat bg-center" >
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite1">
        Futuristic 
      <span className='text-myOrange  animate-pulse duration-4000 '> Clothes</span></h1>
      <p className="mb-5 text-myWhite1  scroll-m-20 text-xl scroll  font-semibold tracking-tight">
        Upgrade your Wardrobe with Sleek & Stylish Apparels and Top-Notch Shoes.</p>
        <Button className=' outline outline-off outline-1 text-myWhite1 group hover:rounded-2xl duration-300 hover:outline-myOrange shadow-md shadow-myOrange'>
      <FaShoppingBag className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce " /> 
      Shop Now
    </Button>
    </div>
  </div>
</div>
</div>
  )
}

export default hero