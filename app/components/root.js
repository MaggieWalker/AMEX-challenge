import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import CampusList from './CampusList'
import StudentList from './StudentList'

const Root = () => {
  return (
    <div>
      <nav>
        Welcome!
        <ul>
          <li>
            <NavLink to="/campuses" activeClassName="active">Campuses</NavLink>
          </li>
          <li>
            <NavLink to="/students" activeClassName="active">Students</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <Switch>
          <Route path="/campuses" component={CampusList} />
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