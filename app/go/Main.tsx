"use client";

import React, { useState } from "react";
import SearchSection from "../components/Go/SearchSection";
import MapSection from "../components/Go/MapSection";
// import { LoadScript } from "@react-google-maps/api";
import { sourceContext } from "../context/sourceContext";
import { destinationContext } from "../context/destinationContext";
import { useJsApiLoader } from "@react-google-maps/api";

const Main = () => {
  const [source, setSource] = useState({ lat: 0, lng: 0 });
  const [destination, setDestination] = useState({ lat: 0, lng: 0 });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_PLACES_API_KEY!,
    libraries: ["places"],
  });

  return (
    isLoaded && (
      <div className=" lg:mx-10 mt-8 h-full min-h-screen">
        <sourceContext.Provider value={{ source, setSource }}>
          <destinationContext.Provider value={{ destination, setDestination }}>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
              <div className="lg:col-span-2">
                <SearchSection />
              </div>

              <div className="lg:col-span-5 ">
                {/* This is a comment */}
                <div className="lg:flex">
                  <div className="">
                    <MapSection />
                  </div>
                </div>
              </div>
            </div>
          </destinationContext.Provider>
        </sourceContext.Provider>
      </div>
    )
  );
};

export default Main;
