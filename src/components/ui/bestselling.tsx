import Image from 'next/image'
import React from 'react'
import Card from '@/components/ui/card'
const Bestselling = () => {
  return (
//    
    <div className='mb-10'>
        <div className="text-center mb-10">
            {/* Heading */}
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
            Best Selling Products
            </h1>

            <div className="flex mt-6 justify-center">
                <div className="w-24 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
        </div>
 
            {/* Cards */}
            <Card/>
    </div>
  )
}

export default Bestselling