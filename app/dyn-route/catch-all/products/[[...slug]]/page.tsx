import React from "react";

interface Props {
  params: {
    slug: string[]; //accept an array of strings
  };
}

const ProductPage = ({ params: { slug } }: Props) => {
  return (
    <div>
      <h1 className="font-bold">Product Page</h1>
      <p>{slug}</p>
    </div>
  );
};

export default ProductPage;
