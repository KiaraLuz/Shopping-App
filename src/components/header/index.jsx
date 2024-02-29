import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-zinc-900">
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div>
            <h1 className="text-gray-200 font-bold text-lg sm:text-xl md:text-3xl cursor-pointer tracking-wide">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-300 font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
