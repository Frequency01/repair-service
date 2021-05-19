import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RepairDetails from "./components/RepairDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <RepairDetails />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
