import { Vortex } from "react-loader-spinner";
import React from "react";

const Loader = () => {
  return (
    <div>
      <Vortex
        visible={true}
        height="280"
        width="280"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default Loader;
