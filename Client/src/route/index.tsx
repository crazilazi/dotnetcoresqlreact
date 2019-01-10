import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmpDetails from 'src/components/details';
import EmpEdit from 'src/components/edit';
import EmployeeTable from 'src/components/home';
export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <Router>
            <div>
                <Route exact={true} path="/" component={EmployeeTable} />
                <Route path="/get/:id" component={EmpDetails} />
                <Route path="/edit/:id" component={EmpEdit} />
            </div>
        </Router>
    );
}
