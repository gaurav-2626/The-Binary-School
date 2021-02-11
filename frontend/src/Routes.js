//react router
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

//pages
import Home from "./pages/home/home.js"
import Course from "./pages/course/course.js"
import Team from "./pages/team/team.js"

//core
import Header from "./core/header.js"


const Routes = () => {

    return (
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/course" component={Course}/>
            <Route exact path="/team" component={Team}/>
          </Switch>
      </Router>
    );
  }
  
  export default Routes;