import React from "react"

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"


//css
import {Link} from "react-router-dom"

//css
import "./helper/header.css"


//function
const Header = () => {
    return (
        <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link textcss" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link textcss"
              to="/course"
            >
              COURSE
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              className="nav-link textcss"
              to="/team"
            >
              TEAM
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link textcss"
              to="/login"
            >
              <span className="special">LOGIN</span>
            </Link>
          </li>

        </ul>
      </div>
    )
}

export default Header;