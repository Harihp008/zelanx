import { useLoaderData } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export async function loader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default function Users() {
  const users = useLoaderData() as any[];
  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    { headerName: "Role", field: "company.name" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact rowData={users} columnDefs={columnDefs} />
    </div>
  );
}