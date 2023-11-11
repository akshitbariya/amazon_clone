import React from 'react';
import { SiMediamarkt } from 'react-icons/si';
import FormattedPrice from './header/FormattedPrice';
import { useSelector } from 'react-redux';
import { StateProps, StoreProduct } from '@/type';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';

const CartPayment = () => {
  const { data: session } = useSession();
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const [totalAmt, settotalAmount] = useState(0);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const handleCheakout = async () => {
    const stripe = await stripePromise;
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: productData, email: session?.user?.email }),
    });
    const cheakoutSession = await res.json();

    const result: any = await stripe?.redirectToCheckout({
      sessionId: cheakoutSession.id,
    });

    if (result.error) {
      alert(result?.error.message);
    }
  };
  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    settotalAmount(amt);
  }, [productData]);

  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex gap-2 ">
        <span
          className="  bg-green-600 rounded-full p-1 h-6 w-6
             text-sm text-white flex items-center justify-center mt-1"
        >
          <SiMediamarkt />
        </span>
        <p className="  text-sm ">
          Your Order qualifies for free shipping by choosing thsi option at
          cheakout. See details
        </p>
      </div>
      <p className=" flex  items-center justify-between px-2 font-semibold ">
        Total :{' '}
        <span className=" font-bold text-x1">
          <FormattedPrice amount={totalAmt} />
        </span>
      </p>
      {userInfo ? (
        <div className="  flex fles flex-col items-center pb-3">
          <button
            onClick={handleCheakout}
            className=" w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50
        text-white rounded-lg  hover:bg-amazon_yellow hover:text-black duration-300"
          >
            Proceed to buy
          </button>
        </div>
      ) : (
        <div className="  flex fles flex-col items-center pb-3">
          <button
            className=" w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50
    text-white rounded-lg cursor-not-allowed"
          >
            Proceed to buy
          </button>
          <p
            className=" text-xs mt-1 text-red-500 font-semibol
    animate-bounce"
          >
            please log in to continue
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPayment;
