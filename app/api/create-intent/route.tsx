import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import Error from "next/error";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  typescript: true,
  apiVersion: "2024-04-10",
});

export async function POST(request: NextRequest) {
  const data: any = await request.json();

  const amount = data.amount;
  console.log("Amount transferred was", amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount),
      currency: "usd",
      // Desc and shipping are required for indian origins
      description: "For Project Alpha",
      shipping: {
        name: "Random singh",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
    });
    return NextResponse.json(paymentIntent.client_secret, {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ err: error }), {
      status: 402,
    });
  }
}
