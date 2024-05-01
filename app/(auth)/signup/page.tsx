// import { Sign } from 'crypto'

import React from "react";
import SignupForm from "./SignupForm";
import { useRouter } from 'next/router';

const page = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <SignupForm />
    </div>
  );
};
export default page;
