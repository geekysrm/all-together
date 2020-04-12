import React from "react";
import Spinner from "../assets/Spinner.gif";

const Loader = (props) => (
  <div
    style={{
      height: props.height ? props.height : "100px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundImage: `url(${Spinner})`,
    }}
  />
);

export default Loader;
