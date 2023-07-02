import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {GiTakeMyMoney,GiCaravan} from 'react-icons/gi'
const Services = () => {
  return (
    <section className="text-myBlackHead body-font">
  <div className="container pb-10 mx-auto">
    <div className="text-center mb-10">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
        Our Services & Offers
      </h1>
     
      <div className="flex mt-6 justify-center">
        <div className="w-24 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
  
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
    {/* Delivery  */}
      <div className=" group p-4 lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-myBlackHead mb-5 flex-shrink-0">
         <GiCaravan className='w-20 h-16'/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange text-lg title-font font-medium mb-3">
           Free Delivery
          </h2>
          <p className="line-clamp-2 text-myBlackPara group-hover:text-myBlackPara/70 leading-relaxed text-sm">
            Free delivery applied if order above $1,000
          </p>
        
        </div>
      </div>
    
    
    {/* 24/7 Services */}
    
      <div className=" group p-4 lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-myBlackHead mb-5 flex-shrink-0">
         <RiCustomerService2Fill className='w-20 h-16'/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange text-lg title-font font-medium mb-3">
           24/7 Customer Service
          </h2>
          <p className="line-clamp-2 text-myBlackPara group-hover:text-myBlackPara/70 leading-relaxed text-sm">
            For queries and question feel free to contact us.
          </p>
        
        </div>
      </div>
    
   
    {/* Money Back Guarantee */}
    
      <div className=" group p-4 lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-myBlackHead mb-5 flex-shrink-0">
         <GiTakeMyMoney className='w-20 h-16'/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange text-lg title-font font-medium mb-3">
           Money Back Guarantee
          </h2>
          <p className="line-clamp-2 text-myBlackPara group-hover:text-myBlackPara/70 leading-relaxed text-sm">
            Get money back guarantee on damage product or delivery failiur on time.
          </p>
        
        </div>
     
        </div>
    </div>
  </div>
</section>

  )
}

export default Services