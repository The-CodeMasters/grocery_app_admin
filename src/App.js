import './App.css';
import Login from './pages/login/Login.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Deshboard from './pages/deshboard/Deshboard.js';
function App () {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/deshboard" component={Deshboard} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;