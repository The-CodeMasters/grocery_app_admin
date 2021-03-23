import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Deshboard from './pages/deshboard/Deshboard.js';
import Users from "./pages/Users/Users.js";

function Routes ({ islogin, setislogin }) {
    return (
        <Router>
            <Switch>
                <div className="Routes">
                    <Route exact path="/" component={Deshboard} />
                    <Route path="/Users" component={Users} />
                </div>
            </Switch>
        </Router>
    );
}

export default Routes;