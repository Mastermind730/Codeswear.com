"use client";
import React from "react";
import Link from "next/link";
import { useState, useRef, useEffect, useContext } from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdCancel, MdAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { CartContext } from "./CartContext";
import LoadingBar from "react-top-loading-bar";
import { getServerSession } from "next-auth";
import { options } from "../../lib/options";


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
const Navbar =  () => {
  const { cart, total, addCart, clearCart, deleteCart } =
    useContext(CartContext);
  const [log, setlog] = useState(false);
  const [drop, setdrop] = useState(false);
  const [Progress, setProgress] = useState(0);
  // const updataeProgress = (value) => {
  //   setProgress(value);
  // };

  // console.log(addcart,cart,delete_cart,total)
  // const [cart, setcart] = useState({});

  const [toggleCart, setToggleCart] = useState();
  // const [cart, setcart] = useState({});
  const logout=()=>{
    localStorage.removeItem("token");
    setlog(false);
  }
  const ref = useRef();
  <LoadingBar
    color="rgb(180, 130, 251)"
    progress={Progress}
    waitingTime={400}
    onLoaderFinished={() => {
      setProgress(0);
    }}
  />;
  useEffect(() => {
    const sidecart = ref.current;

    if (toggleCart) {
      sidecart.classList.remove("translate-x-full");
    } else {
      sidecart.classList.add("translate-x-full");
    }
    let data = localStorage.getItem("token");
    if (data) {
      setlog(true);
    } else {
      setlog(false);
    }

    const interval=setInterval(()=>{
      setProgress((prevProgress)=>{
        prevProgress >=100 ? 0:prevProgress+10;
      });
    },600);
    return ()=>{
      clearInterval(interval);
    }


  }, [toggleCart]);
  return (
    <>
    <LoadingBar
     color="rgb(180, 130, 251)"
     progress={Progress}
     waitingTime={400}
     onLoaderFinished={() => {
         setProgress(0);
     }}
   />
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
              onClick={() => {
                updataeProgress(40), updataeProgress(100);
              }}
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

        {log ? (
          // Display MdAccountCircle when log is true
          <div
            className="relative inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            onMouseEnter={() => {
              setdrop(true);
            }}
            onMouseLeave={() => {
              setdrop(false);
            }}
          >
            <MdAccountCircle />
            {drop && (
              <div className="absolute top-full left-0 mt-1 bg-gray-800 border rounded-md shadow-md">
                <ul>
                  <Link href="#">
                    <li className="py-2 px-4 hover:text-purple-400 hover:border-b hover:border-purple-300">Account</li>
                  </Link>
                  <Link href="#">
                    <li className="py-2 px-4 hover:text-purple-400 hover:border-b hover:border-purple-300">Orders</li>
                  </Link>
                  <Link href="/" onClick={logout}>
                    <li className="py-2 px-4 hover:text-purple-400 hover:border-b hover:border-purple-300">LogOut</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        ) : (
          // Display Login button when log is false
          <Link
            href={"/login"}
            className="inline-flex items-center bg-blue-600 mx-2 rounded-md text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-700  text-base mt-4 md:mt-0"
          >
            Login
          </Link>
        )}



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
            {cart && Object.entries(cart).length === 0 ? (
              <span className="mt-3 font-semibold text-black">
                Your Cart is Empty
              </span>
            ) : (
              cart &&
              Object.entries(cart).map(([itemcode, item]) => (
                <li key={itemcode} className="mb-4">
                  <div className="flex items-center text-black">
                    <span className="font-semibold mr-2">{item.item_name}</span>
                    <button
                      onClick={() => {
                        deleteCart(
                          "tshirt123",
                          1,
                          "wear-the-code",
                          "499",
                          "XL",
                          "red"
                        );
                      }}
                    >
                      <CiCircleMinus className="bg-red-500 text-xl" />
                    </button>
                    <span className="font-bold mx-2">{item.qty}</span>

                    <button
                      onClick={() => {
                        addCart(
                          "tshirt123",
                          1,
                          "wear-the-code",
                          "499",
                          "XL",
                          "red"
                        );
                      }}
                    >
                      {" "}
                      <CiCirclePlus className="bg-green-500 text-xl" />
                    </button>
                  </div>
                  <span className="font-bold mx-2">Total:{total}</span>
                </li>
              ))
            )}
          </ol>
          <div className="flex flex-2 align-center justify-center">
            <button
              onClick={() => {
                clearCart();
              }}
              className="flex ml-auto text-white bg-indigo-500 rounded-full border-0 py-2 px-4 md:px-8 focus:outline-none hover:bg-indigo-600"
            >
              <AiOutlineShoppingCart className="relative top-1 mx-1" />
              <span className="font-semibold hidden md:inline">Clear Cart</span>
            </button>
            <Link href={"/checkout"}>
              <button
                href={"/checkout"}
                className="flex ml-auto text-white bg-indigo-500 rounded-full border-0 py-2 px-4 md:px-8 focus:outline-none hover:bg-indigo-600"
              >
                <AiOutlineShoppingCart className="relative top-1 mx-1" />
                <span className="font-semibold hidden md:inline">Checkout</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;
