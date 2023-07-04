import React from 'react'
import CardData from '../../lib/carddata'
import Image from 'next/image';
import { Button } from './button';
import { FaCartPlus,FaHeart } from 'react-icons/fa';

const Card = () => {
   
  return (
  
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 '>
      
         {
        CardData.map((el) => (
            <div className='shadow-xl rounded-2xl group'>
              <div className="card card-side bg-base-100  ">
                      <Image
                      src={el.image}
                      alt="Cart Image1"
                      className='w-40 h-60 ' />
                      <div className="card-body ">
                          <h2 className="card-title">{el.title}</h2>
                          <p>Click the button to watch on Jetflix app.</p>
                          <p className='group-hover:text-myOrange font-semibold'>${el.price}</p>
                        
                      </div>
                    
              </div>
                <div className="card-actions bg-base-100  flex flex-row justify-between m-2  rounded-2xl my-2">
                <Button className='outline outline-1 bg-myBlackHead  text-myWhite1 group  hover:text-myBlackHead w-36 h-10'> 
                    <FaCartPlus className='text-myWhite1 mr-2 w-4 h-4  group-hover:text-myOrange '/>  Add to Cart
                </Button>
                <Button className='outline outline-1 bg-myBlackHead  text-myWhite1 group  hover:text-myBlackHead w-36 h-10'> 
                    <FaHeart className='text-myWhite1 mr-2 w-4 h-4  group-hover:text-myOrange '/>  Buy Now
                </Button>
              </div>
            </div>
        
        ))
        } 
    </div>
  )
}

export default Card