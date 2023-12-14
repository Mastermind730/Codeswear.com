"use client";
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  

  const handleSubmit =  async (e) => {
    e.preventDefault();
  
    if (e.target.name === "name") {
      setname(e.target.value);
    }
    if (e.target.name === "email") {
      setemail(e.target.value);
    }
    if (e.target.name === "password") {
      setpassword(e.target.value);
    }
  //   console.log("Name:", name);
  // console.log("Email:", email);
  // console.log("Password:", password);
  try {
    let response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      let data = await response.json();
      console.log(data);
      toast.success("Data added successfully");
    } else {
      toast.error("Some error occurred");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("An error occurred while processing your request");
  }
  
  };
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a
      href="#"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      />
      Codeswear
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign Up
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} method='POST' >
        <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter your full  name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}

              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your full name"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}

              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Create Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}

              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmpassword"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              id="confirmpassword"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              
              <button   type="submit" className='bg-green-400 hover:bg-green-300 py-3 px-2 rounded-2xl'>Create an account</button>
            </div>
           
          </div>
         
        </form>
      </div>
    </div>
  </div>
  <ToastContainer />

</section>

  )
}

export default Page