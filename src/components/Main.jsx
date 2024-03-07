
import React, { useEffect, useState } from 'react'
import Data from '../data/Data'
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addtocart } from '../store/cartSlice'
const Main = () => {
    const [like, setlike] = useState(false)
    const [postLike, setpostLike] = useState('')
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()


    return (
        <>
            <div className='flex justify-between  '>
                <p className='text-lg font-bold m-4 '>Over 1,000 places within map area</p>
                <div className='flex mr-16 items-start justify-start gap-[5px]  flex-wrap pt-44 md:mr-[40rem]  '>
                    {
                        Data.map((item) => {
                            return (
                                <div key={item.id} className="p-2 flex flex-col mt-6 text-gray-700 bg-white bg-clip-border rounded-xl w-full md:w-96 h-auto md:h-100 object-cover">
                                    <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                        <img src={item.img} alt="card-image" />
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between items-center">
                                            <h5 className="block mb-2 font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                {item.name}
                                            </h5>



                                            <span className="flex gap-1 items-center">
                                                <FaStar /> {item.rating}
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-between mx-2'>
                                            <div className='flex  flex-col'>
                                                <p className="text-md font-semibold text-slate-600 text-base antialiased leading-relaxed text-inherit">
                                                    {item.desc.slice(0, 25)}
                                                </p>

                                                <p className="text-md font-semibold text-slate-600 text-base antialiased leading-relaxed text-inherit">
                                                    {item.desc.slice(30, 45)}
                                                </p>
                                            </div>

                                            <div className='relative z-10 '>
                                                <span onClick={() => dispatch(addtocart(item))} className='cursor-pointer ' >
                                                    <FaHeart onClick={() => {
                                                        setlike(!like);
                                                        setpostLike(item.id)
                                                    }} className={`${postLike == item.id && like ? "text-red-600" : "null"} cursor-pointer hover:text-red-500`} size={21} />
                                                </span>
                                            </div>
                                        </div>


                                        <div className="p-6 pt-0">
                                            <a className="underline font-semibold" href="#">
                                                {item.price}₹ Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>


                <div className="fixed inset-0 flex items-center justify-center">
                    {toggle ? (
                        <div className="block fixed left-0 right-0 p-0  items-center justify-center pt-44">
                            <iframe className="m-1 rounded-md shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462144.8432087609!2d76.74796489455493!3d28.641680537846504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1709711284212!5m2!1sen!2sin" width="650" height="750" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    ) : (
                        <div className="hidden  fixed left-70 right-0 p-0   items-center justify-center pt-44 md:block">
                            <iframe className="m-1 rounded-md shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462144.8432087609!2d76.74796489455493!3d28.641680537846504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1709711284212!5m2!1sen!2sin" width="650" height="750" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    )}
                </div>

                <div className="fixed inset-0 pt-[50rem] flex items-center justify-center md:hidden">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setToggle(!toggle)}>
                        {toggle ? "Show List" : "Show Map"}
                    </button>
                </div>



            </div>
        </>

    )
}

export default Main
