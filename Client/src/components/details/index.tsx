import axios from "axios";
import * as React from 'react';
import { match } from "react-router";
import { Link } from "react-router-dom";
import { IEstate } from 'src/common/allInterface';

// tslint:disable-next-line:interface-name
export interface IRoutParams {
    id: string;
}
// tslint:disable-next-line:interface-name
export interface IProps {
    match: match<IRoutParams>;
}
class EmpDetails extends React.Component<IProps, {}> {
    public state: IEstate = {
        employee: {},
    };
    private url: string = "http://localhost:5000/api/employee/GetOneEmployee";
    public componentDidMount() {
        axios
            .get(`${this.url}/${this.props.match.params.id}`)
            .then(response => {
                // tslint:disable-next-line:no-console
                console.log(response.data);
                this.setState({ employee: response.data });
            });
    }

    public render() {
        return (<div className="container">
            <div className="card" style={{ width: 600 }}>
                <h5 className="card-header">
                    <table className="table-users table" >
                        <tbody>
                            <tr>
                                <td align="center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" /></svg>
                                </td>
                                <td align="left">
                                    <b>{this.state.employee.fullName}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </h5>
                <div className="card-body">
                    <table className="table-users table" >
                        <tbody>
                            <tr>
                                <td align="left">
                                    <p className="card-text">First Name</p>
                                </td>
                                <td align="center" >
                                    :
                </td>
                                <td align="left">
                                    <p className="card-text">{this.state.employee.firstName}</p>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <p className="card-text">Last Name</p>
                                </td>
                                <td align="center">
                                    :
                </td>
                                <td align="left">
                                    <p className="card-text">{this.state.employee.lastName}</p>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <p className="card-text">Email</p>
                                </td>
                                <td align="center">
                                    :
                </td>
                                <td align="left">
                                    <p className="card-text">{this.state.employee.email}</p>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <p className="card-text">Address</p>
                                </td>
                                <td align="center">
                                    :
                </td>
                                <td align="left">
                                    <p className="card-text">{this.state.employee.address}</p>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="card-body">
                    <b>
                        <Link className="btn btn-primary pull-left" to="/">Back</Link>

                    </b>
                    <b>
                        <Link className="btn btn-primary pull-right" to={`/edit/${this.state.employee.id}`}>Edit</Link>
                    </b >
                </div >
            </div >
        </div >);
    }
}

export default EmpDetails;