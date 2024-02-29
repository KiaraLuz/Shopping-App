import { useEffect, useState } from "react";
import {
  Bars,
  Circles,
  Grid,
  Oval,
  Puff,
  Rings,
  TailSpin,
  ThreeDots,
} from "react-loader-spinner";
import { ProductTile } from "../components/product-tile";

export function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <ThreeDots
            height={"100"}
            width={"100"}
            color="bg-gray-900"
            visible="true"
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto my-4">
          {products && products.length
            ? products.map((productItem, index) => (
                <ProductTile product={productItem} key={index} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
