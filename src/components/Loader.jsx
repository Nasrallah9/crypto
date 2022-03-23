import React from "react";
import { CircleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="loader-container">
      <CircleLoader
        loading={true}
        className="loader"
        size={85}
        color="#EEBC1D"
      />
    </div>
  );
};

export default Loader;
