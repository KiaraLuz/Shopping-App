import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
    console.log(product);
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className="group flex flex-col items-center border-2 border-zinc-900 gap-4 p-4 m-4 h-[360px] rounded-xl">
      <div className="h-[160px]">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-cover h-full w-full"
        />
      </div>
      <div>
        <div className="w-40 truncate mt-3 text-gray-700">
          <h1 className="font-bold text-lg truncate">{product?.title}</h1>
          <h2 className="text-center">${product?.price}</h2>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mx-5">
        <button
          onClick={
            cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="bg-zinc-900 text-white border-2 rounded-lg font-bold p-4"
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from cart"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
