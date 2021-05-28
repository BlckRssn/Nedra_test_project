import React, { useState } from "react";
import CAR from "./Constants/constants";
import MODELCAR from "./Constants/modelConstant";

const carListContex = React.createContext(null);

export function CarProvider(props) {
  const [carArr, setCarArr] = useState(CAR);
  const [modelArr, setModelArr] = useState(MODELCAR);

  const sortBrand = (value) => {
    const newBrandArr = CAR.filter((b) => b.brand === value);
    setCarArr(newBrandArr);
  };

  const sortModel = (value) => {
    console.log("test");
    const newModelArr = MODELCAR.filter((b) => b.brand === value);
    setModelArr(newModelArr);
    console.log(newModelArr);
  };
  const sortFinModel = (value) => {
    const newModelArr = carArr.filter((car) => car.model === value);
    setCarArr(newModelArr);
  };

  const resetArr = () => {
    setCarArr(CAR);
  };

  return (
    <carListContex.Provider
      value={{
        setCarArr,
        sortBrand,
        carArr,
        modelArr,
        sortModel,
        sortFinModel,
        resetArr,
      }}
      {...props}
    />
  );
}

export default carListContex;
