import React, { useState } from "react";

import auto from "@/public/Vehicles/auto.png";
import bike from "@/public/Vehicles/bike.png";
import car from "@/public/Vehicles/AlphaGo.png";
import carXl from "@/public/Vehicles/AlphaXl.png";
import Image from "next/image";
import person from "@/public/Vehicles/person.png";
import { useRouter } from "next/navigation";

const rides = [
  {
    id: 1,
    title: "Auto",
    image: auto,
    price: 20,
    seats: 3,
    desc: "Affordable auto rides through the city",
  },
  {
    id: 2,
    title: "Bike",
    image: bike,
    price: 15,
    seats: 2,
    desc: "Budget friedly quick  rides",
  },
  {
    id: 3,
    title: "Car",
    image: car,
    price: 25,
    seats: 3,
    desc: "Your neighbourhood cars",
  },
  {
    id: 4,
    title: "Car XL",
    image: carXl,
    price: 28,
    seats: 6,
    desc: "Suitable for Intracity travel",
  },
];

const ChooseRide = (dist: any) => {
  const [active, setActive] = useState<number | null>(null);
  const [selected, setSelected] = useState<any>([]);
  console.log("Distance from within", dist);

  const router = useRouter();

  return (
    <div className="bg-white m-4 p-4 rounded-lg px-3 flex flex-col gap-4 shadow-lg shadow-slate-200 mb-10">
      <div className="text-2xl font-bold mt-2"> Choose your Ride </div>
      <div className="overflow-auto h-60 ">
        {rides.map((ride, index) => (
          <div
            key={ride.title}
            className={`cursor-pointer flex flex-1 gap-4 ${
              active == index ? "border-black" : "border-transparent"
            } border-transparent border-4 rounded-lg p-2`}
            onClick={() => {
              setActive(index);
              setSelected(ride);
            }}
          >
            <div className="max-w-12">
              <Image src={ride.image} width={70} height={70} alt="Car" />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">{ride.title}</div>
              <div className="font-extralight text-sm text-gray-500">
                <div className="text-[13px] text-gray-700 font-semibold flex items-center gap-1">
                  <Image src={person} width={12} height={12} alt="head" />
                  {ride.seats}
                </div>
                {ride.desc}
              </div>
            </div>
            <div className="text-lg font-semibold text-grey-700 font-mono ">
              ${(ride.price * dist.dist).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {selected.length != 0 ? (
        <div className="flex justify-between fixed bottom-5 bg-white p-3 shadow-xl rounded-lg w-full md:w-72 border-2 items-center ">
          <div>Make Payment</div>
          <button
            className="p-3 bg-black text-white rounded-lg text-center z-[999] "
            onClick={() => {
              router.push(
                `/payment?amount=${(selected.price * dist.dist).toFixed(2)}`
              );
            }}
          >
            Request {selected.title}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ChooseRide;
