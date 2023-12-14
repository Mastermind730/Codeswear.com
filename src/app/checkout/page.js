"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CartContext } from '../components/CartContext';
import { useState, useRef, useEffect,useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiCirclePlus,CiCircleMinus } from "react-icons/ci";

const page = () => {
    const { cart,total, addCart, clearCart, deleteCart } = useContext(CartContext);

  return (
    <>
    <Navbar/>
    <div className='mt-4'>
        <h1 className='font-3xl text-center font-bold'>Checkout</h1>
        <form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="email"
      name="floating_email"
      id="floating_email"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Email address
    </label>
  </div>
 
    
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_first_name"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        First name
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_last_name"
        id="floating_last_name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_last_name"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Last name
      </label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        name="floating_phone"
        id="floating_phone"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_phone"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Phone number (123-456-7890)
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="Address"
        id="Address"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="Address"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Address (Pune Maharashtra)
      </label>
    </div>
  </div>
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
</form>

    </div>
    <div className="Products flex flex-3 flex-col align-center justify-center mt-10">
        <h2 className='text-4xl  font-semibold m-4 text-center'>Review your cart here</h2>
        <ol className="flex flex-col">
  {cart && Object.entries(cart).length === 0 ? (
  <span className="mt-3 font-semibold text-black">Your Cart is Empty</span>
) : (
   cart && Object.entries(cart).map(([itemcode, item]) => (
    <li key={itemcode} className="mb-4">
      <div className="flex items-center justify-center ">
        <span className="font-semibold mr-2">{item.item_name}</span>
        <button onClick={()=>{deleteCart("tshirt123",1,"wear-the-code","499","XL","red")}}><CiCircleMinus className="bg-red-500 text-xl" /></button>
        <span className="font-bold mx-2">{item.qty}</span>
       <button onClick={()=>{addCart("tshirt123",1,"wear-the-code","499","XL","red")}}> <CiCirclePlus  className="bg-green-500 text-xl" /></button>
      </div>
    </li>
  ))
)}


    
  </ol>
  <div className='flex align-center justify-center'>
  <span className="font-bold mx-2">Your Bill:Rs{total}</span>

  <span className="font-bold mx-2">Total:{total}</span>
  </div>
  <div className='flex m-5 justify-center'>
 <button className='bg-green-400 hover:bg-green-700 p-3 m-2 text-black rounded-2xl'> Pay Now</button>
 </div>
    </div>
    <Footer />
    </>
  )
}

export default page