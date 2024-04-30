"use client";

import React, { useContext, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { set } from "zod";
import { InputSection } from "./InputSection";
import { sourceContext } from "../../context/sourceContext";
import { destinationContext } from "../../context/destinationContext";
import ChooseRide from "./ChooseRide";

const SearchSection = () => {
  const { source, setSource } = useContext(sourceContext) || {
    source: { lat: 0, lng: 0 },
    setSource: () => {},
  };
  const { destination, setDestination } = useContext(destinationContext) || {
    destination: { lat: 0, lng: 0 },
    setDestination: () => {},
  };
  const [distance, setDistance] = useState<number>(0);

  const calculateDistance = () => {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      { lat: source.lat, lng: source.lng },
      { lat: destination.lat, lng: destination.lng }
    );

    console.log(distance * 0.0006213);
    setDistance(distance * 0.0006213);
  };

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
          <button
            className="mt-6 mb-2 bg-black text-lg rounded-lg text-white p-2 w-full"
            onClick={() => {
              calculateDistance();
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className={`${distance != 0 ? "visible" : "hidden"}`}>
        <ChooseRide dist={distance} />
      </div>
    </div>
  );
};

export default SearchSection;
