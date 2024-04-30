import Image from "next/image";

import AlphaImage from "@/public/Images/uber.jpg";
import cityImage from "@/public/Images/city.jpg";
import ladImage from "@/public/Images/lad.jpg";
import streetImage from "@/public/Images/street.jpg";

import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className={`min-h-screen min-w-screen w-full h-full`}>
      <div className="min-h-screen min-w-screen w-full bg-black -z-10 text-white lg:px-20">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center min-h-screen h-full pt-8">
          <div className="text-white mt-8 lg:mt-4 mx-10 lg:mr-20 flex flex-col ">
            <div className="font-helvectica text-3xl lg:text-6xl font-bold ">
              Go anywhere with Alpha
            </div>

            <SearchBar />
          </div>

          <div className="px-8 mt-6 md:mt-8 lg:px-0 xl:pb-16">
            <Image
              src={AlphaImage}
              height={800}
              width={900}
              alt="Head Image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen min-w-screen w-full bg-white -z-10 text-black lg:px-20">
        <div className="flex flex-col xl:flex-row-reverse  xl:justify-around px-8 xl:px-0  xl:pt-16  pb-6 xl:pb-10 xl:items-center min-h-screen pt-4 ">
          <div className="text-black mt-10 lg:mt-0  lg: my-0 flex flex-col gap-10 mb-6 xl:mb-0">
            <div className=" text-3xl lg:text-5xl font-bold ">
              Drive when you want, make what you need
            </div>

            <div className="text-md lg:text-lg font-extralight ">
              Make money on your schedule with deliveries or rides—or both. You
              can use your own car or choose a rental through Alpha.
            </div>

            <div className="flex gap-6">
              <button className="bg-black text-white font-medium px-6 py-2 rounded-lg ">
                Get Started
              </button>

              <div className="hover: text-gray-800 font-extralight flex items-center">
                Already have an account? Signin
              </div>
            </div>
          </div>

          <Image
            src={cityImage}
            height={700}
            alt="Head Image"
            className="rounded-lg xl:h-[550px] mr-40 "
          />
        </div>
      </div>

      <div className="min-h-screen min-w-screen w-full bg-white -z-10  text-black lg:px-20 xl:pt-0">
        <div className="flex flex-col xl:flex-row  xl:justify-around px-8 xl:px-0  xl:pt-4 pb-6 xl:pb-10  xl:items-center min-h-screen ">
          <div className="text-black mt-10 lg:mt-0  lg: my-0 flex flex-col gap-10 mb-6 xl:mb-0">
            <div className=" text-3xl lg:text-5xl font-bold ">
              The Alpha you know, reimagined for business
            </div>

            <div className="text-md lg:text-lg font-extralight ">
              Alpha for Business is a platform for managing global rides and
              meals, and local deliveries, for companies of any size.
            </div>

            <div className="flex gap-6">
              <button className="bg-black text-white font-medium px-6 py-2 rounded-lg ">
                Get Started
              </button>

              <div className="hover: text-gray-800 font-extralight flex items-center">
                Check out our solutions
              </div>
            </div>
          </div>

          <Image
            src={streetImage}
            height={700}
            alt="Head Image"
            className="rounded-lg xl:h-[550px] xl:ml-40 "
          />
        </div>
      </div>

      <div className="min-h-screen min-w-screen w-full bg-white -z-10 text-black lg:px-20">
        <div className="flex flex-col xl:flex-row-reverse  xl:justify-around px-8 xl:px-0  xl:pt-16  pb-6 xl:pb-10 xl:items-center min-h-screen pt-4 ">
          <div className="text-black mt-10 lg:mt-0  lg: my-0 flex flex-col gap-10 mb-6 xl:mb-0">
            <div className=" text-3xl lg:text-5xl font-bold ">
              Make money by renting out your car
            </div>

            <div className="text-md lg:text-lg font-extralight ">
              Connect with thousands of drivers and earn more per week with
              Alpha’s free fleet management tools.
            </div>

            <div className="">
              <button className="bg-black text-white font-medium px-6 py-2 rounded-lg ">
                Get Started
              </button>
            </div>
          </div>

          <Image
            src={ladImage}
            height={700}
            alt="Head Image"
            className="rounded-lg xl:h-[550px] mr-40 "
          />
        </div>
      </div>

      <div className="min-h-screen min-w-screen w-full bg-black -z-10 text-white px-20 pt-8">
        <div className="text-3xl">Alpha</div>
        <div className="mt-10 font-semibold text-2xl">Developed by</div>
        <div className="grid grid-cols-3 gap-x-4 pt-4">
          <div className="grid cols-span-1 bg-white min-h-[30vh] rounded-3xl hover: shadow-xl hover:ring-8hover:ring-opacity-20 ring-slate-900 hover:shadow-slate-500 "></div>
          <div className="grid cols-span-1 bg-blue-600 min-h-[40vh] rounded-3xl hover: shadow-xl hover:ring-8hover:ring-opacity-20 ring-slate-900 hover:shadow-slate-500 "></div>
          <div className="grid cols-span-1 bg-blue-600 min-h-[40vh] rounded-3xl hover: shadow-xl hover:ring-8hover:ring-opacity-20 ring-slate-900 hover:shadow-slate-500 "></div>
        </div>
        <div className="mt-8">
          <div className="font-bold text-xl">Description</div>
          <div>
            This is an attempt to build open source infrastructure for everyone.
          </div>
          <div className="font-bold text-xl mt-8 pb-2">Tech Stack used:</div>
          <div className="grid gap-4 grid-cols-10 ">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>F</div>
            <div>B</div>
            <div>C</div>
            <div>F</div>
          </div>
        </div>
      </div>
    </div>
  );
}
