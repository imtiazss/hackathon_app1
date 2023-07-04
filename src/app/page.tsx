import Bestselling from '@/components/ui/bestselling'
import Categories from '@/components/ui/categories'
import Hero from '@/components/ui/hero'
import Promotion from '@/components/ui/promotion'
import Services from '@/components/ui/services'
import Image from 'next/image'
import {FaBeer} from 'react-icons/fa'
export default function Home() {
  return (
        <div className=''>
            <Hero/>
            <Services/>
            <Promotion/>
            <Categories/>
            <Bestselling/>
          
        </div>
    )
}
