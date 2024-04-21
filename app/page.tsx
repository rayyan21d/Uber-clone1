import Image from "next/image";

import uberImage from "@/public/Images/uber.jpg";
import SearchBar from "./Component/SearchBar";

export default function Home() {
  return (
    <div className={`min-h-screen min-w-screen w-full h-full`}>
      <div
        className="min-h-screen min-w-screen w-full bg-black -z-10text-white
      
       lg:px-20 "
      >
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center min-h-screen h-full pt-8">
          <div className="text-white mt-8 lg:mt-4 mx-10 lg:mr-20 flex flex-col ">
            <div className="font-helvectica text-3xl lg:text-6xl font-bold ">
              Go anywhere with Uber
            </div>

            <SearchBar />
          </div>

          <div className="px-8 mt-6 md:mt-8 lg:px-0 pb-16">
            <Image
              src={uberImage}
              height={800}
              width={900}
              alt="Head Image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen min-w-screen w-full bg-white -z-10">How</div>

      <div className="min-h-screen min-w-screen w-full bg-white -z-10">Why</div>

      <div className="min-h-screen min-w-screen w-full bg-white -z-10">
        When
      </div>

      <div className="min-h-screen min-w-screen w-full bg-white -z-10">How</div>
    </div>
  );
}
