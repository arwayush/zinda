"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const page = () => {
  const notify = () => {
    toast("Login Ho Gaya");
  };
  return (
    <div>
      <button onClick={notify} className="bg-seagreen px-2 py-1 text-black">
        Flash
      </button>
      <ToastContainer />
    </div>
  );
};

export default page;
