// react libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Home from "./pages/home/home.js";
import Course from "./pages/course/course.js";
import Team from "./pages/team/team.js";

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
