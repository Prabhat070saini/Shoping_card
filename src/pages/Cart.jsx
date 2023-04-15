import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

import React, { useEffect, useState } from "react";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  // const [cart, setcart] = useState([]);
  const [Totalamount, setTotalamount] = useState(0);
  useEffect(() => {
    setTotalamount(cart.reduce((acc, current) => acc + current.price, 0));
  }, [cart]);
  return (
    <React.Fragment>
      <div>
        {cart.length > 0 ? (
          <div className="flex gap-x-16">
            <div>
              {cart.map((Item, index) => {
                return <CartItem key={Item.id} Item={Item} Itemindex={index} />;
              })}
            </div>
            <div className="flex flex-col mt-20 w-[25rem] h-full sticky top-1">
              <div>
                <h2 className=" text-green-900 font-semibold uppercase">
                  Your CarT
                </h2>
                <h2 className="text-green-900 font-extrabold text-[2rem] leading-4 uppercase mt-2">
                  Summary
                </h2>
                <p className="mt-7 text-black ">
                  <span className="font-bold">Total Item : {cart.length}</span>
                </p>
                <div className="pt-[20rem] font-semibold">
                  <p>Total Amount: {Totalamount}</p>
                </div>
                <button className="w-full h-[3rem] bg-green-700  rounded-md  text-green-200">
                  checkout Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center capitalize items-center text-gray-700 font-bold h-[100vh] ">
            <h1> your cart is empty !</h1>
            <NavLink to="/">
              <button className="w-[10rem] mt-10 capitalize h-[3rem] bg-green-700  rounded-md  text-green-200">
                {" "}
                Shop Now
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
