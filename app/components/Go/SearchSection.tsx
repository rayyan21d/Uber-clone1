"use client";

import React, { useContext, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { set } from "zod";
import { InputSection } from "./InputSection";
import { sourceContext } from "../../context/sourceContext";
import { destinationContext } from "../../context/destinationContext";

const SearchSection = () => {
  const { source, setSource } = useContext(sourceContext);
  const { destination, setDestination } = useContext(destinationContext);

  useEffect(() => {
    console.log("Inside Search Section");
    console.log(source);
    console.log(destination);
  }, [source, destination]);

  return (
    <div>
      <div className="bg-white m-4 p-4 rounded-lg px-6 flex flex-col gap-4 shadow-lg shadow-slate-200 ">
        <div className="text-xl font-bold mt-2">Get a ride</div>
        <div>
          <InputSection InputType={"PickUp"} />
        </div>
        <div>
          <InputSection InputType={"DropOff"} />
        </div>

        <div className="">
          <button className="mt-6 mb-2 bg-black text-lg rounded-lg text-white p-2 w-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
