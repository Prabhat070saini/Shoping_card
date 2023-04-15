import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import logo from "../../public/logo.png"
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <React.Fragment className="relative">
      <nav className="flex justify-between items-center h-20 max-w-[60rem] mx-auto sticky top-0 bg-slate-900">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" alt="ds" className="h-14" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <div>
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/Cart">
            <div className="relative">
              <AiOutlineShoppingCart className="text-2xl" />
              <div>
                {cart.length > 0 ? (
                  <div className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                    {cart.length}
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
