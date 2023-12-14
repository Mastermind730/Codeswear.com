"use client";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoadingBar from 'react-top-loading-bar'




export default function Home() {
  const [cart, setcart] = useState({});
  const [total, setTotal] = useState(0);
  const [progress, setProgress] = useState(0);
  
  

  

  useEffect(() => {
    console.log("use effect is running");
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error("Error fetching data from localStorage:", error);
    }
    
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt=0;
    let keys=Object.keys(myCart);
    for(let i=0;i<keys.length;i++){
      subt+=(myCart[keys[i]]["price"])*(myCart[keys[i]]["qty"]);
    }
    setTotal(subt);
  };
  
  const addCart = (itemcode, qty, item_name, price, size, variant) => {
    console.log("Item adding...");
    console.log("Item adding...", itemcode, qty, item_name, price, size, variant);

    let myCart = { ...cart };
    if (itemcode in myCart) {
      myCart[itemcode]["qty"] = myCart[itemcode].qty + qty;
    } else {
      myCart[itemcode] = { qty: 1, item_name, price, size, variant };
    }
    setCart(myCart);
    saveCart(myCart);
    console.log(myCart, "added");
  };

  const clear_cart = () => {
    setcart({});
    save_cart({});
  };
  const delete_cart = (itemcode, qty, item_name, price, size, variant) => {
    let mycart = cart;
    if (itemcode in cart) {
      mycart[itemcode]["qty"] = cart[itemcode].qty - qty;
    }
    if (mycart[itemcode]["qty"] <= 0) {
      delete mycart[itemcode];
    }
    save_cart(mycart);
    setcart(mycart);
  };

  return (
    <>

<LoadingBar
     color="rgb(180, 130, 251)"
     progress={progress}
     waitingTime={400}
     onLoaderFinished={() => {
         setProgress(0);
     }}
   />
      <Navbar 
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="text-gray-400 body-font bg-gray-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">
                ROOF PARTY POLAROID
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Master Cleanse Reliac Heirloom
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                heard of them man bun deep jianbing selfies heirloom prism food
                truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <a className="text-blue-400 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <a className="text-blue-400 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <a className="text-blue-400 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Melanchole
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <a className="text-blue-400 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Button
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
