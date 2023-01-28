import React from "react";
import Carosel from "./Carosel";
import ExtraNode from "./ExtraNode";

const Section1 = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Carosel></Carosel>
      <ExtraNode></ExtraNode>
    </div>
  );
};

export default Section1;
