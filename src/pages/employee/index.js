import React, { useState } from "react";
import useTable from "../../components/useTable";

import EmployeeList from "./EmployeeList";

//const { tblContainer } = useTable();
export default function Employees() {
  return (
    <div>
      {<EmployeeList />}

      {/* <h1>employees</h1> */}
    </div>
  );
}
