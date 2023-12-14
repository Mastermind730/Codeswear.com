"use client";
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  const saveCart = (myCart) => {
    try {
      // Save cart to localStorage
      localStorage.setItem("cart", JSON.stringify(myCart));
  
      // Calculate total
      let total = calculateTotal(myCart);
  
      // Set the total
      setTotal(total);
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };
  
  const calculateTotal = (myCart) => {
    let total = 0;
    let keys = Object.keys(myCart);
  
    for (let i = 0; i < keys.length; i++) {
      total += myCart[keys[i]]["price"] * myCart[keys[i]]["qty"];
    }
  
    return total;
  };
  
  useEffect(() => {
    console.log("use effect is running");
    if (localStorage.getItem("cart")) {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      setCart(storedCart);
  
      // Calculate and set the total here
      let total = calculateTotal(storedCart);
      setTotal(total);
    }
  }, []);
  

  const addCart = (itemcode, qty, item_name, price, size, variant) => {
    console.log("Item adding...");
    console.log(
      "Item adding...",
      itemcode,
      qty,
      item_name,
      price,
      size,
      variant
    );

    let myCart = { ...cart };
    if (itemcode in myCart) {
      myCart[itemcode]["qty"] = myCart[itemcode].qty + qty;
    } else {
      // Change this line in addCart
      myCart[itemcode] = { qty: 1, item_name, price, size, variant };
    }
    setCart(myCart);
    saveCart(myCart);
    console.log(myCart, "added");
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const deleteCart = (itemcode, qty, item_name, price, size, variant) => {
    let myCart = { ...cart };
    if (itemcode in myCart) {
      myCart[itemcode]["qty"] = myCart[itemcode].qty - qty;
    }
    if (myCart[itemcode] && myCart[itemcode]["qty"] <= 0) {
      delete myCart[itemcode];
    }
    setCart(myCart);
    saveCart(myCart);
  };

  const contextValue = {
    cart,
    total,
    addCart,
    clearCart,
    deleteCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
