import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ Item, index }) => {
  const dispatch = useDispatch((state) => state);
  let removehandler = () => {
    dispatch(remove(Item.id));
    toast.error("Item removed");
  };
  return (
    <React.Fragment>
      <div className="flex gap-x-14 ml-32 border-b-2 pt-10 items-start max-w-[40rem]">
        <div className="w-[16rem]  h-[16rem] ">
          <img src={Item.image} alt="" />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-4">
            {Item.title}
          </h1>
          <h2 className="text-gray-700 mt-4 font-normal text-[13px] text-left">
            {Item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h2>
          <div className="flex items-end justify-between">
            <div className="mt-20">
              <p className="text-green-600 font-semibold">${Item.price}</p>
            </div>
            <div
              onClick={removehandler}
              className="hover:cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-red-300 "
            >
              <RiDeleteBin5Line className=" w-[1rem] text-red-600 h-[1rem]" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
