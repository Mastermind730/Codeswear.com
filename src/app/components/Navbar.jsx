"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiCirclePlus,CiCircleMinus } from "react-icons/ci";

const navlinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Tshirts",
    path: "/tshirts",
  },
  {
    title: "Hoodies",
    path: "/hoodies",
  },
  {
    title: "Mug",
    path: "/mugs",
  },
];
const Navbar = () => {
  const [toggleCart, setToggleCart] = useState();
  const ref = useRef();
  useEffect(() => {
    const sidecart = ref.current;

    if (toggleCart) {
      sidecart.classList.remove("translate-x-full");
    } else {
      sidecart.classList.add("translate-x-full");
    }
  }, [toggleCart]);
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"./"}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">CODESWEAR.COM</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navlinks.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="mr-5 hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setToggleCart(!toggleCart)}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          <PiShoppingCartFill />
        </button>
        <div
  ref={ref}
  className="sidecart w-3/6 md:w-80 lg:w-96 h-full p-4 md:p-8 bg-blue-500 fixed top-0 right-0 transform transition-transform translate-x-full"
>
  <button
    className="absolute top-3 right-3"
    onClick={() => setToggleCart(!toggleCart)}
  >
    <MdCancel />
  </button>
  <h2 className="text-lg md:text-xl lg:text-2xl m-2">Project Cart</h2>
  <ol className="flex flex-col">
    <li className="mb-4">
      <div className="flex items-center text-black">
        <span className="font-semibold mr-2">Tshirt-Wear the code</span>
        <CiCircleMinus className="bg-red-500 text-xl"/>
        <span className="font-bold mx-2">1</span>
        <CiCirclePlus className="bg-green-500 text-xl"/>
      </div>
    </li>
    <li className="mb-4">
      <div className="flex items-center text-black">
        <span className="font-semibold mr-2">Tshirt-Wear the code</span>
        <CiCircleMinus className="bg-red-500 text-xl"/>
        <span className="font-bold mx-2">1</span>
        <CiCirclePlus className="bg-green-500 text-xl"/>
      </div>
    </li>
  </ol>
  <button className="flex ml-auto text-white bg-indigo-500 rounded-full border-0 py-2 px-4 md:px-8 focus:outline-none hover:bg-indigo-600">
    <AiOutlineShoppingCart className="relative top-1 mx-1"/>
    <span className="font-semibold hidden md:inline">Cart</span>
  </button>
</div>

      </div>
    </header>
  );
};

export default Navbar;
