import React from "react";
import {FaArrowUp} from "react-icons/fa"

export default function ScrollTop() {
  return (
    <button className="scroll-top scroll-to-target" data-target="html">
       <FaArrowUp fontSize={30}/>
    </button>
  );
}
