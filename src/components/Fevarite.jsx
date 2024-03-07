import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { removecart } from '../store/cartSlice';

const Fevarite = () => {
    const data = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    return (
        <div className='flex pt-44 flex-wrap gap-3'>
            {
                data.map((item) => {
                    return <div className='flex'>
                        <div className=" p-2  flex flex-col  text-gray-700 bg-white  bg-clip-border rounded-xl w-96 h-100 object-cover    ">
                            <RxCross1 size={28} onClick={() => dispatch(removecart(item))} className=' absolute cursor-pointer text-red-600   m-2 bg-slate-200 rounded-md' />
                            <div
                                className="overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

                                <img
                                    src={item.img}
                                    alt="card-image" />
                            </div>
                            <div class="p-6">
                                <div className='flex justify-between items-center'>
                                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {item.name}
                                    </h5>
                                    <span className='cursor-pointer' >

                                    </span>
                                    <span className='flex gap-1 items-center'>
                                        <FaStar />  {item.rating}
                                    </span>
                                </div>



                                <p class="text-md font-semibold text-slate-600 text-base antialiased  leading-relaxed text-inherit">
                                    {item.desc.slice(0, 25)}..
                                </p>
                                <p class="text-md font-semibold text-slate-600 text-base antialiased  leading-relaxed text-inherit">
                                    {item.desc.slice(30, 40)}..
                                </p>
                                <p class="text-md font-semibold text-slate-600 text-base antialiased  leading-relaxed text-inherit">
                                    {item.desc.slice(50, 60)}..
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <a className='underline font-semibold' href='#'> {item.price}₹
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default Fevarite
