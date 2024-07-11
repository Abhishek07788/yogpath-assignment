import Link from "next/link";
import React from "react";

const ProductList = (props) => {
  const { id, name, description, price } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white">
      <h2 className="text-black font-bold mb-2">{name}</h2>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <p className="text-gray-900 font-semibold">
        <strong>Price:</strong> ${price}
      </p>
      <Link
        href={`/product/${id}`}
        className="inline-block mt-4 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductList;
