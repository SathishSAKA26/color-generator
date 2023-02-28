import React from "react";

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

const Color = ({ rgb, weight }) => {
  return <div>Color</div>;
};

export default Color;
