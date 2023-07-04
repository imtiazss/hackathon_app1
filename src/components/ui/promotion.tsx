import React from 'react'

const Promotion = () => {
  return (
    <div className="pb-10">
        {/* Promotion Heading */}
        <div className="text-center mb-10">
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
                Our Services & Offers
            </h1>
        
            <div className="flex mt-6 justify-center">
                <div className="w-24 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
        </div>
        {/* Promotion Start here */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* 1st Child */}
            <div className="hero h-[25rem] promo-1 rounded-xl shadow-lg shadow-cyan-700 bg-fixed bg-no-repeat bg-center">
                <div className="hero-overlay bg-opacity-60 rounded-xl  ">
                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite1 uppercase">Get upto 
                        <span className='animate-pulse durantion-4000 text-myOrange'> 60%</span> OFF</h1>
                        <p className=' text-myBlackHead font-bold  text-xl bg-myWhite opacity-50 m-4 rounded-2xl'>Don't wait, start saving today!.</p>
                        <p className="mb-5 text-myWhite1  scroll-m-20 text-md scroll  font-semibold tracking-tight">Hurry and shop now before the offer expires. 
                        <br/>Applied Offer for Clothes and tops.
                        </p>
                        
                        
                    </div>
                </div>
            </div>
            {/* 2nd Child */}
            <div className="hero h-[25rem] promo-2 rounded-xl shadow-lg shadow-cyan-700 bg-fixed bg-no-repeat bg-center">
                <div className="hero-overlay bg-opacity-60 rounded-xl  ">
                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite1 uppercase">Get upto 
                        <span className='animate-pulse durantion-4000 text-myOrange '> 40%</span> OFF</h1>
                        <p className=' text-myBlackHead font-bold  text-xl bg-myWhite opacity-50 m-4 rounded-2xl'>Don't wait, start saving today!.</p>
                        <p className="mb-5 text-myWhite1  scroll-m-20 text-md scroll  font-semibold tracking-tight">Hurry and shop now before the offer expires. 
                       <br/>Applied Offer for Jewelry and Perfumes. 
                        </p>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Promotion