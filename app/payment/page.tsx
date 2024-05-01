"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../components/Home/CheckOutForm";

const Payment = () => {
  const searchParams = useSearchParams();
  const amountString = searchParams.get("amount");

  if (!amountString) {
    // Handle missing amount
    return <div>Error: Missing amount</div>;
  }

  const amount = parseFloat(amountString);

  if (isNaN(amount)) {
    // Handle invalid amount
    return <div>Error: Invalid amount</div>;
  }

  console.log("Amount", amount);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
  );

  const options = {
    mode: "payment" as "payment", // Set mode to "payment" if processing a payment
    amount: Math.round(amount * 100), // Convert amount to cents if using Stripe Checkout
    currency: "usd", // Adjust currency as needed
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckOutForm amount={amount} />
    </Elements>
  );
};

export default Payment;
