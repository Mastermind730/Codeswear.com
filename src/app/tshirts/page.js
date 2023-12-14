"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Page = () => {
  const [tshirts, setTshirts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        
        // Ensure that data is an array before setting state
        if (Array.isArray(data)) {
          setTshirts(data);
        } else {
          // throw new Error('Invalid data structure received');
          setTshirts(Object.values(data))
          console.log(Object.values(data))
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          <div className="flex flex-wrap -m-4 bg-opacity-20 shadow-lg backdrop-blur-md border-1 border-opacity-18 rounded-10 border-white">
            {tshirts && tshirts.map((item, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://simpleteeshops.com/wp-content/uploads/2020/02/Graphic-Printed-T-Shirt-for-Men-USA-Flag-T-Shirt.jpg"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">${item.price}</p>
               <div className='mt-1'>
                
                {item.size.includes('S') && <span className='border border-gray-100 px-1 mx-1'>S</span>}
                {item.size.includes('M') && <span className='border border-gray-100 px-1 mx-1'>M</span>}
                {item.size.includes('L') && <span className='border border-gray-100 px-1 mx-1'>L</span>}
                {item.size.includes('XXL') && <span className='border border-gray-100 px-1 mx-1'>XXL</span>}
                {item.size.includes('XL') && <span className='border border-gray-100 px-1 mx-1'>XL</span>}
                </div> 
                <div className='mt-1'>
                
                {item.color.includes('red') && <button className='border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none'>S</button>}
                {item.color.includes('blue') && <button className='border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none'>M</button>}
                {item.color.includes('black') && <button className='border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none'>L</button>}
                {item.color.includes('green') && <button className='border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none'>XXL</button>}
                {item.color.includes('yellow') && <button className='border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none'>XL</button>}
                </div> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
