import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import carListContex from "../contex";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "brand", headerName: "Марка", width: 130 },
  { field: "model", headerName: "Модель", width: 130, sortable: false },
  { field: "year", headerName: "Год", type: "number", width: 130 },
  { field: "fuel", headerName: "Тип двигателя", width: 160, sortable: false },
  { field: "bodyType", headerName: "Тип кузова", width: 150, sortable: false },
  {
    field: "price",
    headerName: "Цена",
    type: "number",
    width: 130,
  },
];

export default function DataTable() {
  const { carArr } = React.useContext(carListContex);
  return (
    <div style={{ height: 650, width: "100%" }}>
      <DataGrid rows={carArr} columns={columns} pageSize={9} />
    </div>
  );
}
