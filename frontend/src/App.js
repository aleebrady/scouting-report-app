import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Home"
import TeamIndex from "./components/TeamIndex"
import TeamForm from "./components/TeamForm"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={TeamIndex} />
          <Route exact path="/teams/new" component={TeamForm} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
