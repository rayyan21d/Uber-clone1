import React from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CheckOutForm: React.FC<{ amount: number }> = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      return;
    }

    const result = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const secretKey = await result.json();
    console.log("Secret Key", secretKey);

    const error = await stripe.confirmPayment({
      clientSecret: secretKey,
      elements: elements,
      confirmParams: {
        return_url: "http://localhost:3000/",
        //
      },
    });

    if (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="px-6 mt-16 flex justify-center items-center h-full">
      <div className="flex flex-col gap-8 bg-slate-100 rounded-lg p-10 shadow-lg shadow-slate-300">
        <form onSubmit={handleSubmit}>
          <div className="text-2xl text-gray-900 font-mono font-bold mb-10">
            Checkout Amount: {amount}
          </div>
          <PaymentElement />
          <button className="w-full bg-black text-white p-2 rounded-lg mt-10">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;
