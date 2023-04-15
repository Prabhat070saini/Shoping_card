import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  let removefromcartHandler = () => {
    dispatch(remove(post.id));
    toast.error("Remove from cart");
  };
  let addtocartHandler = () => {
    dispatch(add(post));
    toast.success("Add to cart successfully");
  };
  return (
    <React.Fragment>
      <div className="w-[14rem]  flex flex-col  items-center justify-between  hover:cursor-pointer hover:scale-110 transition duration-300 ease-in gap=3 p-4 mt-10 rounded-xl ml-4 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {post.title}
          </p>
        </div>
        <div>
          <p className="text-gray-700 w-40 font-normal text-[10px] text-left">
            {post.description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
        </div>
        <div className="h-[11.25rem]">
          <img src={post.image} alt="" className="w-full h-full" />
        </div>
        <div className="flex justify-between gap-3 items-center w-full mt-5">
          <div>
            <p className="text-green-600 font-semibold">${post.price}</p>
          </div>

          {cart.some((p) => p.id === post.id) ? (
            <button
              className="text-gray-700  hover:bg-gray-700 hover:text-white transition duration-300 ease-linear  border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase"
              onClick={removefromcartHandler}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700  hover:bg-gray-700 hover:text-white transition duration-300 ease-linear  border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase"
              onClick={addtocartHandler}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
