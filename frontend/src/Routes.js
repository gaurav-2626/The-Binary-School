<<<<<<< HEAD
//react router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
=======
// react libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> tarun

// components
import Home from "./pages/home/Home.js";
import Course from "./pages/course/Course.js";
import Team from "./pages/team/Team.js";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/team" component={Team} />
      </Switch>
    </Router>
  );
};

export default Routes;
