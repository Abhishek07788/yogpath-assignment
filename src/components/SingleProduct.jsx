"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "@/redux/products/action";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/common/LoadingComponent";
import ErrorComponent from "@/common/ErrorComponent";

const SingleProduct = ({ productId }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { singleProduct, loading, error } = useSelector(
    (store) => store.singleProduct
  );

  useEffect(() => {
    if (productId) {
      dispatch(getSingleProduct(productId));
    }
  }, [productId]);

  return (
    <div className="min-h-screen p-4">
      {loading && !error && (
        <div className="flex items-center justify-center w-full h-full">
          <LoadingComponent />
        </div>
      )}
      {!loading && error && (
        <div className="flex items-center justify-center w-full h-full">
          <ErrorComponent />
        </div>
      )}
      {Object.keys(singleProduct).length > 0 && !loading && !error && (
        <div className="bg-white shadow-md p-6 rounded-md">
          <h1 className="text-black text-lg font-bold">{singleProduct.name}</h1>
          <p className="text-gray-600 mt-2">{singleProduct.description}</p>
          <p className="text-gray-800 font-semibold text-lg mt-4">
            ${singleProduct.price}
          </p>
          <div className="mt-4">
            <p className="text-gray-700">
              <strong>Category:</strong> {singleProduct.category}
            </p>
            <p className="text-gray-700">
              <strong>Stock:</strong> {singleProduct.stock}
            </p>
            <p className="text-gray-700">
              <strong>Rating:</strong> {singleProduct.rating} / 5
            </p>
            <p className="text-gray-700">
              <strong>Manufacturer:</strong> {singleProduct.manufacturer}
            </p>
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => router.push("/")}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
