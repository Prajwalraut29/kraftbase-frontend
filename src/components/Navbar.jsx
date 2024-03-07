import React from 'react'
import logo from '../images/airbnb.png'
import profile from '../images/user.png'
import { IoSearch } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";
import { IoReorderThreeSharp } from "react-icons/io5";
import golf from '../images/golf.jpg'
import bed from '../images/bed.jpg'
import country from '../images/country.jpg'
import farm from '../images/farm.jpg'
import home from '../images/home.jpg'
import key from '../images/key.jpg'
import mysearch from '../images/mysearch.jpg'
import pools from '../images/pools.jpg'
import view from '../images/view.jpg'
import room from '../images/room.jpg'
import filter from '../images/filter.png'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
const Navbar = () => {
    const cartsize = useSelector((state) => state.cart.cart)

    return (
        <div className='fixed z-50  left-0 right-0 p-0 bg-white '>
            <div className=' relative  flex items-center justify-between h-[89px] w-full shadow-sm border-b-[1px]  '>
                <Link to='/'>
                    <div className='flex items-center gap-1'>
                        <div className='logo hidden sm:block md:block'>
                            <img className='w-10' src={logo} alt="" />
                        </div>
                        <div>
                            <p className='text-[2vw] font-serif text-red-500 font-bold sm:block md:block'>airbnb</p>
                        </div>
                    </div>
                </Link>


                <div className='search-bar border-[1px] border-slate-300 w-[370px] h-[55px] p-2 m-4 flex items-center justify-around rounded-full shadow-md  '>
                    <div className='flex items-center justify-center pr-1  border-r-[2px] border-slate-300 '>
                        <p className='font-semibold text-md pr-2'>map-area</p>
                    </div>
                    <div className='flex items-center justify-center pr-1  border-r-[2px] border-slate-300 '>
                        <p className='font-semibold text-md pr-2'>5-6 Mar</p>
                    </div>
                    <div>
                        <div className='flex items-center '>
                            <input type="text" className='py-3 px-1 w-28 h-10 rounded-md outline-none ' placeholder='add  guest' />
                            <span className='bg-red-500 p-2 rounded-full cursor-pointer' >
                                <IoSearch size={20} color='white' />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-4 justify-between  '>
                    <p className='absolute mb-10 px-[6px] bg-red-500 rounded-full '>{cartsize.length > 0 ? cartsize.length : null}</p>
                    <Link to='/like'>
                        <FaHeart className='text-slate-400' size={26} />
                    </Link>
                    <p className='whitespace-nowrap  cursor-pointer font-semibold  px-1 py-3 rounded-full text-[16px]  hover:bg-slate-50'>Airbnb your home </p>
                    <span className='cursor-pointer font-semibold  p-4 rounded-full  hover:bg-slate-50'>
                        <RiGlobalLine size={21} />
                    </span>
                    <div className='flex items-center border-[1px] border-slate-200 m-2 px-4 py-2 rounded-full gap-2 '>
                        <span>
                            <IoReorderThreeSharp size={25} />
                        </span>
                        <span>
                            <img className='w-10' src={profile} alt="" />
                        </span>
                    </div>
                </div>

            </div>

            <div className=' bg-white flex items-center justify-between  p-[24px]  h-[88px] w-full border-[2px] border-slate-100 cursor-pointer px-7'>

                <div className='scrollbar-none flex overflow-y-hidden '>
                    <Link to='/'>
                        <div className='px-[18px] m-10 flex flex-col  items-center justify-center border-r-[1px] border-slate-400'>
                            <img className='w-7' src={mysearch} alt="" />
                            <p className=' whitespace-nowrap text-sm font-semibold text-slate-600 '>My search</p>
                        </div>
                    </Link>
                    <div className='p-[24px] flex flex-col  items-center justify-center'>
                        <img className='w-7' src={room} alt="" />
                        <p className=' whitespace-nowrap text-sm font-semibold text-slate-600 '>Rooms</p>
                    </div>
                    <div className='p-[24px] flex flex-col  items-center justify-center'>
                        <img className='w-7' src={pools} alt="" />
                        <p className=' whitespace-nowrap text-sm font-semibold text-slate-600 '>Amazing pools</p>
                    </div>
                    <div className='p-[24px] flex flex-col  items-center justify-center'>
                        <img className='w-7' src={bed} alt="" />
                        <p className=' whitespace-nowrap text-sm font-semibold text-slate-600 '>Bed & breakfasts</p>
                    </div>
                    <div className='p-[24px] flex flex-col  items-center justify-center'>
                        <img className='w-7' src={farm} alt="" />
                        <p className='whitespace-nowrap text-sm font-semibold text-slate-600 '>Farms</p>
                    </div>
                    <div className='p-[24px] flex flex-col  items-center justify-center'>
                        <img className='w-7' src={view} alt="" />
                        <p className=' whitespace-nowrap text-sm font-semibold text-slate-600 '>Amazing views</p>
                    </div>
                    <div className='p-[24px] flex flex-col  items-center justify-center'>
                        <img className='w-7' src={country} alt="" />
                        <p className=' whitespace-nowrap text-sm font-semibold text-slate-600 '>Countryside</p>
                    </div>
                    <div className='p-[24px] flex flex-col  items-center justify-center'>
                        <img className='w-7' src={key} alt="" />
                        <p className='whitespace-nowrap text-sm font-semibold text-slate-600 '>New</p>
                    </div>
                    <div className='p-[24px] flex flex-col  items-center justify-center'>
                        <img className='w-7' src={golf} alt="" />
                        <p className='whitespace-nowrap text-sm font-semibold text-slate-600 '>Golfing</p>
                    </div>
                </div>

                <div className='flex gap-5 items-center justify-between'>


                    <div className=' flex items-center  gap-3 border-[1px] py-4 px-5 rounded-lg border-slate-300'>
                        <img src={filter} className='w-5' alt="" />
                        <p className='font-bold text-sm  '>Filters</p>
                    </div>
                    <div className='flex  items-center justify-center gap-1 border-[1px] px-5 py-3  rounded-lg border-slate-300'>
                        <p className='whitespace-nowrap'>Display total before taxes </p>

                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>

                    </div>
                </div>

            </div>


        </div>



    )
}

export default Navbar
