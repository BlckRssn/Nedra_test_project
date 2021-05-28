/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import modelCar from "../Constants/modelConstant";
import carBrand from "../Constants/brandConstant";
import carListContex from "../contex";
import Button from "@material-ui/core/Button";

export default function ModalBox() {
  const {
    sortBrand,
    sortModel,
    modelArr,
    sortFinModel,
    resetArr,
  } = React.useContext(carListContex);
  return (
    <div>
      <Autocomplete
        onInputChange={(e, value) => {
          sortBrand(value);
          sortModel(value);
        }}
        id="combo-box-demo"
        options={carBrand}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Марка" variant="outlined" />
        )}
      />

      <Autocomplete
        onInputChange={(e, value) => {
          sortFinModel(value);
        }}
        id="combo-box-demo2"
        options={modelArr}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Модель" variant="outlined" />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          resetArr();
        }}
      >
        Очистить
      </Button>
    </div>
  );
}
