import React from "react";
import "./Spinner.css";
export default function Spinner() {
  return (
    <div className=" flex  flex-col justify-center items-center w-[100vw] h-[100vh]">
      <span className="loader"></span>
      <p>Loading..........</p>
    </div>
  );
}
