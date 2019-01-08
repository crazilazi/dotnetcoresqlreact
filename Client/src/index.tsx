import "node_modules/bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import EmployeeTable from "./EmployeeTable";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<EmployeeTable />, document.getElementById(
  "root"
) as HTMLElement);
registerServiceWorker();
