import axios from "axios";
import * as React from "react";
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import { IState } from "./allInterface";
import "./EmployeeTable.css";

class EmployeeTable extends React.Component {
  public pageSize: number = 0;
  // tslint:disable-next-line:member-access
  state: IState = {
    currentPage: 0,
    empData: [],
    pagesCount: 0
  };
  private url: string = "http://localhost:5000/api/employee/getpageddata";
  constructor(props: any, context: any) {
    super(props, context);
    this.pageSize = 10;
  }

  public componentDidMount() {
    axios
      .get(`${this.url}/${this.state.currentPage + 1}/${this.pageSize}`)
      .then(response => {
        this.setState({ empData: response.data.appEmployee, pagesCount: response.data.noOfPages });
      });
  }

  public handleClick(e: any, index: number) {
    e.preventDefault();
    axios
      .get(`${this.url}/${index + 1}/${this.pageSize}`)
      .then(response => {
        this.setState({ empData: response.data.appEmployee, currentPage: index });
      });
  }

  public numberToArray(num: number) {
    const obj: number[] = [];
    for (let i = 0; i < num; i++) {
      obj.push(i);
    }
    return obj;
  }

  public render() {
    return (
      <div className="container">
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empData.map(emp => (
              <tr key={emp.employeeId}>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.phoneNumber}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="pagination-wrapper">
          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled={this.state.currentPage <= 0}>
              <PaginationLink
                // tslint:disable-next-line:jsx-no-lambda
                onClick={e => this.handleClick(e, this.state.currentPage - 1)}
                // tslint:disable-next-line:jsx-boolean-value
                previous
                href="#"
              />
            </PaginationItem>

            {this.numberToArray(this.state.pagesCount).map((page, i) => (
              <PaginationItem active={i === this.state.currentPage} key={i}>
                <PaginationLink
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={e => this.handleClick(e, i)}
                  href="#"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem
              disabled={this.state.currentPage >= this.state.pagesCount - 1}
            >
              <PaginationLink
                // tslint:disable-next-line:jsx-no-lambda
                onClick={e => this.handleClick(e, this.state.currentPage + 1)}
                // tslint:disable-next-line:jsx-boolean-value
                next
                href="#"
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    );
  }
}

export default EmployeeTable;
