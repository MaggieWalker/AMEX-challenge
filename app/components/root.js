import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import CampusList from './CampusList'
import StudentList from './StudentList'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import CampusForm from './CampusForm'
import StudentForm from './StudentForm'

const Root = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" activeClassName="active" id="homepage">Welcome!</NavLink>
        <ul id="navlinks">
          <li>
            <NavLink to="/campuses" activeClassName="active" id="campusLink">Campuses</NavLink>
          </li>
          <li>
            <NavLink to="/students" activeClassName="active" id="studentLink">Students</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <Switch>
          <Route path="/campuses/new" component={CampusForm} />
          <Route path="/campuses/:id" component={SingleCampus} />
          <Route path="/campuses" component={CampusList} />
          <Route path="/students/new" component={StudentForm} />
          <Route path="/students/:id" component={SingleStudent} />
          <Route path="/students" component={StudentList} />
        </Switch>
      </main>
    </div>
  )
}

export default Root


//I think this is what I eventually want! Nope, this is a STATEFUL component, we don't want that
// export default class Root extends Component {

//   render() {
//     return (
//       <div>
//         <nav>
//         Welcome!
//       </nav>
//       <main>
//         <Switch>
//           <Route path="/campuses" component={CampusList} />
//         </Switch>
//         <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
//         <p>This seems like a nice place to get started with some Routes!</p>
//       </main>

//       </div>
//     )
//   }
// }