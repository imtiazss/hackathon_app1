"use client"
import React from 'react'
import { GiHamburgerMenu} from "react-icons/gi";
import Link from 'next/link';
import Image
 from 'next/image';
import { NavigationMenuDemo } from './navlinks';
import jewelry from '../../public/images/Jewelry-manu.jpeg'
import pants from '../../public/images/pants-menu.png'
import shoes from '../../public/images/shoes_menu.png'
import tops from '../../public/images/tops-menu.jpeg'
const Navbar = () => {
  return (
    <div><div className="navbar bg-myWhite1">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="md:hidden p-0 text-2xl ">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
          
          <GiHamburgerMenu />
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
            <li><Link href="/tops">
                <Image src ={tops} alt ="Tops" width= {32} height={16} />
                Tops
                </Link></li>
              <li><Link href="/pants">
              <Image src ={pants} alt ="Pants" width= {32} height={16} />
              Pants</Link></li>
              <li><Link href="/accessories">
              <Image src ={jewelry} alt ="Jwelry" width= {32} height={16} />
              Acces./Jewelry</Link></li>
              <li><Link href="/shoes">
              <Image src ={shoes} alt ="Shoes" width= {32} height={16} />
              Shoes</Link></li>
            </ul>
          </li>
          <li><Link href="/aboutUs">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        </ul>
        </div>
        <Link href="/">
            <Image className='hidden md:block h-auto w-28 ml-4'
            src = {require("../../public/images/Logo.png")}
            alt="Logo"
       
            />
        </Link>    
    </div>
    <div className='navbar-center'>
    <Link href="/">
            <Image className='block md:hidden h-auto w-28 ml-4'
            src = {require("../../public/images/Logo.png")}
            alt="Logo"
       
            />
    </Link>
    </div>
    <div className="navbar-center hidden md:flex">
        <NavigationMenuDemo/>
    </div>
 
    <div className="navbar-end pr-4">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className=" cursor-pointer group">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:text-myOrange duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item font-semibold group-hover:bg-myBlackHead group-hover:text-myWhite1">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg ">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
   
  </div>

  </div></div>
  )
}

export default Navbar