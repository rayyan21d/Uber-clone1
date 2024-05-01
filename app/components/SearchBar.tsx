"use client";

import React, { useState } from "react";
import uberImage from "@/public/Images/uber.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { sourceContext } from "../context/sourceContext";
import { destinationContext } from "../context/destinationContext";
import { LoadScript } from "@react-google-maps/api";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const SearchBar = () => {
  const router = useRouter();

  const [source, setSource] = useState<any>("");
  const [destination, setDestination] = useState<any>("");
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      {
        <LoadScript
          libraries={["places"]}
          googleMapsApiKey={process.env.NEXT_PUBLIC_PLACES_API_KEY!}
        >
          <div className="flex flex-col gap-4 mt-6">
            <div className="font-light">Request a ride, hop in, and go.</div>
            <div className="flex flex-col gap-4  lg:pl-0 relative w-full lg:w-96 ">
              <div className=" bg-white h-12 rounded-md flex items-center px-4">
                <Image src={uberImage} width={20} height={20} alt="PickUp" />

                <GooglePlacesAutocomplete
                  selectProps={{
                    value: source,
                    onChange: (value) => setSource(value?.value),
                    placeholder: "Enter PickUp",
                    isClearable: true,
                    styles: {
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: "white",
                        width: "300px",
                        border: "0px",
                        margin: "8px",
                      }),

                      menu: (provided) => ({
                        ...provided,
                        color: "black",
                      }),
                    },
                  }}
                />
              </div>

              <div className="bg-white h-12   rounded-md flex items-center px-4">
                <Image src={uberImage} width={20} height={20} alt="PickUp" />

                <GooglePlacesAutocomplete
                  selectProps={{
                    value: destination,
                    onChange: (value) => setDestination(value?.value),
                    placeholder: "Enter Destination",
                    isClearable: true,

                    styles: {
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: "white",
                        width: "300px",
                        border: "0px",
                        margin: "8px",
                        color: "black",
                      }),

                      menu: (provided) => ({
                        ...provided,
                        color: "black",
                      }),
                    },
                  }}
                />
                <Image src={uberImage} width={20} height={20} alt="PickUp" />
              </div>

              <div className="absolute bg-white ml-6 mt-7 h-14 min-w-[0.5px] ">
                {" "}
              </div>
            </div>
            <div>
              <button
                className="bg-white text-black font-semibold px-6 py-2 rounded-lg "
                onClick={() => {
                  if (source && destination) {
                    router.push("/go");
                  }
                }}
              >
                See Prices
              </button>
            </div>
          </div>
        </LoadScript>
      }
    </>
  );
};

export default SearchBar;
