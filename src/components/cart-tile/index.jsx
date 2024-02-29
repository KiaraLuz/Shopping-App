import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <>
      <div className="w-full md:w-5/6 flex items-center justify-between p-4 bg-zinc-900 rounded-xl">
        <div className="flex p-2">
          <div className="h-[160px] min-w-[160px] max-w-[160px] mr-4 p-2 bg-white rounded-lg">
            <img
              src={cartItem?.image}
              className="object-contain w-full h-full"
              alt={cartItem?.title}
            />
          </div>
          <div className="selft-start">
            <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
            <p className="text-white">${cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-zinc-900 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
}
