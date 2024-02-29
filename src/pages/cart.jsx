import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartTile } from "../components/cart-tile";

export function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-between flex-col md:flex-row">
      {cart && cart.length ? (
        <>
          <div className="grid grid-cols-1 max-w-6xl">
            <div className="flex flex-col m-4 gap-4">
              {cart.map((cartItem, index) => (
                <CartTile cartItem={cartItem} key={index} />
              ))}
            </div>
          </div>
          <div className="w-[300px] text-right">
            <div className="flex flex-col justify-center items-start md:items-end p-4">
              <h1 className="font-bold text-lg text-zinc-900">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-zinc-900 font-bold">Total Item</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-zinc-900 font-bold">Total Amount</span>
                <span>: ${totalCart.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] w-full flex flex-col items-center justify-center">
          <h1 className="text-zinc-900 font-bold text-xl mb-4">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-zinc-900 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
