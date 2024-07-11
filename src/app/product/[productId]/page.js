import SingleProduct from "@/components/SingleProduct";
import React from "react";

const Details = ({ params }) => {
  return <SingleProduct productId={params.productId} />;
};

export default Details;
