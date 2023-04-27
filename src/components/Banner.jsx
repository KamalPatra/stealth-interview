import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <h1
        style={{
          display: "inline-block",
          padding: "0",
          margin: "0 1rem 0 0",
          fontSize: "1.5rem",
        }}
      >
        Free Shipping
      </h1>
      <p style={{ display: "inline-block", padding: "0", margin: "0" }}>
        Buy above $120
      </p>
    </div>
  );
};

export default Banner;
