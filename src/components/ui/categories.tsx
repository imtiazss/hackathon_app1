import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <div className="pb-10">
    {/* Categories */}
        <div className="text-center mb-10">
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
                Categories
            </h1>
        
            <div className="flex mt-6 justify-center">
                <div className="w-24 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {/* Category1 */}
            <div className='mb-7 lg:mb-0 overflow-hidden  z-10 mx-auto group relative drop-shadow-md'>
                <Link href='/' >
                    <Image 
                    src = {require('@/../public/images/cat-tops.jpg')}  
                    alt="Category Tops" 
                  
                    className='rounded-xl duration-500 group-hover:scale-125 w-72 h-84'/>
                    <div className='absolute -bottom-10  group-hover:bottom-4 duration-500 scroll-m-20 pb-1 text-2xl font-semibold text-center text-myWhite1 bg-myBlackHead/70 w-full '>
                        <h1 className='uppercase'>tops</h1>
                    </div>
                </Link>
            </div>
          {/* Category 2*/}
        
            <div className='mb-7 lg:mb-0 overflow-hidden  z-10 mx-auto group relative drop-shadow-md '>
                <Link href='/' >
                    <Image 
                    src = {require('@/../public/images/cat-pant2.jpg')}  
                    alt="Category Tops" 
                   
                    className='rounded-xl duration-500 group-hover:scale-125 w-72 h-84'/>
                    <div className='absolute -bottom-10  group-hover:bottom-4 duration-500 scroll-m-20 pb-1 text-2xl font-semibold text-center text-myWhite1 bg-myBlackHead/70 w-full '>
                        <h1 className='uppercase'>pants</h1>
                    </div>
                </Link>
            </div>

             {/* Category 2*/}
        
             <div className='mb-7 lg:mb-0 overflow-hidden  z-10 mx-auto group relative drop-shadow-md '>
                <Link href='/' >
                    <Image 
                    src = {require('@/../public/images/cat-shoes.jpg')}  
                    alt="Category Tops" 
                   
                    className='rounded-xl duration-500 group-hover:scale-125 w-72 h-84'/>
                    <div className='absolute -bottom-10  group-hover:bottom-4 duration-500 scroll-m-20 pb-1 text-2xl font-semibold text-center text-myWhite1 bg-myBlackHead/70 w-full '>
                        <h1 className='uppercase'>shoes</h1>
                    </div>
                </Link>
            </div>

             {/* Category 2*/}
        
             <div className='mb-7 lg:mb-0 overflow-hidden  z-10 mx-auto group relative drop-shadow-md'>
                <Link href='/' >
                    <Image 
                    src = {require('@/../public/images/cat-jewelry.jpg')}  
                    alt="Category Tops" 
                   
                    className='rounded-xl duration-500 group-hover:scale-125 w-72 h-84'/>
                    <div className='absolute -bottom-10  group-hover:bottom-4 duration-500  scroll-m-20 pb-1 text-2xl font-semibold text-center text-myWhite1 bg-myBlackHead/70 w-full '>
                        <h1 className='uppercase'>jewelry</h1>
                    </div>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Categories