"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/redux/products/action";
import ErrorComponent from "../common/ErrorComponent";
import ProductList from "./ProductList";
import LoadingComponent from "../common/LoadingComponent";

const Products = () => {
  const { products, loading, error } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="min-h-screen text-white p-4">
      {loading && products.length === 0 && !error && (
        <div className="flex items-center justify-center w-full h-full">
          <LoadingComponent />
        </div>
      )}
      {!loading && error && (
        <div className="flex items-center justify-center w-full h-full">
          <ErrorComponent isHome />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductList key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
