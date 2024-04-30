"use client";

import React, { useState } from "react";
import uberImage from "@/public/Images/uber.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="font-light">Request a ride, hop in, and go.</div>
      <div className="flex flex-col gap-4  lg:pl-0 relative w-full lg:w-96 ">
        <div className=" bg-white h-12 rounded-md flex items-center px-4">
          <Image src={uberImage} width={20} height={20} alt="PickUp" />
          <input
            type="text"
            placeholder="Enter PickUp"
            className="hover:none text-black font-normal p-2 focus:outline-none 
            block w-full
          "
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>

        <div className="bg-white h-12   rounded-md flex items-center px-4">
          <Image src={uberImage} width={20} height={20} alt="PickUp" />
          <input
            type="text"
            placeholder="Enter Destination"
            className="hover:none text-black font-normal p-2 focus:outline-none

            block w-full 
             "
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Image src={uberImage} width={20} height={20} alt="PickUp" />
        </div>

        <div className="absolute bg-white ml-6 mt-7 h-14 min-w-[0.5px] "> </div>
      </div>
      <div>
        <button
          className="bg-white text-black font-semibold px-6 py-2 rounded-lg "
          onClick={() => {
            router.push("/go");
          }}
        >
          See Prices
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
