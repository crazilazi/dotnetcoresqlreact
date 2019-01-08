import axios from "axios";
import * as React from "react";
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import { IState } from "./allInterface";
import "./EmployeeTable.css";

// import logo from "./logo.svg";

class EmployeeTable extends React.Component {
  public pageSize: number = 0;
  // public pagesCount: number = 0;
  // tslint:disable-next-line:member-access
  state: IState = {
    currentPage: 1,
    empData: [],
    pagesCount: 0
  };
  private url: string = "http://localhost:5000/api/employee/getpageddata";
  constructor(props: any, context: any) {
    super(props, context);
    this.pageSize = 10;
    // tslint:disable-next-line:no-console
    console.log("Charan");
  }

  public componentDidMount() {
    // you logic here
    // tslint:disable-next-line:no-console
    axios
      .get(`${this.url}/${this.state.currentPage}/${this.pageSize}`)
      // tslint:disable-next-line:no-console
      .then(response => {
        const pageCount = Math.ceil(response.data.rowCount / this.pageSize);
        this.setState({ empData: response.data, currentPage: 0, pagesCount: pageCount });
        // this.pagesCount = Math.ceil(this.state.empData.length / this.pageSize);
        // tslint:disable-next-line:no-console
        console.log(this.pageSize);
        // tslint:disable-next-line:no-console
        console.log(this.state.pagesCount);
        // tslint:disable-next-line:no-console
        console.log(this.state.currentPage);
        // tslint:disable-next-line:no-console
        console.log("Kali");
      });
  }

  public handleClick(e: any, index: number) {
    e.preventDefault();
    axios
      .get(`${this.url}/${index + 1}/${this.pageSize}`)
      // tslint:disable-next-line:no-console
      .then(response => {
        this.setState({ empData: response.data.data, currentPage: index });
      });
    this.setState({
      currentPage: index
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
