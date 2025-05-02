import React from "react";
import product from "../product";

const Image = () => (
  <img
    src={product.image}
    alt={product.name}
    className="img-fluid mx-auto d-block"
    style={{
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
    }}
  />
);

export default Image;
