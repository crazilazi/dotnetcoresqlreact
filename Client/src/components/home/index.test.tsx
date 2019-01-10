import * as React from "react";
import * as ReactDOM from "react-dom";
import EmployeeTable from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EmployeeTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
