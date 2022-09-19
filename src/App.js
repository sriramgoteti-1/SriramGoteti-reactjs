import Home from "./Components/Home/Home"
import Create from "../src/Components/Create/Create"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Single from "./Components/Single/Single";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/product/:id">
          <Single/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
