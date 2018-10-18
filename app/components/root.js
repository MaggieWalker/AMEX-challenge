import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import CampusForm from './CampusForm';
import StudentForm from './StudentForm';
import HomePage from './HomePage';

const Root = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" activeClassName="active" id="homepage">
          Welcome!
        </NavLink>
        <ul id="navlinks">
          <li>
            <NavLink to="/campuses" activeClassName="active" id="campusLink">
              Campuses
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" activeClassName="active" id="studentLink">
              Students
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <div id="homepageRoutes">
          <Switch>
            <Route path="/campuses/new" component={CampusForm} />
            <Route path="/campuses/:id" component={SingleCampus} />
            <Route path="/campuses" component={CampusList} />
            <Route path="/students/new" component={StudentForm} />
            <Route path="/students/:id" component={SingleStudent} />
            <Route path="/students" component={StudentList} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Root;
